import React from 'react';
import { navigation } from '../data/navigation';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  isMobile?: boolean;
  onNavClick?: () => void;
}

export function Navigation({ isMobile, onNavClick }: NavigationProps) {
  const location = useLocation();

  const handleClick = () => {
    if (isMobile && onNavClick) {
      onNavClick();
    }
  };

  return (
    <nav className="space-y-6" role="navigation" aria-label="Main navigation">
      {navigation.map((section) => (
        <div key={section.title} className="px-2">
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white transition-colors uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-2 space-y-1">
            {section.items.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`group flex items-center rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={handleClick}
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRightIcon 
                      className={`ml-auto h-4 w-4 transition-transform ${
                        isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-600'
                      } group-hover:translate-x-0.5`}
                    />
                  </Link>
                  {isActive && item.description && (
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 px-3">
                      {item.description}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Mobile navigation footer */}
      <div className="lg:hidden mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="px-2 space-y-4">
          {/* Version info */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Version</span>
            <span className="font-medium text-gray-900 dark:text-white">1.0.0</span>
          </div>
          
          {/* Support links */}
          <div className="flex flex-col space-y-2 text-sm">
            <a 
              href="mailto:support@zimako.com"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Support
            </a>
            <a 
              href="https://github.com/Zimako-Dev/Zimako-Documentation-Template/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Report an issue
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}