import React from 'react';

export function Installation() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Installation Guide</h1>
      
      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js 16.x or later</li>
        <li>Firebase account with Blaze plan (for Firestore)</li>
        <li>Git for version control</li>
        <li>npm or yarn package manager</li>
      </ul>

      <h2>Environment Setup</h2>
      <h3>1. Clone the Repository</h3>
      <pre><code>git clone https://github.com/your-org/background-check.git
cd background-check</code></pre>

      <h3>2. Install Dependencies</h3>
      <pre><code>npm install
# or
yarn install</code></pre>

      <h3>3. Firebase Configuration</h3>
      <p>Create a `.env` file in the root directory with your Firebase configuration:</p>
      <pre><code>VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id</code></pre>

      <h2>Firebase Setup</h2>
      <h3>1. Create Firestore Collections</h3>
      <p>Initialize the following collections in your Firestore database:</p>
      <ul>
        <li><code>users</code> - User information and roles</li>
        <li><code>companies</code> - Company profiles and settings</li>
        <li><code>background-checks</code> - Background check records</li>
        <li><code>providers</code> - Verification service providers</li>
      </ul>

      <h3>2. Security Rules</h3>
      <p>Deploy the following security rules to your Firebase project:</p>
      <pre><code>{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    function belongsToCompany(companyId) {
      return request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.companyId == companyId;
    }

    match /{collection}/{document=**} {
      allow read: if isAdmin();
    }

    match /companies/{companyId} {
      allow read: if belongsToCompany(companyId) || isAdmin();
      allow write: if isAdmin();
    }

    match /users/{userId} {
      allow read: if request.auth.uid == userId || isAdmin();
      allow write: if isAdmin();
    }
  }
}`}</code></pre>

      <h2>Running the Application</h2>
      <h3>Development Mode</h3>
      <pre><code>npm run dev
# or
yarn dev</code></pre>

      <h3>Production Build</h3>
      <pre><code>npm run build
npm run preview
# or
yarn build
yarn preview</code></pre>

      <h2>Initial Setup</h2>
      <ol>
        <li>Create the first admin user through Firebase Authentication</li>
        <li>Add the admin user to the users collection with role: 'admin'</li>
        <li>Create your company profile in the companies collection</li>
        <li>Configure verification providers in the providers collection</li>
      </ol>

      <h2>Troubleshooting</h2>
      <ul>
        <li><strong>Firebase Permission Errors:</strong> Verify security rules and user roles</li>
        <li><strong>Authentication Issues:</strong> Check Firebase configuration in .env file</li>
        <li><strong>Build Errors:</strong> Ensure all dependencies are installed correctly</li>
      </ul>
    </div>
  );
}