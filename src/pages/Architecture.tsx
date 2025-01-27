import React from 'react';

export function Architecture() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>System Architecture</h1>

      <h2>Overview</h2>
      <p>
        The Zimako Background Check System is built on a modern, scalable architecture using React
        and Firebase, designed to handle multiple companies and high volumes of background check
        requests securely and efficiently.
      </p>

      <h2>Core Architecture</h2>
      
      <h3>1. Frontend Architecture</h3>
      <ul>
        <li><strong>Single Page Application (SPA):</strong> Built with React 18 and TypeScript</li>
        <li><strong>State Management:</strong>
          <ul>
            <li>Centralized state with Redux Toolkit</li>
            <li>Local state with React hooks</li>
            <li>Server state and caching with React Query</li>
            <li>Theme state through ThemeProvider context</li>
          </ul>
        </li>
        <li><strong>Routing & Navigation:</strong>
          <ul>
            <li>Protected routing with role-based access</li>
            <li>Hierarchical route structure</li>
            <li>Lazy loading for optimized performance</li>
          </ul>
        </li>
        <li><strong>Component Architecture:</strong>
          <ul>
            <li>Atomic design principles</li>
            <li>Smart/Dumb component pattern</li>
            <li>Container/Presenter pattern</li>
          </ul>
        </li>
      </ul>

      <h3>2. Backend Services</h3>
      <ul>
        <li><strong>Firebase Integration:</strong>
          <ul>
            <li>Authentication and user management</li>
            <li>Firestore for real-time data</li>
            <li>Security rules and access control</li>
            <li>Cloud Functions for background tasks</li>
          </ul>
        </li>
        <li><strong>Data Layer:</strong>
          <ul>
            <li>Service-based API architecture</li>
            <li>Abstracted API layer</li>
            <li>Mock API for development</li>
          </ul>
        </li>
      </ul>

      <h2>Component Architecture</h2>

      <h3>1. Core Components</h3>
      
      <h4>Admin Components</h4>
      <ul>
        <li><strong>SuperAdmin:</strong> Main admin dashboard interface</li>
        <li><strong>AdminRoute:</strong> Protected routing for admin access</li>
        <li><strong>AdminNav:</strong> Admin-specific navigation</li>
        <li><strong>Admin Pages:</strong>
          <ul>
            <li>Companies management</li>
            <li>User management</li>
            <li>Reports and analytics</li>
            <li>Security settings</li>
            <li>API configuration</li>
          </ul>
        </li>
      </ul>

      <h4>Query Components</h4>
      <ul>
        <li><strong>BackgroundCheckResults:</strong> Comprehensive results display (11.2KB)</li>
        <li><strong>NewBackgroundCheck:</strong> Check initiation form (7.5KB)</li>
        <li><strong>QueryFilters:</strong> Advanced search and filtering</li>
        <li><strong>QueryList:</strong> Query management interface</li>
        <li><strong>QueryStats:</strong> Statistical analysis</li>
      </ul>

      <h4>Dashboard Components</h4>
      <ul>
        <li><strong>DashboardStats:</strong> Overview metrics</li>
        <li><strong>ActivityFeed:</strong> Real-time monitoring</li>
        <li><strong>StatCard:</strong> Reusable statistics display</li>
        <li><strong>QueryTrends:</strong> Trend analysis charts</li>
      </ul>

      <h3>2. Supporting Components</h3>

      <h4>Layout Components</h4>
      <ul>
        <li><strong>Layout:</strong> Main application wrapper</li>
        <li><strong>Header:</strong> Navigation and controls</li>
        <li><strong>Sidebar:</strong> Main navigation menu</li>
        <li><strong>MobileNav:</strong> Responsive navigation</li>
      </ul>

      <h4>Feature Components</h4>
      <ul>
        <li><strong>Authentication:</strong> Login, registration, and recovery</li>
        <li><strong>Billing:</strong> Invoice and payment management</li>
        <li><strong>Settings:</strong> User and application preferences</li>
        <li><strong>Help:</strong> Documentation and support resources</li>
      </ul>

      <h2>Security Architecture</h2>
      
      <h3>1. Authentication & Authorization</h3>
      <ul>
        <li>Firebase Authentication integration</li>
        <li>Custom AuthContext provider</li>
        <li>Protected route wrappers</li>
        <li>Role-based permissions system</li>
      </ul>

      <h3>2. Data Security</h3>
      <ul>
        <li>Environment-based configuration</li>
        <li>Secure credential handling</li>
        <li>Protected API endpoints</li>
        <li>CORS and security headers</li>
      </ul>

      <h2>Performance Optimizations</h2>
      <ul>
        <li>Code splitting and lazy loading</li>
        <li>Efficient state management with React Query</li>
        <li>Optimized build configuration with Vite</li>
        <li>Component-level performance optimizations</li>
      </ul>

      <h2>Data Model</h2>
      
      <h3>Collections Structure</h3>
      <pre><code>{`├── users/
│   ├── userId/
│   │   ├── email: string
│   │   ├── role: string
│   │   ├── companyId: string
│   │   └── profile: object
│
├── companies/
│   ├── companyId/
│   │   ├── name: string
│   │   ├── settings: object
│   │   └── subscription: object
│
├── background-checks/
│   ├── checkId/
│   │   ├── status: string
│   │   ├── type: string[]
│   │   ├── subject: object
│   │   ├── results: object
│   │   └── timestamps: object
│
└── providers/
    └── providerId/
        ├── name: string
        ├── type: string
        └── config: object`}</code></pre>

      <h2>Integration Architecture</h2>
      
      <h3>1. External Services</h3>
      <ul>
        <li>Background check service providers</li>
        <li>Payment processing services</li>
        <li>Notification services</li>
        <li>Analytics and monitoring</li>
      </ul>

      <h3>2. API Integration</h3>
      <ul>
        <li>RESTful API endpoints</li>
        <li>Webhook support</li>
        <li>Rate limiting</li>
        <li>Error handling</li>
      </ul>
    </div>
  );
}