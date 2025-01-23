import React from 'react';

export function QuickStart() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Quick Start Guide</h1>
      <p className="lead">
        Get started with the Zimako Background Check System in minutes. This guide will walk you through
        the essential steps to begin conducting background checks.
      </p>

      <h2>1. Account Setup</h2>
      <div className="my-4">
        <h3>Create Your Company Account</h3>
        <ol>
          <li>Contact Zimako sales team for account creation</li>
          <li>Receive your company credentials</li>
          <li>Log in to the admin dashboard</li>
          <li>Complete your company profile</li>
        </ol>
      </div>

      <h2>2. First Background Check</h2>
      <div className="my-4">
        <h3>Submit Your First Check</h3>
        <ol>
          <li>Navigate to "New Check" in the dashboard</li>
          <li>Enter subject's information:
            <ul>
              <li>Full name</li>
              <li>ID number</li>
              <li>Date of birth</li>
              <li>Contact details</li>
            </ul>
          </li>
          <li>Select verification types:
            <ul>
              <li>Personal information</li>
              <li>Education history</li>
              <li>Employment history</li>
              <li>Criminal record</li>
              <li>Credit status</li>
            </ul>
          </li>
          <li>Submit the request</li>
        </ol>
      </div>

      <h2>3. Track Progress</h2>
      <div className="my-4">
        <h3>Monitor Your Check</h3>
        <ol>
          <li>View the check in your dashboard</li>
          <li>Monitor real-time status updates</li>
          <li>Receive email notifications</li>
          <li>View interim results as they arrive</li>
        </ol>
      </div>

      <h2>4. View Results</h2>
      <div className="my-4">
        <h3>Access Check Results</h3>
        <ol>
          <li>Click on the completed check</li>
          <li>View comprehensive results</li>
          <li>Download PDF reports</li>
          <li>Share results with authorized team members</li>
        </ol>
      </div>

      <h2>Common Operations</h2>
      
      <h3>Managing Users</h3>
      <pre><code>{`// Add a new user
1. Go to Settings > Users
2. Click "Add User"
3. Enter user details
4. Assign appropriate role
5. Send invitation`}</code></pre>

      <h3>Running Batch Checks</h3>
      <pre><code>{`// Submit multiple checks
1. Prepare CSV with subject details
2. Go to Batch Operations
3. Upload CSV file
4. Review subjects
5. Submit batch`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Data Quality:</strong> Always verify input information accuracy</li>
        <li><strong>Consent:</strong> Ensure you have subject's consent before checks</li>
        <li><strong>Privacy:</strong> Only share results with authorized personnel</li>
        <li><strong>Documentation:</strong> Maintain records of consent and sharing</li>
      </ul>

      <h2>Troubleshooting</h2>
      <div className="my-4">
        <h3>Common Issues</h3>
        <ul>
          <li><strong>Check Stuck in Processing:</strong>
            <ul>
              <li>Verify subject information accuracy</li>
              <li>Check for system notifications</li>
              <li>Contact support if persists</li>
            </ul>
          </li>
          <li><strong>Access Denied:</strong>
            <ul>
              <li>Verify user permissions</li>
              <li>Check company subscription status</li>
              <li>Ensure proper login credentials</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2>Next Steps</h2>
      <ul>
        <li>Explore advanced features in the full documentation</li>
        <li>Set up automated checks for regular verifications</li>
        <li>Configure custom report templates</li>
        <li>Integrate with your HR system via API</li>
      </ul>
    </div>
  );
}