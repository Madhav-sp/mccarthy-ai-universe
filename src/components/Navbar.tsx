
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock user data - in a real app, this would come from authentication
const currentUser = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://github.com/shadcn.png', // placeholder avatar
  isAdmin: true
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-slate-900 dark:border-slate-800">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1.5">
              <div className="h-5 w-5 rounded-full bg-white"></div>
            </div>
            <span className="font-bold text-xl dark:text-white">McCarthy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary dark:text-slate-200 dark:hover:text-white">
              Home
            </Link>
            <Link to="/explore" className="text-sm font-medium transition-colors hover:text-primary dark:text-slate-200 dark:hover:text-white">
              Explore
            </Link>
            <Link to="/developers" className="text-sm font-medium transition-colors hover:text-primary dark:text-slate-200 dark:hover:text-white">
              Developers
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button variant="outline" size="sm" className="gap-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Button>
          )}
          
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex flex-col space-y-1 p-2">
                <p className="text-sm font-medium">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground">{currentUser.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/publish">Publish Tool</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/my-tools">My Tools</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/favorites">Favorites</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/analytics">Analytics</Link>
              </DropdownMenuItem>
              {currentUser.isAdmin && (
                <DropdownMenuItem asChild>
                  <Link to="/users">User Management</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden dark:text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="container py-4 md:hidden dark:bg-slate-900">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-2 py-1 text-sm font-medium transition-colors hover:text-primary dark:text-slate-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className="px-2 py-1 text-sm font-medium transition-colors hover:text-primary dark:text-slate-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="/developers" 
              className="px-2 py-1 text-sm font-medium transition-colors hover:text-primary dark:text-slate-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Developers
            </Link>
            <div className="pt-2">
              <Button className="w-full gap-2" variant="outline" size="sm">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </Button>
            </div>
            <div className="pt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
