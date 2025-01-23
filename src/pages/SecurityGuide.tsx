import React from 'react';

export function SecurityGuide() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Security Guide</h1>
      <p className="lead">
        Understanding and implementing security best practices for the Zimako Background Check System.
      </p>

      <h2>Data Protection</h2>
      
      <h3>1. Data Encryption</h3>
      <ul>
        <li>All data is encrypted at rest using AES-256</li>
        <li>TLS 1.3 encryption for data in transit</li>
        <li>End-to-end encryption for sensitive documents</li>
        <li>Secure key management using Firebase KMS</li>
      </ul>

      <h3>2. Data Retention</h3>
      <pre><code>{`// Data retention policies
Background Checks: 5 years
Verification Results: 7 years
User Activity Logs: 2 years
System Logs: 1 year`}</code></pre>

      <h2>Access Control</h2>
      
      <h3>1. Role-Based Access Control (RBAC)</h3>
      <pre><code>{`// Role hierarchy
SuperAdmin
  └─ Admin
      └─ Manager
          └─ User
              └─ Viewer

// Permission matrix
Role        | Create | Read | Update | Delete
------------|---------|------|---------|--------
SuperAdmin  |    ✓    |   ✓   |    ✓    |    ✓
Admin       |    ✓    |   ✓   |    ✓    |    -
Manager     |    ✓    |   ✓   |    ✓    |    -
User        |    ✓    |   ✓   |    -    |    -
Viewer      |    -    |   ✓   |    -    |    -`}</code></pre>

      <h3>2. Multi-Factor Authentication</h3>
      <ul>
        <li>Required for admin accounts</li>
        <li>Optional for standard users</li>
        <li>Support for authenticator apps</li>
        <li>SMS fallback option</li>
      </ul>

      <h2>Compliance</h2>
      
      <h3>1. Data Privacy Regulations</h3>
      <ul>
        <li>POPIA (Protection of Personal Information Act)</li>
        <li>GDPR compliance for EU subjects</li>
        <li>CCPA compliance for California residents</li>
      </ul>

      <h3>2. Industry Standards</h3>
      <ul>
        <li>ISO 27001 certification</li>
        <li>SOC 2 Type II compliance</li>
        <li>Regular security audits</li>
      </ul>

      <h2>Security Monitoring</h2>

      <h3>1. Activity Monitoring</h3>
      <pre><code>{`// Monitored events
{
  "user_events": [
    "login_attempt",
    "password_change",
    "role_change",
    "data_access"
  ],
  "system_events": [
    "api_calls",
    "database_queries",
    "file_access",
    "configuration_changes"
  ]
}`}</code></pre>

      <h3>2. Threat Detection</h3>
      <ul>
        <li>Real-time anomaly detection</li>
        <li>Brute force attack prevention</li>
        <li>SQL injection protection</li>
        <li>XSS attack mitigation</li>
      </ul>

      <h2>Incident Response</h2>
      
      <h3>1. Security Incident Levels</h3>
      <pre><code>{`Level 1: Minor - No data exposure
Level 2: Moderate - Potential unauthorized access
Level 3: Major - Confirmed data breach
Level 4: Critical - System-wide security compromise`}</code></pre>

      <h3>2. Response Procedures</h3>
      <ol>
        <li>Incident detection and classification</li>
        <li>Immediate containment measures</li>
        <li>Investigation and analysis</li>
        <li>Stakeholder notification</li>
        <li>Recovery and restoration</li>
        <li>Post-incident review</li>
      </ol>

      <h2>Security Best Practices</h2>
      
      <h3>1. Password Policy</h3>
      <ul>
        <li>Minimum 12 characters</li>
        <li>Mix of uppercase, lowercase, numbers, symbols</li>
        <li>Password rotation every 90 days</li>
        <li>No password reuse for 12 cycles</li>
      </ul>

      <h3>2. API Security</h3>
      <ul>
        <li>API key rotation</li>
        <li>Request signing</li>
        <li>Rate limiting</li>
        <li>IP whitelisting</li>
      </ul>

      <h2>Disaster Recovery</h2>
      
      <h3>1. Backup Procedures</h3>
      <pre><code>{`// Backup schedule
Daily: Incremental backup
Weekly: Full backup
Monthly: Archive backup

// Retention periods
Daily backups: 30 days
Weekly backups: 12 weeks
Monthly backups: 7 years`}</code></pre>

      <h3>2. Recovery Time Objectives</h3>
      <ul>
        <li>RTO (Recovery Time Objective): 4 hours</li>
        <li>RPO (Recovery Point Objective): 15 minutes</li>
        <li>Regular disaster recovery testing</li>
      </ul>
    </div>
  );
}
