import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface DynamicBeforeAfterSliderProps {
  serviceType: string;
  fallbackBefore?: string;
  fallbackAfter?: string;
}

interface BeforeAfterImage {
  id: string;
  service_type: string;
  before_image_path: string;
  after_image_path: string;
  before_alt: string;
  after_alt: string;
  is_active: boolean;
  display_order: number;
}

export function DynamicBeforeAfterSlider({
  serviceType,
  fallbackBefore = 'roof-dirty.jpg',
  fallbackAfter = 'roof-clean.jpg'
}: DynamicBeforeAfterSliderProps) {
  const [imageData, setImageData] = useState<BeforeAfterImage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase
          .from('before_after_images')
          .select('*')
          .eq('service_type', serviceType)
          .eq('is_active', true)
          .order('display_order', { ascending: true })
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error('Error fetching before/after images:', error);
          setImageData(null);
        } else {
          setImageData(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setImageData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [serviceType]);

  if (loading) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-slate-200 animate-pulse flex items-center justify-center">
        <p className="text-slate-500">Loading comparison...</p>
      </div>
    );
  }

  if (!imageData) {
    return (
      <BeforeAfterSlider
        beforeImage={fallbackBefore}
        afterImage={fallbackAfter}
        beforeAlt="Before cleaning"
        afterAlt="After cleaning"
      />
    );
  }

  return (
    <BeforeAfterSlider
      beforeImage={imageData.before_image_path}
      afterImage={imageData.after_image_path}
      beforeAlt={imageData.before_alt || 'Before cleaning'}
      afterAlt={imageData.after_alt || 'After cleaning'}
    />
  );
}
