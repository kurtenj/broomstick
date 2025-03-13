import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import './App.css'; // Import our custom CSS

// Lazy load components with named exports
const HomePage = lazy(() => 
  import('@/components/HomePage').then(module => ({ default: module.HomePage }))
);
const SweepPage = lazy(() => 
  import('@/components/SweepPage').then(module => ({ default: module.SweepPage }))
);
const SweepsPage = lazy(() => 
  import('@/components/SweepsPage').then(module => ({ default: module.SweepsPage }))
);
const ImageExample = lazy(() => 
  import('@/components/ImageExample').then(module => ({ default: module.ImageExample }))
);

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sweep/:id" element={<SweepPage />} />
              <Route path="/sweeps" element={<SweepsPage />} />
              <Route path="/image-examples" element={<ImageExample />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
