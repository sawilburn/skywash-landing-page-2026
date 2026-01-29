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

  return data;
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
