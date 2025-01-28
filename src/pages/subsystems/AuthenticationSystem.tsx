import React from 'react';
import { MermaidDiagram } from '../../components/diagrams/MermaidDiagram';

export function AuthenticationSystem() {
  const authComponentsDiagram = `
    graph TD
      A[Auth Provider] --> B[Admin Access]
      A --> C[Company Access]
      A --> D[User Access]
      
      B --> E[System Config]
      B --> F[User Management]
      
      C --> G[Company Data]
      C --> H[Report Management]
      
      D --> I[Personal Data]
      D --> J[Query Management]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#818cf8,stroke:#6366f1,color:#fff
      style C fill:#60a5fa,stroke:#3b82f6,color:#fff
      style D fill:#818cf8,stroke:#6366f1,color:#fff
      style E fill:#059669,stroke:#10b981,color:#fff
      style F fill:#059669,stroke:#10b981,color:#fff
      style G fill:#0284c7,stroke:#0ea5e9,color:#fff
      style H fill:#0284c7,stroke:#0ea5e9,color:#fff
      style I fill:#6366f1,stroke:#818cf8,color:#fff
      style J fill:#6366f1,stroke:#818cf8,color:#fff
  `;

  const rbacDiagram = `
    graph TD
      A[Super Admin] --> B[System Admin]
      A --> C[Company Admin]
      B --> D[User Manager]
      B --> E[Report Manager]
      C --> F[Company User]
      C --> G[Company Viewer]
      
      subgraph Permissions
        H[Full Access]
        I[System Config]
        J[User Management]
        K[Report Access]
        L[Data Access]
        M[View Only]
      end
      
      A -.-> H
      B -.-> I
      B -.-> J
      D -.-> J
      E -.-> K
      F -.-> L
      G -.-> M
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#3730a3,stroke:#6366f1,color:#fff
      style D fill:#0284c7,stroke:#0ea5e9,color:#fff
      style E fill:#0284c7,stroke:#0ea5e9,color:#fff
      style F fill:#059669,stroke:#10b981,color:#fff
      style G fill:#059669,stroke:#10b981,color:#fff
      style H fill:#4f46e5,stroke:#6366f1,color:#fff
      style I fill:#3730a3,stroke:#6366f1,color:#fff
      style J fill:#0284c7,stroke:#0ea5e9,color:#fff
      style K fill:#0284c7,stroke:#0ea5e9,color:#fff
      style L fill:#059669,stroke:#10b981,color:#fff
      style M fill:#6366f1,stroke:#818cf8,color:#fff
  `;

  const authFlowDiagram = `
    graph TD
      A[Start] --> B[User Login]
      B --> C{Validate Credentials}
      C -->|Invalid| D[Error Message]
      D --> B
      C -->|Valid| E[Generate Token]
      E --> F[Set User Context]
      F --> G{Check Permissions}
      G -->|Denied| H[Access Denied]
      G -->|Granted| I[Access Resource]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#4f46e5,stroke:#6366f1,color:#fff
      style D fill:#dc2626,stroke:#ef4444,color:#fff
      style E fill:#0284c7,stroke:#0ea5e9,color:#fff
      style F fill:#0284c7,stroke:#0ea5e9,color:#fff
      style G fill:#4f46e5,stroke:#6366f1,color:#fff
      style H fill:#dc2626,stroke:#ef4444,color:#fff
      style I fill:#059669,stroke:#10b981,color:#fff
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Authentication System</h1>

      <h2>Overview</h2>
      <p>
        The Authentication System manages user access, roles, and permissions across the platform.
        It ensures secure access to resources while maintaining proper authorization levels for different user types.
      </p>

      <h2>Authentication Components</h2>
      <MermaidDiagram chart={authComponentsDiagram} />
      <p>
        This diagram shows the relationship between authentication components and how they interact with the AuthProvider context.
      </p>

      <h2>Role-Based Access Control</h2>
      <MermaidDiagram chart={rbacDiagram} />
      <p>
        The RBAC diagram demonstrates the hierarchical permission structure and access levels for different user roles in the system.
        Each role has specific permissions that determine what actions they can perform:
      </p>
      <ul>
        <li><strong>Super Admin:</strong> Has full system access and can manage all aspects of the platform</li>
        <li><strong>System Admin:</strong> Can configure system settings and manage users</li>
        <li><strong>Company Admin:</strong> Has full access to their company's data and user management</li>
        <li><strong>User Manager:</strong> Can manage users within their assigned scope</li>
        <li><strong>Report Manager:</strong> Has access to reporting features and data analysis</li>
        <li><strong>Company User:</strong> Can perform standard operations within their company</li>
        <li><strong>Company Viewer:</strong> Has read-only access to company data</li>
      </ul>

      <h2>Authentication Flow</h2>
      <h3>1. User Login Process</h3>
      <MermaidDiagram chart={authFlowDiagram} />
      <p>
        This diagram illustrates the step-by-step process of user authentication, from login to resource access.
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
