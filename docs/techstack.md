# Tech Stack Setup Guide for Broomstick

This document outlines the tech stack setup for building the Broomstick app using Vite, shadcn UI, TailwindCSS, Vitest for testing, and Netlify for deployment. The steps ensure a streamlined development process, easy testing, and a smooth deployment experience.

## Tech Stack Overview

- **Vite**: A fast build tool and development server for modern web projects.
- **React with TypeScript**: Framework and type safety for building the app.
- **shadcn UI**: A collection of reusable, accessible React components styled with TailwindCSS.
- **TailwindCSS**: A utility-first CSS framework for rapid and responsive UI development.
- **Vitest**: A testing framework tailored for Vite projects, enabling unit and integration tests.
- **Netlify**: A platform for deploying and managing static web applications.

## Setup Instructions

### 1. Creating and Configuring the Vite Project

Start by creating a new Vite project with React and TypeScript for a modern development setup.

Command:
```bash
npx create-vite@latest my-app --template react-ts
```

Navigate to the project directory:
```bash
cd my-app
```

Install dependencies:
```bash
npm install
```

Start the development server to verify setup:
```bash
npm run dev
```

This sets up a basic React project with TypeScript, including Vite's configuration files and a sample app.

### 2. Integrating TailwindCSS

TailwindCSS will handle styling, integrating seamlessly with Vite and shadcn UI.

Install TailwindCSS and dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialize TailwindCSS to generate configuration files:
```bash
npx tailwindcss init -p
```

This creates tailwind.config.js and a PostCSS configuration file.

Add Tailwind directives to src/index.css: Create or update src/index.css with the following content:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Configure tailwind.config.js to specify content paths for class detection: Update tailwind.config.js as follows:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Ensure src/main.tsx imports index.css to apply Tailwind styles globally:
```typescript
import './index.css';
```

### 3. Adding shadcn UI Components

Shadcn UI provides reusable components styled with TailwindCSS, managed via a CLI for easy integration.

Install the shadcn CLI globally:
```bash
npm install -g @shadcn/dev
```

Initialize shadcn UI in your project:
```bash
shadcn init
```

Follow the prompts to:
- Select a style (e.g., New York).
- Choose a base color (e.g., Zinc).
- Decide on CSS variables for theming (recommended: yes).

This command sets up shadcn UI, installs dependencies, adds utility functions like cn for class name merging, and configures CSS variables for theming. Components will be added to src/components/ui.

Add a sample component (e.g., Button) to test integration:
```bash
shadcn add button
```

This adds a Button component to src/components/ui/button.tsx, which you can import and use in your app.

> Note: shadcn UI encourages owning component code by copying it into your project, reducing external dependencies (see [shadcn UI blog post](https://workos.com/blog/shadcn-ui)).

### 4. Setting Up Testing with Vitest

Vitest is tailored for Vite projects and provides a fast, reliable testing framework.

Install Vitest:
```bash
npm install -D vitest
```

Configure vite.config.ts for testing: Update vite.config.ts to include Vitest settings with a jsdom environment:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config as vitestConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
```

Add testing dependencies (if needed, for DOM testing):
```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

Create a test directory and write a sample test: Create a src/tests directory and add a test file, e.g., src/tests/Button.test.tsx:
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/button';

describe('Button', () => {
  it('should render the button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

Run tests:
```bash
npx vitest
```

This launches Vitest in watch mode for rapid feedback during development.

### 5. Preparing for Netlify Deployment

Netlify is ideal for deploying static sites like those built with Vite, offering a simple deployment process.

Build the project for production:
```bash
npm run build
```

This generates a dist directory with optimized assets.

Deploy to Netlify:
1. Create a new site on [Netlify](https://www.netlify.com/) by connecting to your GitHub repository or using manual deployment.
2. Configure build settings in Netlify:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy the site, and Netlify will provide a live URL for your application.

Optional: Add a netlify.toml file for custom configurations:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Key Commands Reference

| Step | Command |
|------|---------|
| Create Vite Project | `npx create-vite@latest my-app --template react-ts` |
| Install TailwindCSS | `npm install -D tailwindcss postcss autoprefixer` |
| Initialize Tailwind | `npx tailwindcss init -p` |
| Install shadcn CLI | `npm install -g @shadcn/dev` |
| Initialize shadcn UI | `shadcn init` |
| Install Vitest | `npm install -D vitest` |
| Build for Deployment | `npm run build` |
| Run Tests | `npx vitest` |

## Netlify Deployment Settings

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Deploy Method | GitHub or Manual |

## Best Practices and Considerations

- **Compatibility**: Ensure shadcn UI and Vite are compatible by following the [official installation guide](https://ui.shadcn.com/docs/installation/vite). Pay attention to TypeScript and path aliases.
- **Testing**: Write unit tests for components and integration tests for app flows using Vitest. Use @testing-library/react for DOM testing.
- **Deployment**: Test the production build locally (`npm run build` and serve the dist folder) before deploying to Netlify to catch issues early.
- **Development**: Use Vite's fast dev server (`npm run dev`) for rapid iteration, and leverage TailwindCSS IntelliSense in your IDE for better productivity.

## Key Citations

- [shadcn UI Installation Guide for Vite](https://ui.shadcn.com/docs/installation/vite)
- [shadcn UI Blog Post on Usage](https://workos.com/blog/shadcn-ui)
- [Netlify Deployment Platform](https://www.netlify.com/)
- [Vite Official Documentation](https://vitejs.dev/)
- [TailwindCSS Official Documentation](https://tailwindcss.com/)
- [Vitest Official Documentation](https://vitest.dev/)