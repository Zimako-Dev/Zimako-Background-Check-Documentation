import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResult } from '../utils/search';

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

export function SearchResults({ results, onClose }: SearchResultsProps) {
  if (!results.length) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white dark:ring-opacity-10">
      <div className="max-h-[calc(100vh-220px)] overflow-y-auto p-2">
        {results.map((result, index) => (
          <Link
            key={index}
            to={result.href}
            onClick={onClose}
            className="block rounded-md px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {result.title}
              </span>
              {result.description && (
                <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {result.description}
                </span>
              )}
              <span className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                {result.section}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
