import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <aside className="fixed top-16 z-10 hidden h-[calc(100vh-4rem)] w-72 overflow-y-auto lg:block lg:col-span-3">
              <div className="sticky top-0 pt-10">
                <Navigation />
              </div>
            </aside>
            <main className="lg:col-span-9 lg:col-start-4 xl:col-span-7 xl:col-start-4 2xl:col-span-8">
              <div className="pt-10 pb-24">
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
      </div>
    </Router>
  );
}

export default App;