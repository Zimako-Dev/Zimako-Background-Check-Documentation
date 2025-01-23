import React from 'react';

export function ComplianceGuide() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Compliance Guide</h1>
      <p className="lead">
        Ensure your background check processes comply with legal requirements and industry standards.
      </p>

      <h2>Legal Framework</h2>
      
      <h3>1. South African Legislation</h3>
      <ul>
        <li><strong>POPIA (Protection of Personal Information Act)</strong>
          <ul>
            <li>Data subject consent requirements</li>
            <li>Purpose limitation principles</li>
            <li>Data minimization requirements</li>
            <li>Security safeguards</li>
          </ul>
        </li>
        <li><strong>Employment Equity Act</strong>
          <ul>
            <li>Fair hiring practices</li>
            <li>Non-discrimination requirements</li>
            <li>Record keeping obligations</li>
          </ul>
        </li>
        <li><strong>Labour Relations Act</strong>
          <ul>
            <li>Employee rights protection</li>
            <li>Fair labor practices</li>
            <li>Dispute resolution procedures</li>
          </ul>
        </li>
      </ul>

      <h2>Consent Management</h2>
      
      <h3>1. Required Consent Forms</h3>
      <pre><code>{`// Minimum consent requirements
{
  "personal_info": {
    "required": true,
    "retention_period": "5 years",
    "purpose": "identity verification"
  },
  "criminal_records": {
    "required": true,
    "retention_period": "3 years",
    "purpose": "background screening"
  },
  "credit_check": {
    "required": true,
    "retention_period": "2 years",
    "purpose": "financial assessment"
  }
}`}</code></pre>

      <h3>2. Consent Records</h3>
      <ul>
        <li>Digital consent capture</li>
        <li>Audit trail maintenance</li>
        <li>Consent withdrawal process</li>
        <li>Regular consent review</li>
      </ul>

      <h2>Data Handling Requirements</h2>
      
      <h3>1. Data Collection</h3>
      <ul>
        <li>Collect only necessary information</li>
        <li>Verify data accuracy</li>
        <li>Document data sources</li>
        <li>Maintain collection records</li>
      </ul>

      <h3>2. Data Processing</h3>
      <pre><code>{`// Processing requirements
1. Verify processing grounds
2. Document processing activities
3. Implement security measures
4. Monitor processing operations
5. Regular compliance audits`}</code></pre>

      <h2>Reporting Requirements</h2>
      
      <h3>1. Mandatory Reports</h3>
      <ul>
        <li>Annual compliance reports</li>
        <li>Data breach notifications</li>
        <li>Subject access request responses</li>
        <li>Processing activity records</li>
      </ul>

      <h3>2. Record Keeping</h3>
      <pre><code>{`// Required records
{
  "consent_records": "7 years",
  "verification_results": "5 years",
  "processing_logs": "3 years",
  "access_requests": "2 years",
  "compliance_reports": "5 years"
}`}</code></pre>

      <h2>Industry Standards</h2>
      
      <h3>1. Background Screening Standards</h3>
      <ul>
        <li>BS 7858:2019 compliance</li>
        <li>ISO 27001 certification</li>
        <li>SANS compliance</li>
      </ul>

      <h3>2. Quality Assurance</h3>
      <ul>
        <li>Regular audits</li>
        <li>Staff training</li>
        <li>Process documentation</li>
        <li>Continuous improvement</li>
      </ul>

      <h2>Subject Rights</h2>
      
      <h3>1. Data Subject Rights</h3>
      <pre><code>{`// Rights management
{
  "access": "30 day response time",
  "correction": "immediate action required",
  "deletion": "subject to retention rules",
  "portability": "machine-readable format",
  "objection": "immediate processing halt"
}`}</code></pre>

      <h3>2. Rights Request Handling</h3>
      <ol>
        <li>Request receipt and logging</li>
        <li>Identity verification</li>
        <li>Request assessment</li>
        <li>Action implementation</li>
        <li>Response documentation</li>
      </ol>

      <h2>Compliance Monitoring</h2>
      
      <h3>1. Regular Audits</h3>
      <ul>
        <li>Internal compliance reviews</li>
        <li>External auditor assessments</li>
        <li>Gap analysis</li>
        <li>Remediation planning</li>
      </ul>

      <h3>2. Training Requirements</h3>
      <pre><code>{`// Training schedule
{
  "new_employees": "initial compliance training",
  "all_staff": "annual refresher course",
  "managers": "quarterly updates",
  "compliance_team": "monthly workshops"
}`}</code></pre>
    </div>
  );
}
