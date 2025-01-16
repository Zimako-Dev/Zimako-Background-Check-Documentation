import React from 'react';
import { navigation } from '../data/navigation';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="space-y-8" role="navigation" aria-label="Main navigation">
      {navigation.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">{section.title}</h3>
          <ul className="mt-3 space-y-2">
            {section.items.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`block rounded-md p-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}