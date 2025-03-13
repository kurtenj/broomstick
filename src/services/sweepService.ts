import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp, 
  onSnapshot,
  Timestamp,
  deleteDoc,
  getDocs
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Sweep, TodoItem } from '@/types';

// Create a new sweep
export const createSweep = async (title?: string): Promise<string> => {
  console.log('Creating new sweep with title:', title);
  try {
    console.log('Creating document reference in Firestore...');
    const sweepRef = doc(collection(db, 'sweeps'));
    console.log('Document reference created:', sweepRef.id);
    
    const now = new Date();
    const expiresAt = new Date(now);
    expiresAt.setDate(expiresAt.getDate() + 3); // Expires in 3 days

    const sweep: Omit<Sweep, 'id'> = {
      createdAt: now,
      expiresAt,
      todos: [],
      ...(title && { title }),
    };

    console.log('Preparing sweep data:', sweep);
    
    console.log('Setting document in Firestore...');
    await setDoc(sweepRef, {
      ...sweep,
      createdAt: serverTimestamp(),
      expiresAt: Timestamp.fromDate(expiresAt),
    });
    console.log('Document successfully written to Firestore');

    return sweepRef.id;
  } catch (error) {
    console.error('Error creating sweep:', error);
    throw error;
  }
};

// Get a sweep by ID
export const getSweep = async (id: string): Promise<Sweep | null> => {
  const sweepRef = doc(db, 'sweeps', id);
  const sweepSnap = await getDoc(sweepRef);

  if (!sweepSnap.exists()) {
    return null;
  }

  const data = sweepSnap.data();
  return {
    id: sweepSnap.id,
    createdAt: data.createdAt.toDate(),
    expiresAt: data.expiresAt.toDate(),
    title: data.title,
    todos: data.todos || [],
  };
};

// Subscribe to a sweep's changes
export const subscribeSweep = (
  id: string,
  callback: (sweep: Sweep | null) => void
) => {
  const sweepRef = doc(db, 'sweeps', id);
  
  return onSnapshot(sweepRef, (doc) => {
    if (!doc.exists()) {
      callback(null);
      return;
    }

    const data = doc.data();
    callback({
      id: doc.id,
      createdAt: data.createdAt.toDate(),
      expiresAt: data.expiresAt.toDate(),
      title: data.title,
      todos: data.todos || [],
    });
  });
};

// Helper function to optimize image before storing as base64
const optimizeImage = async (file: File, maxWidth = 1200, quality = 0.8): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      
      // Calculate new dimensions while maintaining aspect ratio
      let width = img.width;
      let height = img.height;
      
      if (width > maxWidth) {
        const ratio = maxWidth / width;
        width = maxWidth;
        height = height * ratio;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw the image on the canvas
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to convert canvas to blob'));
          }
        },
        'image/jpeg',
        quality
      );
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Add a todo item to a sweep
export const addTodoItem = async (
  sweepId: string,
  text: string,
  screenshotFile?: File
): Promise<string> => {
  console.log('Adding todo item to sweep:', sweepId);
  console.log('Text:', text);
  console.log('Screenshot file provided:', !!screenshotFile);
  if (screenshotFile) {
    console.log('Screenshot details:', {
      name: screenshotFile.name,
      type: screenshotFile.type,
      size: `${(screenshotFile.size / 1024).toFixed(2)} KB`,
    });
  }
  
  const sweepRef = doc(db, 'sweeps', sweepId);
  console.log('Getting sweep document...');
  const sweepSnap = await getDoc(sweepRef);

  if (!sweepSnap.exists()) {
    console.error('Sweep not found:', sweepId);
    throw new Error('Sweep not found');
  }
  console.log('Sweep found');

  let screenshotUrl: string | undefined;

  // Process screenshot if provided
  if (screenshotFile) {
    try {
      console.log('Processing screenshot...');
      
      // Check file size
      const fileSizeInMB = screenshotFile.size / 1024 / 1024;
      console.log('Original file size:', `${fileSizeInMB.toFixed(2)} MB`);
      
      let fileToProcess: Blob | File = screenshotFile;
      
      // Optimize image if it's larger than 1MB
      if (fileSizeInMB > 1) {
        console.log('Optimizing image...');
        fileToProcess = await optimizeImage(screenshotFile);
        const optimizedSizeInMB = fileToProcess.size / 1024 / 1024;
        console.log('Optimized file size:', `${optimizedSizeInMB.toFixed(2)} MB`);
      }
      
      // Convert to base64
      const base64String = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileToProcess);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
      });
      
      screenshotUrl = base64String;
      console.log('Using base64 data URL for screenshot');
      
    } catch (error) {
      console.error('Error processing screenshot:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
      throw new Error(`Failed to process screenshot: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  const todoId = crypto.randomUUID();
  const now = new Date();
  
  const newTodo: TodoItem = {
    id: todoId,
    text,
    completed: false,
    createdAt: now,
    ...(screenshotUrl && { screenshotUrl }),
  };

  console.log('Created new todo item with ID:', todoId);
  console.log('Screenshot URL included:', !!screenshotUrl);

  const data = sweepSnap.data();
  const todos = [...(data.todos || []), {
    ...newTodo,
    createdAt: Timestamp.fromDate(now),
  }];

  console.log('Updating sweep with new todos array...');
  await updateDoc(sweepRef, { todos });
  console.log('Sweep updated successfully');

  return todoId;
};

// Update a todo item in a sweep
export const updateTodoItem = async (
  sweepId: string,
  todoId: string,
  updates: Partial<TodoItem> & { screenshotFile?: File }
): Promise<void> => {
  const sweepRef = doc(db, 'sweeps', sweepId);
  const sweepSnap = await getDoc(sweepRef);

  if (!sweepSnap.exists()) {
    throw new Error('Sweep not found');
  }

  const data = sweepSnap.data();
  const todos = data.todos || [];
  const todoIndex = todos.findIndex((todo: TodoItem) => todo.id === todoId);

  if (todoIndex === -1) {
    throw new Error('Todo item not found');
  }

  // Handle screenshot update if a new file is provided
  if (updates.screenshotFile) {
    const file = updates.screenshotFile;
    
    // Process the new screenshot
    let screenshotUrl: string;
    
    // Check if the file is large and needs optimization
    if (file.size > 1024 * 1024) { // 1MB
      console.log(`Optimizing large image (${file.size} bytes) for todo ${todoId}`);
      const optimizedFile = await optimizeImage(file);
      
      // Convert optimized file to base64
      const reader = new FileReader();
      screenshotUrl = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(optimizedFile);
      });
      console.log(`Stored optimized screenshot as base64 (${screenshotUrl.length} chars)`);
    } else {
      // Small file, use base64 directly
      const reader = new FileReader();
      screenshotUrl = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      console.log(`Stored screenshot as base64 (${screenshotUrl.length} chars)`);
    }
    
    // Update the screenshotUrl in the updates object and remove the file
    updates.screenshotUrl = screenshotUrl;
    delete updates.screenshotFile;
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...updates,
  };

  await updateDoc(sweepRef, { todos });
};

// Delete a todo item from a sweep
export const deleteTodoItem = async (
  sweepId: string,
  todoId: string
): Promise<void> => {
  console.log(`Deleting todo item ${todoId} from sweep ${sweepId}`);
  
  const sweepRef = doc(db, 'sweeps', sweepId);
  const sweepSnap = await getDoc(sweepRef);

  if (!sweepSnap.exists()) {
    throw new Error('Sweep not found');
  }

  const data = sweepSnap.data();
  const todos = data.todos || [];
  const todoIndex = todos.findIndex((todo: TodoItem) => todo.id === todoId);

  if (todoIndex === -1) {
    throw new Error('Todo item not found');
  }

  // Remove the todo from the array
  todos.splice(todoIndex, 1);

  // Update the sweep document
  await updateDoc(sweepRef, { todos });
  console.log(`Todo item ${todoId} deleted successfully`);
};

// Extend a sweep's expiration date
export const extendSweep = async (sweepId: string): Promise<void> => {
  const sweepRef = doc(db, 'sweeps', sweepId);
  const sweepSnap = await getDoc(sweepRef);

  if (!sweepSnap.exists()) {
    throw new Error('Sweep not found');
  }

  const data = sweepSnap.data();
  const currentExpiresAt = data.expiresAt.toDate();
  const newExpiresAt = new Date(currentExpiresAt);
  newExpiresAt.setDate(newExpiresAt.getDate() + 3); // Extend by 3 days

  await updateDoc(sweepRef, {
    expiresAt: Timestamp.fromDate(newExpiresAt),
  });
};

// Check if Firestore is properly set up
export const checkFirestoreSetup = async (): Promise<boolean> => {
  try {
    console.log('Checking Firestore setup...');
    // Try to read a document that doesn't exist to test connection
    const testDocRef = doc(db, '_test_connection_', 'test');
    await getDoc(testDocRef);
    console.log('Firestore connection successful');
    
    // Try to write a test document to verify write permissions
    try {
      const testWriteRef = doc(db, '_test_connection_', 'write_test');
      await setDoc(testWriteRef, { 
        timestamp: serverTimestamp(),
        test: 'This is a test document to verify write permissions'
      });
      console.log('Firestore write successful');
      
      // Clean up the test document
      await deleteDoc(testWriteRef);
      console.log('Test document cleaned up');
    } catch (writeError) {
      console.error('Firestore write failed:', writeError);
      if (writeError instanceof Error) {
        console.error('Write error message:', writeError.message);
        if ('code' in writeError) {
          console.error('Write error code:', (writeError as {code: string}).code);
        }
      }
      // Even if write fails, we'll still return true if read succeeded
      console.warn('Read access works but write access failed. Check your security rules.');
    }
    
    return true;
  } catch (error) {
    console.error('Firestore connection failed:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      if ('code' in error) {
        console.error('Error code:', (error as {code: string}).code);
      }
    }
    return false;
  }
};

// Get all sweeps
export const getAllSweeps = async (): Promise<Sweep[]> => {
  console.log('Fetching all sweeps...');
  try {
    const sweepsCollection = collection(db, 'sweeps');
    const sweepsSnapshot = await getDocs(sweepsCollection);
    
    console.log(`Found ${sweepsSnapshot.size} sweeps`);
    
    const sweeps: Sweep[] = [];
    sweepsSnapshot.forEach((doc) => {
      const data = doc.data();
      sweeps.push({
        id: doc.id,
        createdAt: data.createdAt.toDate(),
        expiresAt: data.expiresAt.toDate(),
        title: data.title || 'Untitled Sweep',
        todos: data.todos || [],
      });
    });
    
    // Sort by creation date (newest first)
    sweeps.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    return sweeps;
  } catch (error) {
    console.error('Error fetching sweeps:', error);
    throw error;
  }
};

// Delete a sweep by ID
export const deleteSweep = async (id: string): Promise<void> => {
  console.log('Deleting sweep:', id);
  try {
    const sweepRef = doc(db, 'sweeps', id);
    await deleteDoc(sweepRef);
    console.log('Sweep deleted successfully');
  } catch (error) {
    console.error('Error deleting sweep:', error);
    throw error;
  }
};

// Update sweep title
export const updateSweepTitle = async (sweepId: string, title: string): Promise<void> => {
  console.log('Updating sweep title:', sweepId, title);
  try {
    const sweepRef = doc(db, 'sweeps', sweepId);
    await updateDoc(sweepRef, { title });
    console.log('Sweep title updated successfully');
  } catch (error) {
    console.error('Error updating sweep title:', error);
    throw error;
  }
}; 