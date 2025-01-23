import React from 'react';

export function Introduction() {
  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Introduction to Zimako Background Check System</h1>
      <p className="lead">
        Welcome to the Zimako Background Check System documentation. This comprehensive guide will help you understand
        our advanced background verification platform and make the most of its powerful features.
      </p>

      <h2>What is Zimako Background Check System?</h2>
      <p>
        The Zimako Background Check System is a sophisticated, multi-tenant platform designed to streamline
        the process of conducting comprehensive background checks. Our system provides real-time verification
        across multiple domains including personal information, education, employment history, criminal records,
        and credit information.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Multi-tenant architecture with secure company isolation</li>
        <li>Real-time background check processing and updates</li>
        <li>Comprehensive verification modules:
          <ul>
            <li>Personal Information Verification</li>
            <li>Education History Checks</li>
            <li>Employment History Verification</li>
            <li>Criminal Record Checks</li>
            <li>Credit Status Assessment</li>
          </ul>
        </li>
        <li>Advanced admin dashboard with detailed analytics</li>
        <li>Role-based access control with granular permissions</li>
        <li>Secure document handling and storage</li>
      </ul>

      <h2>Why Choose Zimako?</h2>
      <p>
        Zimako combines cutting-edge technology with comprehensive verification processes to deliver
        accurate and reliable background checks. Our platform is built with security and scalability
        in mind, ensuring that your verification needs are met with the highest standards of
        data protection and efficiency.
      </p>

      <h2>Target Users</h2>
      <ul>
        <li><strong>HR Professionals:</strong> Streamline candidate verification processes</li>
        <li><strong>Compliance Officers:</strong> Ensure regulatory compliance in hiring</li>
        <li><strong>Security Teams:</strong> Conduct thorough background investigations</li>
        <li><strong>Company Administrators:</strong> Manage verification workflows and access controls</li>
      </ul>
    </div>
  );
}