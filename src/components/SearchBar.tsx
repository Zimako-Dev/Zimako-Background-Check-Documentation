import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="w-full max-w-md lg:max-w-lg">
      <label htmlFor="search" className="sr-only">
        Search documentation
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 bg-white dark:bg-gray-800 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 transition-colors sm:text-sm sm:leading-6"
          placeholder="Search documentation..."
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}