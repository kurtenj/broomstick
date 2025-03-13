import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navigation } from '@/components/Navigation';
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
const LoginPage = lazy(() => 
  import('@/components/LoginPage').then(module => ({ default: module.LoginPage }))
);
const AdminPage = lazy(() => 
  import('@/components/AdminPage').then(module => ({ default: module.AdminPage }))
);
const SharedSweepPage = lazy(() => 
  import('@/components/SharedSweepPage').then(module => ({ default: module.SharedSweepPage }))
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
      <AuthProvider>
        <Router>
          <div className="min-h-screen">
            <Navigation />
            <div className="pt-16">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Public routes */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/shared/:token" element={<SharedSweepPage />} />
                  
                  {/* Protected routes */}
                  <Route path="/" element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  } />
                  <Route path="/sweep/:id" element={
                    <ProtectedRoute>
                      <SweepPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/sweeps" element={
                    <ProtectedRoute>
                      <SweepsPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin" element={
                    <ProtectedRoute>
                      <AdminPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/image-examples" element={
                    <ProtectedRoute>
                      <ImageExample />
                    </ProtectedRoute>
                  } />
                  
                  {/* Fallback route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
