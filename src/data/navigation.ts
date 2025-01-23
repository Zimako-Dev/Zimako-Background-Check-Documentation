import { DocSection } from '../types/docs';

export const navigation: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs/introduction',
        description: 'Learn about the Zimako Background Check System.'
      },
      {
        title: 'Installation',
        href: '/docs/installation',
        description: 'Step-by-step guide to install and set up the system.'
      },
      {
        title: 'Quick Start',
        href: '/docs/quickstart',
        description: 'Start conducting background checks in minutes.'
      }
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      {
        title: 'Architecture',
        href: '/docs/architecture',
        description: 'Understanding the system structure and design patterns.'
      },
      {
        title: 'Configuration',
        href: '/docs/configuration',
        description: 'Learn about configuration options and customization.'
      }
    ]
  },
  {
    title: 'Integration & Development',
    items: [
      {
        title: 'API Documentation',
        href: '/docs/api',
        description: 'Complete API reference for system integration.'
      }
    ]
  },
  {
    title: 'Security & Compliance',
    items: [
      {
        title: 'Security Guide',
        href: '/docs/security',
        description: 'Security features and best practices.'
      },
      {
        title: 'Compliance Guide',
        href: '/docs/compliance',
        description: 'Legal compliance and regulatory requirements.'
      }
    ]
  }
];