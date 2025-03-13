# Broomstick App

A simple application for creating and managing "sweeps" - collections of todo items that expire after a set period.

## Features

- Create sweeps with optional titles
- Add todo items to sweeps
- Attach screenshots to todo items
- Mark todo items as completed
- View all sweeps in a dashboard
- Delete sweeps when no longer needed
- Automatic expiration of sweeps after 3 days

## Technologies Used

- React with TypeScript
- Vite for build tooling
- Firebase Firestore for data storage
- Shadcn/UI for component styling
- React Router for navigation
- date-fns for date formatting

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` with your Firebase configuration
4. Start the development server:
   ```
   npm run dev
   ```

## Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore database
3. Set up Firestore security rules:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
   Note: These rules allow unrestricted access and should be modified for production use.

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```
   netlify login
   ```

3. Initialize your site:
   ```
   netlify init
   ```

4. Deploy your site:
   ```
   netlify deploy --prod
   ```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Log in to Netlify and click "New site from Git"
3. Select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables in the Netlify dashboard:
   - Go to Site settings > Build & deploy > Environment
   - Add all the Firebase environment variables from your `.env` file

### Environment Variables

Make sure to set the following environment variables in Netlify:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID` (optional)

## CSS Management

This project includes tools to help manage and optimize CSS:

### CSS Purging

To remove unused CSS and reduce file sizes:

```bash
npm run purge-css
```

This command:
1. Analyzes your codebase to identify unused CSS
2. Creates optimized versions of your CSS files
3. Backs up original files to `src/css-backup/`
4. Replaces the original files with optimized versions

If you encounter any styling issues after purging, you can restore the backups from the `src/css-backup/` directory.

### CSS Best Practices

- Keep component-specific styles within their components using Tailwind classes
- Avoid adding global styles unless necessary
- Use the shadcn component library for consistent styling
- Run the CSS purging process before deployment to reduce bundle size

## License

MIT
