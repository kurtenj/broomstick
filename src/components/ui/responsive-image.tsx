import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  loadingClassName?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * ResponsiveImage component that supports:
 * - Lazy loading (unless priority is true)
 * - Responsive sizing with srcset
 * - Fallback images
 * - Loading states
 * - WebP format with fallback
 * - Object-fit control for aspect ratio management
 * - Object-position control for image positioning
 */
export function ResponsiveImage({
  src,
  alt,
  fallbackSrc,
  sizes = '100vw',
  className,
  containerClassName,
  loadingClassName,
  priority = false,
  objectFit = 'contain',
  objectPosition = 'center',
  onLoad,
  onError,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(!priority);
    setError(false);
    setImageSrc(src);
  }, [src, priority]);

  // Generate WebP source if the original is not already WebP
  const isWebP = src.toLowerCase().endsWith('.webp');
  const webpSrc = isWebP ? src : src.replace(/\.(jpe?g|png)$/i, '.webp');

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setError(true);
    if (fallbackSrc && !imageSrc.includes(fallbackSrc)) {
      setImageSrc(fallbackSrc);
    }
    onError?.();
  };

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {isLoading && (
        <div 
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse',
            loadingClassName
          )}
        >
          <span className="sr-only">Loading image</span>
        </div>
      )}
      
      <picture>
        {!error && !isWebP && (
          <source 
            srcSet={webpSrc} 
            type="image/webp" 
          />
        )}
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          style={{
            objectFit,
            objectPosition
          }}
          sizes={sizes}
          {...props}
        />
      </picture>
    </div>
  );
} 