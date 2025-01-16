import React from 'react';

export function Architecture() {
  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Architecture</h1>
      <p className="lead">
        Understanding the core architecture of our platform.
      </p>

      <h2>Overview</h2>
      <p>
        Our platform follows a modular, microservices-based architecture designed
        for scalability and maintainability.
      </p>

      <h2>Core Components</h2>
      <ul>
        <li>
          <strong>Core Engine:</strong> Handles the fundamental operations and
          business logic
        </li>
        <li>
          <strong>API Layer:</strong> RESTful and GraphQL interfaces for data
          access
        </li>
        <li>
          <strong>Authentication:</strong> Secure user authentication and
          authorization
        </li>
        <li>
          <strong>Data Layer:</strong> Efficient data storage and retrieval
          systems
        </li>
      </ul>

      <h2>Design Principles</h2>
      <ul>
        <li>Separation of Concerns</li>
        <li>SOLID Principles</li>
        <li>DRY (Don't Repeat Yourself)</li>
        <li>Dependency Injection</li>
      </ul>

      <h2>System Requirements</h2>
      <p>
        Our platform is designed to run efficiently on modern infrastructure:
      </p>
      <ul>
        <li>Node.js runtime environment</li>
        <li>Container orchestration support</li>
        <li>SQL or NoSQL database</li>
        <li>Redis for caching (optional)</li>
      </ul>
    </div>
  );
}