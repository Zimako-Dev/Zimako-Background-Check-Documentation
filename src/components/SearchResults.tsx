import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResult } from '../utils/search';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onResultClick: () => void;
}

export function SearchResults({ results, query, onResultClick }: SearchResultsProps) {
  if (!query) return null;
  
  if (results.length === 0) {
    return (
      <div className="absolute z-50 mt-2 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 p-4 left-0 right-0 mx-auto max-w-3xl">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No results found for "{query}"
        </p>
      </div>
    );
  }

  return (
    <div className="absolute z-50 mt-2 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 left-0 right-0 mx-auto max-w-3xl">
      <ul className="max-h-[calc(100vh-16rem)] overflow-y-auto py-2 px-2 sm:px-0">
        {results.map((result, index) => (
          <li key={result.href + index} className="px-2">
            <Link
              to={result.href}
              className="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onResultClick}
            >
              <div className="flex items-start">
                <DocumentTextIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {result.title}
                  </p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                      {result.section}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press <kbd className="px-1.5 py-0.5 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 rounded">↵</kbd> to select
        </p>
      </div>
    </div>
  );
}
