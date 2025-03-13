// Environment variable validation
interface EnvVar {
  name: string;
  required: boolean;
  default?: string;
}

const requiredEnvVars: EnvVar[] = [
  { name: 'VITE_FIREBASE_API_KEY', required: true },
  { name: 'VITE_FIREBASE_AUTH_DOMAIN', required: true },
  { name: 'VITE_FIREBASE_PROJECT_ID', required: true },
  { name: 'VITE_FIREBASE_STORAGE_BUCKET', required: true },
  { name: 'VITE_FIREBASE_MESSAGING_SENDER_ID', required: true },
  { name: 'VITE_FIREBASE_APP_ID', required: true },
  { name: 'VITE_FIREBASE_MEASUREMENT_ID', required: false },
];

export function validateEnv(): { valid: boolean; missing: string[] } {
  const missing: string[] = [];

  for (const envVar of requiredEnvVars) {
    const value = import.meta.env[envVar.name];
    
    if (envVar.required && (!value || value === '')) {
      missing.push(envVar.name);
    }
  }

  return {
    valid: missing.length === 0,
    missing
  };
}

export function getEnv(name: string, defaultValue: string = ''): string {
  return import.meta.env[`VITE_${name}`] || defaultValue;
}

// Validate environment variables in development
if (import.meta.env.DEV) {
  const { valid, missing } = validateEnv();
  if (!valid) {
    console.warn(`Missing required environment variables: ${missing.join(', ')}`);
    console.warn('Please check your .env file and make sure all required variables are defined.');
  }
} 