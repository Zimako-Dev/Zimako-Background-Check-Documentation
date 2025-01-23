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
import { Footer } from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />

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
              className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-900 lg:static lg:overflow-y-visible lg:bg-transparent lg:dark:bg-transparent lg:col-span-3 ${
                sidebarOpen ? 'block' : 'hidden'
              } lg:block`}
            >
              <div className="h-full overflow-y-auto scrollbar-none py-6 px-4 sm:px-6 lg:py-8">
                <Navigation />
              </div>
            </aside>

            {/* Main content */}
            <main className="lg:col-span-9">
              <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/docs/introduction" element={<Introduction />} />
                <Route path="/docs/installation" element={<Installation />} />
                <Route path="/docs/quick-start" element={<QuickStart />} />
                <Route path="/docs/architecture" element={<Architecture />} />
                <Route path="/docs/configuration" element={<Configuration />} />
                <Route path="/docs/api" element={<ApiDocs />} />
                <Route path="/docs/security" element={<SecurityGuide />} />
                <Route path="/docs/compliance" element={<ComplianceGuide />} />
              </Routes>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;