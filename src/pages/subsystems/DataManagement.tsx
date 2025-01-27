import React from 'react';
import { MermaidDiagram } from '../../components/diagrams/MermaidDiagram';

export function DataManagement() {
  const dataModelDiagram = `
    classDiagram
      class User {
        +string userId
        +string email
        +string role
        +string companyId
        +Profile profile
        +Settings settings
        +Metadata metadata
      }
      
      class Company {
        +string companyId
        +string name
        +Settings settings
        +Subscription subscription
        +Metadata metadata
      }
      
      class BackgroundCheck {
        +string checkId
        +string status
        +string[] type
        +Subject subject
        +Result[] results
        +Document[] documents
        +Metadata metadata
      }
      
      class Provider {
        +string providerId
        +string name
        +string[] type
        +Config config
        +Status status
      }
      
      User "1" --> "1" Company
      Company "1" --> "*" BackgroundCheck
      BackgroundCheck "*" --> "1..*" Provider
      
      style User fill:#4f46e5,stroke:#6366f1,color:#fff
      style Company fill:#3730a3,stroke:#6366f1,color:#fff
      style BackgroundCheck fill:#059669,stroke:#10b981,color:#fff
      style Provider fill:#0284c7,stroke:#0ea5e9,color:#fff
  `;

  const dataFlowDiagram = `
    graph TD
      A[Client Request] --> B{Access Control}
      B -->|Authorized| C[Data Service]
      B -->|Unauthorized| D[Error]
      C --> E[Cache Check]
      E -->|Cache Hit| F[Return Data]
      E -->|Cache Miss| G[Database Query]
      G --> H[Data Transform]
      H --> I[Cache Update]
      I --> F
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#059669,stroke:#10b981,color:#fff
      style D fill:#dc2626,stroke:#ef4444,color:#fff
      style E fill:#3730a3,stroke:#6366f1,color:#fff
      style F fill:#059669,stroke:#10b981,color:#fff
      style G fill:#0284c7,stroke:#0ea5e9,color:#fff
      style H fill:#4f46e5,stroke:#6366f1,color:#fff
      style I fill:#3730a3,stroke:#6366f1,color:#fff
  `;

  const securityModelDiagram = `
    graph TD
      A[Data Access Request] --> B{Authentication}
      B -->|Valid Token| C{Authorization}
      B -->|Invalid Token| D[Access Denied]
      C -->|Has Permission| E[Access Layer]
      C -->|No Permission| D
      E --> F{Data Type}
      F -->|Sensitive| G[Encryption]
      F -->|Standard| H[Direct Access]
      G --> I[Audit Log]
      H --> I
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#3730a3,stroke:#6366f1,color:#fff
      style D fill:#dc2626,stroke:#ef4444,color:#fff
      style E fill:#059669,stroke:#10b981,color:#fff
      style F fill:#3730a3,stroke:#6366f1,color:#fff
      style G fill:#0284c7,stroke:#0ea5e9,color:#fff
      style H fill:#0284c7,stroke:#0ea5e9,color:#fff
      style I fill:#6366f1,stroke:#818cf8,color:#fff
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Data Management System</h1>

      <h2>Overview</h2>
      <p>
        The Data Management System handles all aspects of data storage, retrieval, and manipulation
        within the background check system. It ensures data integrity, security, and efficient access
        patterns while maintaining compliance with privacy regulations.
      </p>

      <h2>Data Model</h2>
      <MermaidDiagram chart={dataModelDiagram} />
      <p>
        This class diagram shows the core data models and their relationships within the system,
        including Users, Companies, Background Checks, and Providers.
      </p>

      <h2>Data Flow Architecture</h2>
      <MermaidDiagram chart={dataFlowDiagram} />
      <p>
        The diagram illustrates how data flows through the system, including access control,
        caching strategies, and data transformation steps.
      </p>

      <h2>Security Model</h2>
      <MermaidDiagram chart={securityModelDiagram} />
      <p>
        This diagram demonstrates the security architecture, showing how data access is controlled,
        encrypted, and audited throughout the system.
      </p>

      <h2>Core Components</h2>
      
      <h3>1. Data Services</h3>
      <ul>
        <li><strong>Data Access Layer:</strong>
          <ul>
            <li>CRUD operations</li>
            <li>Query optimization</li>
            <li>Transaction management</li>
            <li>Cache management</li>
          </ul>
        </li>
        <li><strong>Data Validation:</strong>
          <ul>
            <li>Schema validation</li>
            <li>Data integrity checks</li>
            <li>Format verification</li>
            <li>Constraint enforcement</li>
          </ul>
        </li>
      </ul>

      <h3>2. Storage Systems</h3>
      <ul>
        <li><strong>Firestore Database:</strong>
          <ul>
            <li>Document storage</li>
            <li>Real-time updates</li>
            <li>Data indexing</li>
            <li>Query optimization</li>
          </ul>
        </li>
        <li><strong>File Storage:</strong>
          <ul>
            <li>Document storage</li>
            <li>Media management</li>
            <li>Access control</li>
            <li>Versioning</li>
          </ul>
        </li>
      </ul>

      <h2>Data Operations</h2>
      
      <h3>1. CRUD Operations</h3>
      <ul>
        <li><strong>Create Operations:</strong>
          <ul>
            <li>Data validation</li>
            <li>Default values</li>
            <li>Relationship creation</li>
            <li>Event triggers</li>
          </ul>
        </li>
        <li><strong>Read Operations:</strong>
          <ul>
            <li>Query optimization</li>
            <li>Data filtering</li>
            <li>Access control</li>
            <li>Cache utilization</li>
          </ul>
        </li>
      </ul>

      <h3>2. Advanced Operations</h3>
      <ul>
        <li>Batch processing</li>
        <li>Transaction management</li>
        <li>Data migration</li>
        <li>Backup operations</li>
      </ul>

      <h2>Security & Privacy</h2>
      
      <h3>1. Data Security</h3>
      <ul>
        <li>Access control</li>
        <li>Encryption at rest</li>
        <li>Encryption in transit</li>
        <li>Security monitoring</li>
      </ul>

      <h3>2. Privacy Controls</h3>
      <ul>
        <li>Data anonymization</li>
        <li>Privacy compliance</li>
        <li>Data retention</li>
        <li>Data deletion</li>
      </ul>

      <h2>Performance Optimization</h2>
      
      <h3>1. Query Optimization</h3>
      <ul>
        <li>Index management</li>
        <li>Query planning</li>
        <li>Cache strategies</li>
        <li>Performance monitoring</li>
      </ul>

      <h3>2. Resource Management</h3>
      <ul>
        <li>Connection pooling</li>
        <li>Resource allocation</li>
        <li>Load balancing</li>
        <li>Scaling strategies</li>
      </ul>

      <h2>Maintenance & Monitoring</h2>
      
      <h3>1. Data Maintenance</h3>
      <ul>
        <li>Data cleanup</li>
        <li>Index optimization</li>
        <li>Backup procedures</li>
        <li>Archive management</li>
      </ul>

      <h3>2. System Monitoring</h3>
      <ul>
        <li>Performance metrics</li>
        <li>Error tracking</li>
        <li>Usage analytics</li>
        <li>Health monitoring</li>
      </ul>
    </div>
  );
}
