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

      <h2>Core Components</h2>
      
      <h3>1. Frontend Architecture</h3>
      <ul>
        <li><strong>React + TypeScript:</strong> Type-safe frontend development</li>
        <li><strong>Redux:</strong> Global state management for user and application state</li>
        <li><strong>React Query:</strong> Server state management and caching</li>
        <li><strong>Material UI:</strong> Component library with custom dark theme</li>
        <li><strong>React Router:</strong> Client-side routing and navigation</li>
      </ul>

      <h3>2. Backend Services</h3>
      <ul>
        <li><strong>Firebase Authentication:</strong> User management and authentication</li>
        <li><strong>Firestore:</strong> NoSQL database for real-time data storage</li>
        <li><strong>Firebase Security Rules:</strong> Data access control and validation</li>
        <li><strong>Firebase Cloud Functions:</strong> Serverless background processing</li>
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

      <h2>Security Architecture</h2>
      
      <h3>1. Authentication</h3>
      <ul>
        <li>Firebase Authentication with email/password</li>
        <li>JWT-based session management</li>
        <li>Role-based access control (Admin/User)</li>
      </ul>

      <h3>2. Data Security</h3>
      <ul>
        <li>Company-level data isolation</li>
        <li>Firestore security rules for access control</li>
        <li>Field-level security for sensitive data</li>
        <li>Audit logging for sensitive operations</li>
      </ul>

      <h2>Component Architecture</h2>

      <h3>1. Admin Dashboard</h3>
      <ul>
        <li>Company management interface</li>
        <li>User management system</li>
        <li>System-wide analytics</li>
        <li>Provider configuration</li>
      </ul>

      <h3>2. User Dashboard</h3>
      <ul>
        <li>Background check request interface</li>
        <li>Real-time status tracking</li>
        <li>Results visualization</li>
        <li>Report generation</li>
      </ul>

      <h2>Integration Architecture</h2>
      
      <h3>1. External Services</h3>
      <ul>
        <li>Criminal record verification APIs</li>
        <li>Education verification services</li>
        <li>Employment history validation</li>
        <li>Credit check integration</li>
      </ul>

      <h3>2. Internal Services</h3>
      <ul>
        <li>Document processing service</li>
        <li>Notification system</li>
        <li>Report generation engine</li>
        <li>Analytics processing</li>
      </ul>

      <h2>Scalability Considerations</h2>
      <ul>
        <li>Firebase's automatic scaling for database operations</li>
        <li>Efficient data querying with indexes</li>
        <li>Optimized React rendering with memoization</li>
        <li>Lazy loading of components and routes</li>
        <li>Efficient state management with Redux and React Query</li>
      </ul>
    </div>
  );
}