import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { defaultPlaceholder } from '@/lib/image-utils';

interface BackgroundImageProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
  overlayClassName?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Component for displaying optimized background images
 */
export function BackgroundImage({
  src,
  fallbackSrc = defaultPlaceholder,
  className,
  children,
  overlayClassName,
  priority = false,
  onLoad,
  onError,
}: BackgroundImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setLoaded(false);
    setImageSrc(src);

    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        setImageSrc(fallbackSrc);
        onError?.();
      };
    }
  }, [src, fallbackSrc, priority, onLoad, onError]);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageSrc(fallbackSrc);
    onError?.();
  };

  return (
    <div
      className={cn(
        'relative bg-cover bg-center bg-no-repeat transition-opacity duration-500',
        !loaded && !priority && 'bg-gray-100',
        className
      )}
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      {!priority && (
        <img
          src={imageSrc}
          alt=""
          className="hidden"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {/* Optional overlay */}
      {overlayClassName && (
        <div className={cn('absolute inset-0', overlayClassName)} />
      )}
      
      {/* Content */}
      {children}
    </div>
  );
} 