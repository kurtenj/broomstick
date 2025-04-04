import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { AnimatedBroomLoader } from './AnimatedBroomLoader';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean; // If true, requires authentication
}

export function ProtectedRoute({ 
  children, 
  requireAuth = true 
}: ProtectedRouteProps) {
  const { currentUser, isAuthorized, isLoading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-16">
        <AnimatedBroomLoader />
      </div>
    );
  }

  // If authentication is required but user is not authenticated, redirect to login
  if (requireAuth && (!currentUser || !isAuthorized)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render children if authentication requirements are met
  return <>{children}</>;
} 