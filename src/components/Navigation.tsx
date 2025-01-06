import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Folder, FileText } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 space-x-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          {location.pathname !== '/' && (
            <>
              <Link
                to="/explorer"
                className="flex items-center space-x-2 text-white hover:text-blue-200 transition"
              >
                <Folder size={20} />
                <span>Explorer</span>
              </Link>
              
              {location.pathname.includes('/file/') && (
                <div className="flex items-center space-x-2 text-white">
                  <FileText size={20} />
                  <span>File View</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};