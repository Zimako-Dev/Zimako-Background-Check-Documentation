import React from 'react';
import { MermaidDiagram } from '../../components/diagrams/MermaidDiagram';

export function QueryManagement() {
  const queryFlowDiagram = `
    %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
    graph TD
      Start((●)) --> QueryList[QueryList]
      
      %% Query Management Components
      QueryList --> QueryFilters[QueryFilters]
      QueryList --> QueryStats[QueryStats]
      QueryList --> NewBgCheck[NewBackgroundCheck]
      
      QueryFilters --> FilterComp[FilterComponent]
      QueryStats --> StatsDisp[StatsDisplay]
      NewBgCheck --> BgResults[BackgroundCheckResults]
      
      %% Processing Flow
      QueryFilters --> Pending[Pending]
      Pending --> Processing[Processing]
      Processing --> InProgress[InProgress]
      InProgress --> Completed[Completed]
      InProgress --> Failed[Failed]
      Processing --> Failed
      Failed --> Pending
      
      style Start fill:#4f46e5,stroke:#6366f1
      style QueryList fill:#4f46e5,stroke:#6366f1,color:#fff
      style QueryFilters fill:#4f46e5,stroke:#6366f1,color:#fff
      style QueryStats fill:#4f46e5,stroke:#6366f1,color:#fff
      style NewBgCheck fill:#4f46e5,stroke:#6366f1,color:#fff
      style FilterComp fill:#0284c7,stroke:#0ea5e9,color:#fff
      style StatsDisp fill:#0284c7,stroke:#0ea5e9,color:#fff
      style BgResults fill:#059669,stroke:#10b981,color:#fff
      style Pending fill:#4f46e5,stroke:#6366f1,color:#fff
      style Processing fill:#0284c7,stroke:#0ea5e9,color:#fff
      style InProgress fill:#0284c7,stroke:#0ea5e9,color:#fff
      style Completed fill:#059669,stroke:#10b981,color:#fff
      style Failed fill:#dc2626,stroke:#ef4444,color:#fff
  `;

  const queryComponentsDiagram = `
    graph TD
      A[QueryList] --> B[QueryFilters]
      A --> C[QueryStats]
      A --> D[NewBackgroundCheck]
      D --> E[BackgroundCheckResults]
      B --> F[FilterComponent]
      C --> G[StatsDisplay]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#3730a3,stroke:#6366f1,color:#fff
      style D fill:#4f46e5,stroke:#6366f1,color:#fff
      style E fill:#059669,stroke:#10b981,color:#fff
      style F fill:#0284c7,stroke:#0ea5e9,color:#fff
      style G fill:#0284c7,stroke:#0ea5e9,color:#fff
  `;

  const queryStateDiagram = `
    stateDiagram-v2
      [*] --> Pending
      Pending --> Processing: Start Check
      Processing --> InProgress: Provider Response
      InProgress --> Completed: All Checks Done
      InProgress --> Failed: Error
      Processing --> Failed: Timeout
      Failed --> Pending: Retry
      Completed --> [*]
      
      style Pending fill:#4f46e5,stroke:#6366f1,color:#fff
      style Processing fill:#3730a3,stroke:#6366f1,color:#fff
      style InProgress fill:#0284c7,stroke:#0ea5e9,color:#fff
      style Completed fill:#059669,stroke:#10b981,color:#fff
      style Failed fill:#dc2626,stroke:#ef4444,color:#fff
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Query Management System</h1>

      <h2>Overview</h2>
      <p>
        The Query Management System handles all aspects of background check requests, from initiation
        to results processing and storage. It provides a robust interface for managing queries across
        different verification types and providers.
      </p>

      <h2>Component Architecture</h2>
      <MermaidDiagram chart={queryFlowDiagram} />
      <p>
        This diagram illustrates the complete structure of the query management system, showing both
        the UI components and the processing flow states:
      </p>
      <ul>
        <li><strong>UI Components:</strong>
          <ul>
            <li>QueryList: Main container component</li>
            <li>QueryFilters: For filtering and search</li>
            <li>QueryStats: Displays statistics and metrics</li>
            <li>NewBackgroundCheck: For initiating new checks</li>
          </ul>
        </li>
        <li><strong>Processing States:</strong>
          <ul>
            <li>Pending → Processing → InProgress</li>
            <li>Success path: → Completed</li>
            <li>Error path: → Failed (with retry option)</li>
          </ul>
        </li>
      </ul>

      <h2>Query Components</h2>
      <MermaidDiagram chart={queryComponentsDiagram} />
      <p>
        The component hierarchy shows how different parts of the query management system interact
        and their relationships to each other.
      </p>

      <h2>Query State Machine</h2>
      <MermaidDiagram chart={queryStateDiagram} />
      <p>
        The state diagram shows all possible states a query can be in and the transitions
        between these states during processing.
      </p>

      <h2>Core Components</h2>
      
      <h3>1. Query Interface Components</h3>
      <ul>
        <li><strong>QueryList (9.9KB):</strong>
          <ul>
            <li>Main query management interface</li>
            <li>Query status tracking</li>
            <li>Filtering and sorting capabilities</li>
            <li>Batch operations support</li>
          </ul>
        </li>
        <li><strong>NewBackgroundCheck (7.5KB):</strong>
          <ul>
            <li>Query initiation form</li>
            <li>Dynamic form validation</li>
            <li>Document upload handling</li>
            <li>Provider selection</li>
          </ul>
        </li>
      </ul>

      <h3>2. Results Management</h3>
      <ul>
        <li><strong>BackgroundCheckResults (11.2KB):</strong>
          <ul>
            <li>Comprehensive results display</li>
            <li>Status visualization</li>
            <li>Document preview</li>
            <li>Export functionality</li>
          </ul>
        </li>
        <li><strong>QueryStats:</strong>
          <ul>
            <li>Statistical analysis</li>
            <li>Performance metrics</li>
            <li>Trend analysis</li>
          </ul>
        </li>
      </ul>

      <h2>Query Workflow</h2>
      
      <h3>1. Query Creation</h3>
      <ol>
        <li>Information collection</li>
        <li>Document validation</li>
        <li>Provider selection</li>
        <li>Priority assignment</li>
        <li>Submission processing</li>
      </ol>

      <h3>2. Query Processing</h3>
      <ul>
        <li>Status tracking</li>
        <li>Provider communication</li>
        <li>Results aggregation</li>
        <li>Verification steps</li>
      </ul>

      <h2>Data Management</h2>
      
      <h3>1. Query Data Structure</h3>
      <pre><code>{`{
  queryId: string,
  status: 'pending' | 'processing' | 'completed' | 'failed',
  type: string[],
  subject: {
    firstName: string,
    lastName: string,
    idNumber: string,
    // Additional fields
  },
  documents: Document[],
  results: QueryResult[],
  metadata: {
    createdAt: timestamp,
    updatedAt: timestamp,
    completedAt: timestamp,
    // Additional metadata
  }
}`}</code></pre>

      <h3>2. Data Operations</h3>
      <ul>
        <li>Create operations</li>
        <li>Update operations</li>
        <li>Query operations</li>
        <li>Delete operations</li>
      </ul>

      <h2>Integration Features</h2>
      
      <h3>1. Provider Integration</h3>
      <ul>
        <li>Multiple provider support</li>
        <li>Provider-specific configurations</li>
        <li>Response handling</li>
        <li>Error management</li>
      </ul>

      <h3>2. System Integration</h3>
      <ul>
        <li>Authentication integration</li>
        <li>Notification system</li>
        <li>Reporting system</li>
        <li>Analytics integration</li>
      </ul>

      <h2>Performance Optimization</h2>
      
      <h3>1. Query Optimization</h3>
      <ul>
        <li>Efficient data fetching</li>
        <li>Pagination implementation</li>
        <li>Caching strategies</li>
        <li>Background processing</li>
      </ul>

      <h3>2. UI Performance</h3>
      <ul>
        <li>Component optimization</li>
        <li>Virtual scrolling</li>
        <li>Lazy loading</li>
        <li>State management</li>
      </ul>

      <h2>Error Handling</h2>
      
      <h3>1. Query Errors</h3>
      <ul>
        <li>Validation errors</li>
        <li>Processing errors</li>
        <li>Provider errors</li>
        <li>System errors</li>
      </ul>

      <h3>2. Recovery Procedures</h3>
      <ul>
        <li>Query retry logic</li>
        <li>Error recovery steps</li>
        <li>Manual intervention processes</li>
        <li>Data consistency checks</li>
      </ul>
    </div>
  );
}
