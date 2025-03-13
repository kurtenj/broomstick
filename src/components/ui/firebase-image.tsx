import { useState, useEffect } from 'react';
import { ResponsiveImage } from './responsive-image';
import { getFirebaseImageUrl, defaultPlaceholder } from '@/lib/image-utils';

interface FirebaseImageProps {
  storagePath: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Component for displaying images from Firebase Storage with optimization
 */
export function FirebaseImage({
  storagePath,
  alt,
  className,
  containerClassName,
  width,
  height,
  sizes,
  priority = false,
  onLoad,
  onError,
}: FirebaseImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(false);

    async function loadImage() {
      try {
        const url = await getFirebaseImageUrl(storagePath);
        if (isMounted) {
          setImageUrl(url);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error loading image from Firebase:', err);
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    }

    if (storagePath) {
      loadImage();
    } else {
      setError(true);
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [storagePath]);

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  if (isLoading) {
    return (
      <div 
        className={`bg-gray-100 animate-pulse ${containerClassName}`}
        style={{ width, height }}
      >
        <span className="sr-only">Loading image</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <ResponsiveImage
        src={defaultPlaceholder}
        alt={alt}
        className={className}
        containerClassName={containerClassName}
        width={width}
        height={height}
        sizes={sizes}
      />
    );
  }

  return (
    <ResponsiveImage
      src={imageUrl}
      alt={alt}
      className={className}
      containerClassName={containerClassName}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      onLoad={handleLoad}
      onError={handleError}
      fallbackSrc={defaultPlaceholder}
    />
  );
} 