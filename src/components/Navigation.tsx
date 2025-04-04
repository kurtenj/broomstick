import { useState } from 'react';
import { Link, useNavigate, useLocation, useMatch } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, LogOut, ArrowLeft, Shield } from 'lucide-react';

export function Navigation() {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const sweepMatch = useMatch("/sweep/:id");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Back navigation handler
  const handleGoBack = () => {
    // Check if there's history to go back to, otherwise go to /sweeps
    if (window.history.length > 1) {
      navigate(-1); // Go back one step
    } else {
      navigate('/sweeps'); // Fallback to sweeps list
    }
  };

  // Don't show navigation on login or shared pages
  if (location.pathname === '/login' || location.pathname.startsWith('/shared/')) {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {sweepMatch ? (
              // Show Back button and generic title on sweep pages
              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={handleGoBack} className="mr-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <span className="text-lg font-medium text-gray-700">All Sweeps</span> 
              </div>
            ) : (
              // Show Logo on other pages
              <Link to="/sweeps" className="flex items-center">
                <img 
                  src="/images/broomstick-logo.svg" 
                  alt="Broomstick" 
                  className="h-8 w-auto mr-2"
                />
              </Link>
            )}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{currentUser.email}</span>
                {!sweepMatch && (
                  <Link to="/admin" title="Admin Settings">
                    <Button variant="ghost" size="icon">
                      <Shield className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="icon" onClick={handleSignOut} title="Sign Out">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {sweepMatch ? (
            // Simple back button for mobile on sweep page
            <div className="px-2 py-3">
              <Button variant="ghost" onClick={() => { handleGoBack(); setIsMenuOpen(false); }} className="flex items-center w-full justify-start">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Sweeps
              </Button>
            </div>
          ) : (
            // Standard mobile menu items
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {currentUser && (
                <>
                  <Link 
                    to="/admin" 
                    className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Shield className="h-5 w-5 mr-2" />
                    Admin
                  </Link>
                  <div className="border-t border-gray-200 pt-4 pb-3">
                    <div className="px-3">
                      <p className="text-sm font-medium text-gray-700">{currentUser.email}</p>
                    </div>
                    <div className="mt-3 px-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start" 
                        onClick={() => {
                          handleSignOut();
                          setIsMenuOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
} 