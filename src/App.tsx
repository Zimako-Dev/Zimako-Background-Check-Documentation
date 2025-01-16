import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Introduction } from './pages/Introduction';
import { Installation } from './pages/Installation';
import { QuickStart } from './pages/QuickStart';
import { Architecture } from './pages/Architecture';
import { Configuration } from './pages/Configuration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 py-8">
              {/* Sidebar */}
              <div className="sm:col-span-3">
                <Navigation />
              </div>
              
              {/* Main content */}
              <main className="sm:col-span-9" role="main">
                <div className="px-4 py-6 sm:px-0">
                  <Routes>
                    <Route path="/docs/introduction" element={<Introduction />} />
                    <Route path="/docs/installation" element={<Installation />} />
                    <Route path="/docs/quickstart" element={<QuickStart />} />
                    <Route path="/docs/architecture" element={<Architecture />} />
                    <Route path="/docs/configuration" element={<Configuration />} />
                    <Route path="/" element={<Introduction />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;