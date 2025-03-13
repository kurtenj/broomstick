/**
 * Extracts an image file from a clipboard paste event
 * @param event The clipboard paste event
 * @returns The image file or null if no image was found
 */
export const getImageFromClipboard = (event: ClipboardEvent): File | null => {
  if (!event.clipboardData) {
    return null;
  }

  // Check if there are any files in the clipboard
  const { items } = event.clipboardData;
  
  if (!items) {
    return null;
  }

  // Look for an image file
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
      const file = items[i].getAsFile();
      
      if (file) {
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error('Image size exceeds 5MB limit');
        }
        
        // Check if the file is a supported format (PNG, JPEG, GIF)
        const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
        if (!validTypes.includes(file.type)) {
          throw new Error('Unsupported image format. Please use PNG, JPEG, or GIF');
        }
        
        return file;
      }
    }
  }

  return null;
}; 