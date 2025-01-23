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
      <div className="absolute z-50 mt-2 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No results found for "{query}"
        </p>
      </div>
    );
  }

  return (
    <div className="absolute z-50 mt-2 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
      <ul className="max-h-96 overflow-y-auto py-2">
        {results.map((result, index) => (
          <li key={result.href + index}>
            <Link
              to={result.href}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onResultClick}
            >
              <div className="flex items-start">
                <DocumentTextIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {result.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {result.section} • {result.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
