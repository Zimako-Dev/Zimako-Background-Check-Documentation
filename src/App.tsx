import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Introduction } from './pages/Introduction';
import { Installation } from './pages/Installation';
import { QuickStart } from './pages/QuickStart';
import { Architecture } from './pages/Architecture';
import { Configuration } from './pages/Configuration';
import { ApiDocs } from './pages/ApiDocs';
import { SecurityGuide } from './pages/SecurityGuide';
import { ComplianceGuide } from './pages/ComplianceGuide';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Footer } from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        {/* Mobile menu button */}
        <div className="fixed bottom-4 right-4 lg:hidden z-50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar for mobile */}
            <div
              className={`fixed inset-0 z-40 lg:hidden ${
                sidebarOpen ? 'block' : 'hidden'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </div>

            <aside
              className={`
                fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out
                lg:static lg:translate-x-0 lg:block lg:col-span-3
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              `}
            >
              <div className="h-full overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between lg:hidden">
                  <div className="text-xl font-semibold text-gray-900 dark:text-white">
                    Documentation
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 lg:mt-0">
                  <Navigation />
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="lg:col-span-9 w-full">
              <div className="py-4 lg:py-8">
                <Routes>
                  <Route path="/docs/introduction" element={<Introduction />} />
                  <Route path="/docs/installation" element={<Installation />} />
                  <Route path="/docs/quickstart" element={<QuickStart />} />
                  <Route path="/docs/architecture" element={<Architecture />} />
                  <Route path="/docs/configuration" element={<Configuration />} />
                  <Route path="/docs/api" element={<ApiDocs />} />
                  <Route path="/docs/security" element={<SecurityGuide />} />
                  <Route path="/docs/compliance" element={<ComplianceGuide />} />
                  <Route path="*" element={<Introduction />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;