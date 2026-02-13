import { supabase } from './supabase';

export interface SiteVideo {
  id: string;
  video_path: string;
  thumbnail_path: string | null;
  title: string;
  description: string | null;
  video_type: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export function getVideoUrl(storagePath: string): string {
  const { data } = supabase.storage.from('Videos').getPublicUrl(storagePath);
  return data.publicUrl;
}

export async function uploadVideo(
  videoFile: File,
  thumbnailFile: File | null,
  title: string,
  description: string,
  videoType: string
): Promise<{ success: boolean; data?: SiteVideo; error?: string }> {
  try {
    const timestamp = Date.now();
    const videoPath = `${timestamp}-${videoFile.name}`;

    const { error: videoError } = await supabase.storage
      .from('Videos')
      .upload(videoPath, videoFile, { upsert: false });

    if (videoError) {
      throw new Error(`Failed to upload video: ${videoError.message}`);
    }

    let thumbnailPath: string | null = null;
    if (thumbnailFile) {
      thumbnailPath = `${timestamp}-${thumbnailFile.name}`;
      const { error: thumbnailError } = await supabase.storage
        .from('Videos')
        .upload(thumbnailPath, thumbnailFile, { upsert: false });

      if (thumbnailError) {
        await supabase.storage.from('Videos').remove([videoPath]);
        throw new Error(`Failed to upload thumbnail: ${thumbnailError.message}`);
      }
    }

    const { data: existingActive, error: queryError } = await supabase
      .from('site_videos')
      .select('id')
      .eq('video_type', videoType)
      .eq('is_active', true)
      .maybeSingle();

    if (queryError) {
      const pathsToRemove = thumbnailPath ? [videoPath, thumbnailPath] : [videoPath];
      await supabase.storage.from('Videos').remove(pathsToRemove);
      throw new Error(`Database query error: ${queryError.message}`);
    }

    if (existingActive) {
      const { error: deactivateError } = await supabase
        .from('site_videos')
        .update({ is_active: false })
        .eq('id', existingActive.id);

      if (deactivateError) {
        console.warn('Failed to deactivate existing video:', deactivateError);
      }
    }

    const { data: newRecord, error: insertError } = await supabase
      .from('site_videos')
      .insert({
        video_path: videoPath,
        thumbnail_path: thumbnailPath,
        title,
        description,
        video_type: videoType,
        is_active: true,
      })
      .select()
      .single();

    if (insertError) {
      const pathsToRemove = thumbnailPath ? [videoPath, thumbnailPath] : [videoPath];
      await supabase.storage.from('Videos').remove(pathsToRemove);
      throw new Error(`Failed to save video metadata: ${insertError.message}`);
    }

    return { success: true, data: newRecord };
  } catch (error) {
    console.error('Error uploading video:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function getActiveVideo(videoType: string): Promise<SiteVideo | null> {
  const { data, error } = await supabase
    .from('site_videos')
    .select('*')
    .eq('video_type', videoType)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('Error fetching video:', error);
    return null;
  }

  return data;
}

export async function getAllVideos(): Promise<SiteVideo[]> {
  const { data, error } = await supabase
    .from('site_videos')
    .select('*')
    .order('video_type', { ascending: true })
    .order('is_active', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all videos:', error);
    return [];
  }

  return data || [];
}

export async function updateVideoStatus(
  id: string,
  isActive: boolean,
  videoType?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (isActive && videoType) {
      const { error: deactivateError } = await supabase
        .from('site_videos')
        .update({ is_active: false })
        .eq('video_type', videoType)
        .eq('is_active', true)
        .neq('id', id);

      if (deactivateError) {
        throw new Error(`Failed to deactivate other videos: ${deactivateError.message}`);
      }
    }

    const { error } = await supabase
      .from('site_videos')
      .update({ is_active: isActive })
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to update video status: ${error.message}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating video status:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function deleteVideo(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: video, error: fetchError } = await supabase
      .from('site_videos')
      .select('video_path, thumbnail_path')
      .eq('id', id)
      .single();

    if (fetchError) {
      throw new Error(`Failed to fetch video: ${fetchError.message}`);
    }

    const { error: deleteError } = await supabase
      .from('site_videos')
      .delete()
      .eq('id', id);

    if (deleteError) {
      throw new Error(`Failed to delete video record: ${deleteError.message}`);
    }

    const pathsToRemove = video.thumbnail_path
      ? [video.video_path, video.thumbnail_path]
      : [video.video_path];

    await supabase.storage.from('Videos').remove(pathsToRemove);

    return { success: true };
  } catch (error) {
    console.error('Error deleting video:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
