import React from 'react';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 shadow-sm transition-colors sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Documentation</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4 self-stretch lg:gap-x-6">
          <SearchBar />
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}