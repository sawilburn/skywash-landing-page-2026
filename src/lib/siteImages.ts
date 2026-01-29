import { supabase } from './supabase';

export interface SiteImage {
  id: string;
  section: string;
  title: string;
  storage_path: string;
  alt_text: string;
  is_active: boolean;
  sort_order: number;
}

export interface BeforeAfterImage {
  id: string;
  service_type: string;
  before_image_path: string;
  after_image_path: string;
  before_alt: string;
  after_alt: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

export async function getSiteImage(section: string): Promise<SiteImage | null> {
  const { data, error } = await supabase
    .from('site_images')
    .select('*')
    .eq('section', section)
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('Error fetching site image:', error);
    return null;
  }

  console.log(`Site image for section "${section}":`, data);
  return data;
}

export function getImageUrl(storagePath: string): string {
  const { data } = supabase.storage.from('images').getPublicUrl(storagePath);
  return data.publicUrl;
}

export async function uploadSiteImage(
  file: File,
  section: string,
  title: string,
  altText: string
): Promise<{ success: boolean; data?: SiteImage; error?: string }> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('section', section);
    formData.append('title', title);
    formData.append('altText', altText);

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-site-image`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Upload failed');
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function uploadBeforeAfterImages(
  beforeFile: File,
  afterFile: File,
  serviceType: string,
  beforeAlt: string,
  afterAlt: string
): Promise<{ success: boolean; error?: string; data?: BeforeAfterImage }> {
  try {
    const timestamp = Date.now();
    const beforePath = `${timestamp}-${beforeFile.name}`;
    const afterPath = `${timestamp}-${afterFile.name}`;

    const { error: beforeError } = await supabase.storage
      .from('images')
      .upload(beforePath, beforeFile, { upsert: false });

    if (beforeError) {
      throw new Error(`Failed to upload before image: ${beforeError.message}`);
    }

    const { error: afterError } = await supabase.storage
      .from('images')
      .upload(afterPath, afterFile, { upsert: false });

    if (afterError) {
      await supabase.storage.from('images').remove([beforePath]);
      throw new Error(`Failed to upload after image: ${afterError.message}`);
    }

    const { data: existingActive, error: queryError } = await supabase
      .from('before_after_images')
      .select('id')
      .eq('service_type', serviceType)
      .eq('is_active', true)
      .maybeSingle();

    if (queryError) {
      await supabase.storage.from('images').remove([beforePath, afterPath]);
      throw new Error(`Database query error: ${queryError.message}`);
    }

    if (existingActive) {
      const { error: deactivateError } = await supabase
        .from('before_after_images')
        .update({ is_active: false })
        .eq('id', existingActive.id);

      if (deactivateError) {
        console.warn('Failed to deactivate existing image:', deactivateError);
      }
    }

    const { data: newRecord, error: insertError } = await supabase
      .from('before_after_images')
      .insert({
        service_type: serviceType,
        before_image_path: beforePath,
        after_image_path: afterPath,
        before_alt: beforeAlt,
        after_alt: afterAlt,
        is_active: true,
        display_order: 0,
      })
      .select()
      .single();

    if (insertError) {
      await supabase.storage.from('images').remove([beforePath, afterPath]);
      throw new Error(`Failed to save image metadata: ${insertError.message}`);
    }

    return { success: true, data: newRecord };
  } catch (error) {
    console.error('Error uploading before/after images:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function getBeforeAfterImages(
  serviceType: string
): Promise<BeforeAfterImage | null> {
  const { data, error } = await supabase
    .from('before_after_images')
    .select('*')
    .eq('service_type', serviceType)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('Error fetching before/after images:', error);
    return null;
  }

  return data;
}

export async function getAllBeforeAfterImages(): Promise<BeforeAfterImage[]> {
  const { data, error } = await supabase
    .from('before_after_images')
    .select('*')
    .order('service_type', { ascending: true })
    .order('is_active', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all before/after images:', error);
    return [];
  }

  return data || [];
}

export async function updateBeforeAfterImageStatus(
  id: string,
  isActive: boolean,
  serviceType?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (isActive && serviceType) {
      const { error: deactivateError } = await supabase
        .from('before_after_images')
        .update({ is_active: false })
        .eq('service_type', serviceType)
        .eq('is_active', true)
        .neq('id', id);

      if (deactivateError) {
        throw new Error(`Failed to deactivate other images: ${deactivateError.message}`);
      }
    }

    const { error } = await supabase
      .from('before_after_images')
      .update({ is_active: isActive })
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to update image status: ${error.message}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating image status:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function deleteBeforeAfterImage(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: image, error: fetchError } = await supabase
      .from('before_after_images')
      .select('before_image_path, after_image_path')
      .eq('id', id)
      .single();

    if (fetchError) {
      throw new Error(`Failed to fetch image: ${fetchError.message}`);
    }

    const { error: deleteError } = await supabase
      .from('before_after_images')
      .delete()
      .eq('id', id);

    if (deleteError) {
      throw new Error(`Failed to delete image record: ${deleteError.message}`);
    }

    await supabase.storage
      .from('images')
      .remove([image.before_image_path, image.after_image_path]);

    return { success: true };
  } catch (error) {
    console.error('Error deleting image:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
