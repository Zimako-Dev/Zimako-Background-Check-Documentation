import React from 'react';
import { MermaidDiagram } from '../../components/diagrams/MermaidDiagram';

export function AdminDashboard() {
  const adminStructureDiagram = `
    graph TD
      A[SuperAdmin] --> B[Companies]
      A --> C[Users]
      A --> D[Reports]
      A --> E[Settings]
      B --> F[Company Management]
      B --> G[Subscription]
      C --> H[User Management]
      C --> I[Roles]
      D --> J[Analytics]
      D --> K[Audit Logs]
      E --> L[System Config]
      E --> M[API Settings]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#3730a3,stroke:#6366f1,color:#fff
      style D fill:#3730a3,stroke:#6366f1,color:#fff
      style E fill:#3730a3,stroke:#6366f1,color:#fff
      style F fill:#059669,stroke:#10b981,color:#fff
      style G fill:#059669,stroke:#10b981,color:#fff
      style H fill:#0284c7,stroke:#0ea5e9,color:#fff
      style I fill:#0284c7,stroke:#0ea5e9,color:#fff
      style J fill:#6366f1,stroke:#818cf8,color:#fff
      style K fill:#6366f1,stroke:#818cf8,color:#fff
      style L fill:#7c3aed,stroke:#8b5cf6,color:#fff
      style M fill:#7c3aed,stroke:#8b5cf6,color:#fff
  `;

  const adminWorkflowDiagram = `
    graph TD
      A[Admin] --> B[Create Company]
      B --> C[Company]
      C --> D[Configure Settings]
      D --> E[System]
      A --> F[Create Admin User]
      F --> G[Users]
      G --> H[Assign to Company]
      H --> C
      C --> I[Set Permissions]
      I --> E
      E --> J[Apply Configuration]
      J --> C
      C --> K[Grant Access]
      K --> G
      G --> L[Confirmation]
      L --> A
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#4f46e5,stroke:#6366f1,color:#fff
      style D fill:#0284c7,stroke:#0ea5e9,color:#fff
      style E fill:#059669,stroke:#10b981,color:#fff
      style F fill:#3730a3,stroke:#6366f1,color:#fff
      style G fill:#4f46e5,stroke:#6366f1,color:#fff
      style H fill:#0284c7,stroke:#0ea5e9,color:#fff
      style I fill:#0284c7,stroke:#0ea5e9,color:#fff
      style J fill:#059669,stroke:#10b981,color:#fff
      style K fill:#059669,stroke:#10b981,color:#fff
      style L fill:#0284c7,stroke:#0ea5e9,color:#fff
  `;

  const adminDataFlowDiagram = `
    graph TD
      A[Admin Actions] --> B{Access Control}
      B -->|Authorized| C[Data Layer]
      B -->|Unauthorized| D[Error]
      C --> E[Company Data]
      C --> F[User Data]
      C --> G[System Data]
      E --> H[Audit Log]
      F --> H
      G --> H
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#059669,stroke:#10b981,color:#fff
      style D fill:#dc2626,stroke:#ef4444,color:#fff
      style E fill:#0284c7,stroke:#0ea5e9,color:#fff
      style F fill:#0284c7,stroke:#0ea5e9,color:#fff
      style G fill:#0284c7,stroke:#0ea5e9,color:#fff
      style H fill:#6366f1,stroke:#818cf8,color:#fff
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Admin Dashboard System</h1>

      <h2>Overview</h2>
      <p>
        The Admin Dashboard System provides comprehensive management capabilities for system administrators,
        including company management, user administration, system configuration, and monitoring tools.
      </p>

      <h2>Core Components</h2>
      
      <h3>1. Admin Interface</h3>
      <ul>
        <li><strong>SuperAdmin Component:</strong>
          <ul>
            <li>Main admin interface</li>
            <li>Navigation management</li>
            <li>Access control</li>
            <li>System overview</li>
          </ul>
        </li>
        <li><strong>AdminNav Component:</strong>
          <ul>
            <li>Admin navigation menu</li>
            <li>Quick access features</li>
            <li>Context-aware navigation</li>
          </ul>
        </li>
      </ul>

      <h3>2. Management Modules</h3>
      <ul>
        <li><strong>Companies Management:</strong>
          <ul>
            <li>Company registration</li>
            <li>Subscription management</li>
            <li>Settings configuration</li>
            <li>Usage monitoring</li>
          </ul>
        </li>
        <li><strong>User Management:</strong>
          <ul>
            <li>User administration</li>
            <li>Role assignment</li>
            <li>Access control</li>
            <li>Activity monitoring</li>
          </ul>
        </li>
      </ul>

      <h2>Administrative Features</h2>
      
      <h3>1. System Configuration</h3>
      <ul>
        <li><strong>API Settings:</strong>
          <ul>
            <li>Provider configuration</li>
            <li>API key management</li>
            <li>Rate limiting settings</li>
            <li>Integration parameters</li>
          </ul>
        </li>
        <li><strong>Security Settings:</strong>
          <ul>
            <li>Security policies</li>
            <li>Access controls</li>
            <li>Authentication settings</li>
            <li>Compliance configuration</li>
          </ul>
        </li>
      </ul>

      <h3>2. Monitoring Tools</h3>
      <ul>
        <li><strong>System Analytics:</strong>
          <ul>
            <li>Usage statistics</li>
            <li>Performance metrics</li>
            <li>Error monitoring</li>
            <li>Audit logging</li>
          </ul>
        </li>
        <li><strong>Reports:</strong>
          <ul>
            <li>System reports</li>
            <li>Usage reports</li>
            <li>Compliance reports</li>
            <li>Custom reporting</li>
          </ul>
        </li>
      </ul>

      <h2>Data Management</h2>
      
      <h3>1. Company Data</h3>
      <pre><code>{`{
  companyId: string,
  name: string,
  subscription: {
    plan: string,
    status: string,
    features: string[],
    limits: {
      queries: number,
      users: number,
      // Additional limits
    }
  },
  settings: {
    security: SecuritySettings,
    api: ApiSettings,
    workflow: WorkflowSettings,
    // Additional settings
  }
}`}</code></pre>

      <h3>2. Administrative Operations</h3>
      <ul>
        <li>Company management</li>
        <li>User administration</li>
        <li>System configuration</li>
        <li>Data operations</li>
      </ul>

      <h2>Security Features</h2>
      
      <h3>1. Access Control</h3>
      <ul>
        <li>Role-based access</li>
        <li>Permission management</li>
        <li>Action logging</li>
        <li>Security policies</li>
      </ul>

      <h3>2. Audit System</h3>
      <ul>
        <li>Action tracking</li>
        <li>Change history</li>
        <li>Security events</li>
        <li>Compliance monitoring</li>
      </ul>

      <h2>Integration Points</h2>
      
      <h3>1. System Integration</h3>
      <ul>
        <li>Authentication system</li>
        <li>Billing system</li>
        <li>Reporting system</li>
        <li>Notification system</li>
      </ul>

      <h3>2. External Integration</h3>
      <ul>
        <li>Provider APIs</li>
        <li>Payment gateways</li>
        <li>External services</li>
        <li>Analytics platforms</li>
      </ul>

      <h2>Admin System Structure</h2>
      <MermaidDiagram chart={adminStructureDiagram} />
      <p>
        This diagram shows the hierarchical structure of the admin system, illustrating the
        relationships between different administrative components and their functions.
      </p>

      <h2>Company Setup Workflow</h2>
      <MermaidDiagram chart={adminWorkflowDiagram} />
      <p>
        The diagram demonstrates the workflow for setting up a new company in the system,
        including user creation and permission assignment.
      </p>

      <h2>Admin Data Flow</h2>
      <MermaidDiagram chart={adminDataFlowDiagram} />
      <p>
        This diagram illustrates how administrative actions flow through the system, including
        access control, data management, and audit logging.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li>Regular security reviews</li>
        <li>Performance monitoring</li>
        <li>Data backup procedures</li>
        <li>Compliance checks</li>
        <li>Documentation updates</li>
      </ul>
    </div>
  );
}
