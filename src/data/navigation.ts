import { DocSection } from '../types/docs';

export const navigation: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs/introduction',
        description: 'Learn about the core concepts and architecture.'
      },
      {
        title: 'Installation',
        href: '/docs/installation',
        description: 'Step-by-step guide to install and set up the application.'
      },
      {
        title: 'Quick Start',
        href: '/docs/quickstart',
        description: 'Get up and running in under 5 minutes.'
      }
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      {
        title: 'Architecture',
        href: '/docs/architecture',
        description: 'Understanding the application structure and design patterns.'
      },
      {
        title: 'Configuration',
        href: '/docs/configuration',
        description: 'Learn about configuration options and customization.'
      }
    ]
  }
];