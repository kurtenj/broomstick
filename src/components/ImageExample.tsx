import { ResponsiveImage, BackgroundImage } from './ui/image-components';

/**
 * Example component demonstrating the use of optimized image components
 */
export function ImageExample() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Image Optimization Examples</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Responsive Image</h3>
        <p className="text-gray-600 mb-4">
          This image automatically adapts to different screen sizes and uses WebP format with fallbacks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ResponsiveImage
              src="/images/placeholder.svg"
              alt="Example image"
              className="rounded-lg shadow-md"
              containerClassName="max-w-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-500">Standard responsive image with WebP support</p>
          </div>
          
          <div>
            <ResponsiveImage
              src="/images/placeholder.svg"
              alt="Priority loaded image"
              className="rounded-lg shadow-md"
              containerClassName="max-w-md"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-500">Priority loaded image (no lazy loading)</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Background Image</h3>
        <p className="text-gray-600 mb-4">
          Background images with content overlay and fallback support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <BackgroundImage
              src="/images/placeholder.svg"
              className="h-64 rounded-lg shadow-md"
              overlayClassName="bg-black/30"
            >
              <div className="flex items-center justify-center h-full">
                <h4 className="text-white text-xl font-bold">Background with Overlay</h4>
              </div>
            </BackgroundImage>
            <p className="mt-2 text-sm text-gray-500">Background image with semi-transparent overlay</p>
          </div>
          
          <div>
            <BackgroundImage
              src="/images/placeholder.svg"
              className="h-64 rounded-lg shadow-md"
              priority={true}
            >
              <div className="flex items-center justify-center h-full">
                <h4 className="text-gray-800 text-xl font-bold p-2 bg-white/70 rounded">Priority Background</h4>
              </div>
            </BackgroundImage>
            <p className="mt-2 text-sm text-gray-500">Priority loaded background image</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Error Handling</h3>
        <p className="text-gray-600 mb-4">
          Images with invalid sources will show fallback images.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ResponsiveImage
              src="/non-existent-image.jpg"
              alt="Non-existent image"
              className="rounded-lg shadow-md"
              containerClassName="max-w-md"
            />
            <p className="mt-2 text-sm text-gray-500">Fallback for non-existent image</p>
          </div>
        </div>
      </div>
    </div>
  );
} 