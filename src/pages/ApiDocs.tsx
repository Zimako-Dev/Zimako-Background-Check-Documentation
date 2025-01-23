import React from 'react';

export function ApiDocs() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>API Documentation</h1>
      <p className="lead">
        Integrate the Zimako Background Check System with your applications using our RESTful API.
      </p>

      <h2>Authentication</h2>
      <p>All API requests require authentication using a Bearer token:</p>
      <pre><code>{`// Request header example
Authorization: Bearer your_api_token`}</code></pre>

      <h2>API Endpoints</h2>

      <h3>Background Checks</h3>
      <div className="space-y-8">
        <div>
          <h4>Create Background Check</h4>
          <pre><code>{`POST /api/v1/background-checks

// Request body
{
  "subject": {
    "firstName": "string",
    "lastName": "string",
    "idNumber": "string",
    "dateOfBirth": "string",
    "email": "string"
  },
  "checkTypes": ["personal", "education", "employment", "criminal", "credit"],
  "priority": "normal" | "urgent",
  "callbackUrl": "string"
}`}</code></pre>
        </div>

        <div>
          <h4>Get Background Check Status</h4>
          <pre><code>{`GET /api/v1/background-checks/{checkId}

// Response
{
  "id": "string",
  "status": "pending" | "processing" | "completed" | "failed",
  "progress": number,
  "results": object
}`}</code></pre>
        </div>

        <div>
          <h4>List Background Checks</h4>
          <pre><code>{`GET /api/v1/background-checks
  ?status=string
  &type=string
  &fromDate=string
  &toDate=string
  &page=number
  &limit=number`}</code></pre>
        </div>
      </div>

      <h3>Verification Results</h3>
      <div className="space-y-8">
        <div>
          <h4>Get Verification Results</h4>
          <pre><code>{`GET /api/v1/verifications/{verificationId}

// Response
{
  "id": "string",
  "type": "string",
  "status": "string",
  "results": {
    "verified": boolean,
    "details": object,
    "confidence": number
  }
}`}</code></pre>
        </div>
      </div>

      <h3>Reports</h3>
      <div className="space-y-8">
        <div>
          <h4>Generate Report</h4>
          <pre><code>{`POST /api/v1/reports
{
  "checkId": "string",
  "format": "pdf" | "html",
  "sections": string[]
}`}</code></pre>
        </div>

        <div>
          <h4>Download Report</h4>
          <pre><code>{`GET /api/v1/reports/{reportId}/download
Accept: application/pdf | text/html`}</code></pre>
        </div>
      </div>

      <h2>Webhooks</h2>
      <p>Configure webhooks to receive real-time updates:</p>
      <pre><code>{`// Webhook payload example
{
  "event": "check.completed" | "check.failed" | "verification.updated",
  "checkId": "string",
  "timestamp": "string",
  "data": {
    // Event-specific data
  }
}`}</code></pre>

      <h2>Rate Limits</h2>
      <ul>
        <li>Standard tier: 10 requests/second</li>
        <li>Premium tier: 50 requests/second</li>
        <li>Enterprise tier: Custom limits</li>
      </ul>

      <h2>Error Handling</h2>
      <pre><code>{`// Error response format
{
  "error": {
    "code": "string",
    "message": "string",
    "details": object
  }
}

// Common error codes
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
429 - Too Many Requests
500 - Internal Server Error`}</code></pre>

      <h2>SDK Libraries</h2>
      <ul>
        <li>Node.js: <code>@zimako/background-check-node</code></li>
        <li>Python: <code>zimako-background-check</code></li>
        <li>Java: <code>com.zimako.backgroundcheck</code></li>
        <li>PHP: <code>zimako/background-check-php</code></li>
      </ul>
    </div>
  );
}
