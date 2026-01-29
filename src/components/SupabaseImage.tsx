import { useState, useEffect } from 'react';
import { getPublicUrl } from '../lib/supabase';

interface SupabaseImageProps {
  path: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function SupabaseImage({ path, alt, className = '', fallback }: SupabaseImageProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    try {
      const url = getPublicUrl(path);
      console.log('Loading image from:', url);
      setImageUrl(url);
    } catch (error) {
      console.error('Error loading image:', error);
      setHasError(true);
      setIsLoading(false);
    }
  }, [path]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    console.error('Image failed to load:', imageUrl);
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError && fallback) {
    return (
      <div className={`bg-slate-200 flex items-center justify-center ${className}`}>
        <span className="text-slate-400 text-sm">{fallback}</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`bg-slate-200 animate-pulse ${className}`} />
      )}
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
}
