import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

/**
 * Image size configuration for responsive images
 */
export const imageSizes = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Default image placeholder for loading or error states
 */
export const defaultPlaceholder = '/images/placeholder.svg';

/**
 * Generates a srcset string for responsive images
 * @param baseUrl The base URL of the image
 * @param widths Array of widths to generate srcset for
 * @returns A srcset string for use in img or source elements
 */
export function generateSrcSet(
  baseUrl: string,
  widths: number[] = Object.values(imageSizes)
): string {
  // If the URL already has a query string, use & to append width, otherwise use ?
  const separator = baseUrl.includes('?') ? '&' : '?';
  
  return widths
    .map((width) => `${baseUrl}${separator}width=${width} ${width}w`)
    .join(', ');
}

/**
 * Generates sizes attribute for responsive images
 * @param breakpoints Object mapping breakpoints to sizes
 * @returns A sizes string for use in img or source elements
 */
export function generateSizes(
  breakpoints: Record<string, string> = {
    '(max-width: 640px)': '100vw',
    '(max-width: 768px)': '90vw',
    '(max-width: 1024px)': '80vw',
    '(max-width: 1280px)': '70vw',
    'default': '60vw',
  }
): string {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => 
      breakpoint === 'default' ? size : `${breakpoint} ${size}`
    )
    .join(', ');
}

/**
 * Gets a download URL for a Firebase Storage image
 * @param path Path to the image in Firebase Storage
 * @returns Promise resolving to the download URL
 */
export async function getFirebaseImageUrl(path: string): Promise<string> {
  try {
    const imageRef = ref(storage, path);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error('Error getting image URL from Firebase:', error);
    return defaultPlaceholder;
  }
}

/**
 * Checks if an image exists at the given URL
 * @param url URL to check
 * @returns Promise resolving to true if the image exists, false otherwise
 */
export async function imageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Preloads an image by creating a new Image object
 * @param src Image source URL
 * @returns Promise resolving when the image is loaded
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
} 