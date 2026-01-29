import { useState, useEffect } from 'react';
import { getSiteImage } from '../lib/siteImages';
import { SupabaseImage } from './SupabaseImage';

interface DynamicSectionImageProps {
  section: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function DynamicSectionImage({ section, alt, className = '', fallback }: DynamicSectionImageProps) {
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      setIsLoading(true);
      const image = await getSiteImage(section);

      if (image) {
        setImagePath(image.storage_path);
      }

      setIsLoading(false);
    }

    fetchImage();
  }, [section]);

  if (isLoading) {
    return <div className={`bg-slate-200 animate-pulse ${className}`} />;
  }

  if (!imagePath) {
    return (
      <div className={`bg-slate-200 flex items-center justify-center ${className}`}>
        <span className="text-slate-400 text-sm">{fallback || 'No image available'}</span>
      </div>
    );
  }

  return (
    <SupabaseImage
      path={imagePath}
      alt={alt}
      className={className}
      fallback={fallback}
    />
  );
}
