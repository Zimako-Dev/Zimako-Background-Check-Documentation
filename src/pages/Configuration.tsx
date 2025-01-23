import React from 'react';

export function Configuration() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>System Configuration</h1>

      <h2>Environment Variables</h2>
      <p>Configure the following environment variables in your <code>.env</code> file:</p>
      <pre><code>
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Optional Configurations
VITE_API_URL=your_api_url
VITE_STORAGE_PREFIX=your_storage_prefix
VITE_LOG_LEVEL=debug|info|warn|error</code></pre>

      <h2>Firebase Configuration</h2>
      
      <h3>1. Authentication Settings</h3>
      <ul>
        <li>Enable Email/Password authentication in Firebase Console</li>
        <li>Configure password requirements</li>
        <li>Set up email templates for:
          <ul>
            <li>Email verification</li>
            <li>Password reset</li>
            <li>Email change confirmation</li>
          </ul>
        </li>
      </ul>

      <h3>2. Firestore Indexes</h3>
      <p>Create the following composite indexes for optimal query performance:</p>
      <pre><code>{`// Collection: background-checks
Fields to index:
- companyId + status
- companyId + createdAt
- status + type
- createdAt + type

// Collection: users
Fields to index:
- companyId + role
- email + companyId`}</code></pre>

      <h2>Company Configuration</h2>
      
      <h3>1. Company Settings</h3>
      <pre><code>{`{
  "companyId": "string",
  "name": "string",
  "settings": {
    "allowedChecks": ["personal", "education", "employment", "criminal", "credit"],
    "maxConcurrentChecks": number,
    "notificationEmails": string[],
    "reportFormat": "pdf" | "html",
    "retentionPeriod": number
  }
}`}</code></pre>

      <h3>2. User Roles</h3>
      <ul>
        <li><strong>Admin:</strong> Full system access</li>
        <li><strong>Manager:</strong> Company-wide access</li>
        <li><strong>User:</strong> Basic check operations</li>
        <li><strong>Viewer:</strong> Read-only access</li>
      </ul>

      <h2>Verification Provider Setup</h2>
      
      <h3>1. Provider Configuration</h3>
      <pre><code>{`{
  "providerId": "string",
  "name": "string",
  "type": ["education", "employment", "criminal", "credit"],
  "config": {
    "apiKey": "string",
    "apiUrl": "string",
    "timeout": number,
    "retryAttempts": number
  }
}`}</code></pre>

      <h3>2. API Integration</h3>
      <ul>
        <li>Configure API endpoints</li>
        <li>Set up authentication tokens</li>
        <li>Configure rate limiting</li>
        <li>Set up error handling</li>
      </ul>

      <h2>Security Configuration</h2>
      
      <h3>1. Firebase Security Rules</h3>
      <p>Configure custom security rules for data access:</p>
      <pre><code>{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // User access rules
    match /users/{userId} {
      allow read: if request.auth.uid == userId || isAdmin();
      allow write: if isAdmin();
    }
    
    // Company access rules
    match /companies/{companyId} {
      allow read: if belongsToCompany(companyId);
      allow write: if isAdmin();
    }
    
    // Background check rules
    match /background-checks/{checkId} {
      allow read: if belongsToCompany(resource.data.companyId);
      allow create: if belongsToCompany(request.resource.data.companyId);
      allow update: if belongsToCompany(resource.data.companyId);
    }
  }
}`}</code></pre>

      <h2>UI Configuration</h2>
      
      <h3>1. Theme Settings</h3>
      <pre><code>{`{
  "theme": {
    "mode": "dark" | "light",
    "primary": {
      "main": "#90caf9",
      "light": "#e3f2fd",
      "dark": "#42a5f5"
    },
    "background": {
      "default": "#0a1929",
      "paper": "#0a1929"
    }
  }
}`}</code></pre>

      <h3>2. Dashboard Layout</h3>
      <ul>
        <li>Configure visible metrics</li>
        <li>Set up chart preferences</li>
        <li>Configure table columns</li>
        <li>Set up filter presets</li>
      </ul>

      <h2>Monitoring Configuration</h2>
      <ul>
        <li>Set up Firebase Analytics</li>
        <li>Configure error tracking</li>
        <li>Set up performance monitoring</li>
        <li>Configure audit logging</li>
      </ul>
    </div>
  );
}