import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { validateEnv } from './env';

// Validate environment variables
const { valid, missing } = validateEnv();
if (!valid) {
  throw new Error(`Firebase initialization failed: Missing environment variables: ${missing.join(', ')}`);
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // Only include measurement ID if it's defined
  ...(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID && {
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  }),
};

// Only log config in development
if (import.meta.env.DEV) {
  console.log('Firebase config:', { 
    apiKey: firebaseConfig.apiKey ? '***' : 'missing',
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    appId: firebaseConfig.appId ? '***' : 'missing'
  });
}

// Initialize Firebase
let app;
let db: Firestore;
let storage: FirebaseStorage;

try {
  // Only log initialization in development
  if (import.meta.env.DEV) console.log('Initializing Firebase app...');
  
  app = initializeApp(firebaseConfig);
  
  if (import.meta.env.DEV) console.log('Firebase app initialized successfully');
  
  if (import.meta.env.DEV) console.log('Initializing Firestore...');
  db = getFirestore(app);
  
  if (import.meta.env.DEV) console.log('Firestore initialized successfully');
  
  if (import.meta.env.DEV) console.log('Initializing Storage...');
  storage = getStorage(app);
  
  if (import.meta.env.DEV) console.log('Storage initialized successfully');

  // Enable offline persistence in production
  if (import.meta.env.PROD) {
    enableIndexedDbPersistence(db)
      .then(() => {
        if (import.meta.env.DEV) console.log('Firestore persistence enabled successfully');
      })
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          console.error('Multiple tabs open, persistence can only be enabled in one tab at a time.');
        } else if (err.code === 'unimplemented') {
          console.error('The current browser does not support all of the features required to enable persistence.');
        } else {
          console.error('Error enabling Firestore persistence:', err);
        }
      });
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  if (error instanceof Error) {
    console.error('Error message:', error.message);
    if ('code' in error) {
      console.error('Error code:', (error as {code: string}).code);
    }
    if ('serverResponse' in error) {
      console.error('Server response:', (error as {serverResponse: string}).serverResponse);
    }
  }
  throw new Error('Firebase initialization failed. See console for details.');
}

export { app, db, storage }; 