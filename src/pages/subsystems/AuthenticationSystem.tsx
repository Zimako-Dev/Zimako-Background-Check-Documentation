import React from 'react';
import { MermaidDiagram } from '../../components/diagrams/MermaidDiagram';

export function AuthenticationSystem() {
  const authFlowDiagram = `
    graph TD
      A[User Login Request] --> B{Validate Credentials}
      B -->|Valid| C[Generate JWT Token]
      B -->|Invalid| D[Return Error]
      C --> E[Set User Context]
      E --> F[Access Protected Route]
      F --> G{Check Permissions}
      G -->|Authorized| H[Grant Access]
      G -->|Unauthorized| I[Deny Access]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#4f46e5,stroke:#6366f1,color:#fff
      style D fill:#dc2626,stroke:#ef4444,color:#fff
      style E fill:#4f46e5,stroke:#6366f1,color:#fff
      style F fill:#3730a3,stroke:#6366f1,color:#fff
      style G fill:#3730a3,stroke:#6366f1,color:#fff
      style H fill:#059669,stroke:#10b981,color:#fff
      style I fill:#dc2626,stroke:#ef4444,color:#fff
  `;

  const authComponentsDiagram = `
    graph LR
      A[AuthProvider] --> B[useAuth Hook]
      A --> C[ProtectedRoute]
      A --> D[AdminRoute]
      B --> E[Login Component]
      B --> F[Register Component]
      B --> G[Profile Component]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#4f46e5,stroke:#6366f1,color:#fff
      style D fill:#4f46e5,stroke:#6366f1,color:#fff
      style E fill:#3730a3,stroke:#6366f1,color:#fff
      style F fill:#3730a3,stroke:#6366f1,color:#fff
      style G fill:#3730a3,stroke:#6366f1,color:#fff
  `;

  const rbacDiagram = `
    graph TD
      A[User] --> B{Role}
      B -->|Admin| C[Full Access]
      B -->|Manager| D[Company Access]
      B -->|User| E[Limited Access]
      C --> F[System Config]
      C --> G[User Management]
      D --> H[Company Data]
      D --> I[Team Management]
      E --> J[Personal Data]
      E --> K[Query Management]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#059669,stroke:#10b981,color:#fff
      style D fill:#0284c7,stroke:#0ea5e9,color:#fff
      style E fill:#6366f1,stroke:#818cf8,color:#fff
      style F fill:#059669,stroke:#10b981,color:#fff
      style G fill:#059669,stroke:#10b981,color:#fff
      style H fill:#0284c7,stroke:#0ea5e9,color:#fff
      style I fill:#0284c7,stroke:#0ea5e9,color:#fff
      style J fill:#6366f1,stroke:#818cf8,color:#fff
      style K fill:#6366f1,stroke:#818cf8,color:#fff
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Authentication System</h1>

      <h2>Overview</h2>
      <p>
        The Authentication System provides secure user authentication, authorization, and session management
        using Firebase Authentication and custom implementations for role-based access control.
      </p>

      <h2>Core Components</h2>
      
      <h3>1. Authentication Provider</h3>
      <ul>
        <li><strong>AuthProvider Component:</strong>
          <ul>
            <li>Manages global authentication state</li>
            <li>Provides user context throughout the application</li>
            <li>Handles authentication state persistence</li>
            <li>Manages token refresh and session expiry</li>
          </ul>
        </li>
        <li><strong>useAuth Hook:</strong>
          <ul>
            <li>Custom hook for accessing authentication state</li>
            <li>Provides authentication methods (login, logout, register)</li>
            <li>Handles authentication error states</li>
          </ul>
        </li>
      </ul>

      <h3>2. Protected Routes</h3>
      <ul>
        <li><strong>ProtectedRoute Component:</strong>
          <ul>
            <li>Route wrapper for authenticated access</li>
            <li>Handles redirect to login for unauthenticated users</li>
            <li>Manages loading states during authentication checks</li>
          </ul>
        </li>
        <li><strong>AdminRoute Component:</strong>
          <ul>
            <li>Specialized route protection for admin access</li>
            <li>Role-based access verification</li>
            <li>Company-specific access control</li>
          </ul>
        </li>
      </ul>

      <h2>Authentication Flow</h2>
      <MermaidDiagram chart={authFlowDiagram} />
      <p>
        The diagram above illustrates the complete authentication flow from user login to accessing
        protected routes, including validation, token generation, and permission checks.
      </p>

      <h2>Component Architecture</h2>
      <MermaidDiagram chart={authComponentsDiagram} />
      <p>
        This diagram shows the relationship between authentication components and how they interact
        with the AuthProvider context.
      </p>

      <h2>Role-Based Access Control</h2>
      <MermaidDiagram chart={rbacDiagram} />
      <p>
        The RBAC diagram demonstrates the hierarchical permission structure and access levels for
        different user roles in the system.
      </p>

      <h2>Authentication Flow</h2>
      
      <h3>1. User Login Process</h3>
      <ol>
        <li>User submits credentials</li>
        <li>Firebase Authentication validation</li>
        <li>Custom claims verification</li>
        <li>Role and permissions assignment</li>
        <li>Session establishment</li>
      </ol>

      <h3>2. Session Management</h3>
      <ul>
        <li>JWT token handling</li>
        <li>Automatic token refresh</li>
        <li>Session timeout handling</li>
        <li>Multiple device session management</li>
      </ul>

      <h2>Security Features</h2>
      
      <h3>1. Password Security</h3>
      <ul>
        <li>Password strength requirements</li>
        <li>Password hashing with Firebase</li>
        <li>Password reset functionality</li>
        <li>Password change monitoring</li>
      </ul>

      <h3>2. Access Control</h3>
      <ul>
        <li>Role-based permissions</li>
        <li>Company-level access restrictions</li>
        <li>Resource-level permissions</li>
        <li>Action-based authorization</li>
      </ul>

      <h2>Integration Points</h2>
      
      <h3>1. Frontend Integration</h3>
      <ul>
        <li>React components integration</li>
        <li>Route protection implementation</li>
        <li>UI state management</li>
        <li>Error handling and display</li>
      </ul>

      <h3>2. Backend Integration</h3>
      <ul>
        <li>Firebase Authentication setup</li>
        <li>Custom claims management</li>
        <li>Security rules implementation</li>
        <li>API authentication</li>
      </ul>

      <h2>Error Handling</h2>
      
      <h3>1. Authentication Errors</h3>
      <ul>
        <li>Invalid credentials handling</li>
        <li>Network error management</li>
        <li>Session timeout handling</li>
        <li>Permission denial handling</li>
      </ul>

      <h3>2. Recovery Processes</h3>
      <ul>
        <li>Password reset flow</li>
        <li>Account recovery options</li>
        <li>Session recovery</li>
        <li>Error state recovery</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Regular session validation</li>
        <li>Secure credential handling</li>
        <li>Proper error messaging</li>
        <li>Audit logging of authentication events</li>
        <li>Regular security reviews</li>
      </ul>
    </div>
  );
}
