export const SITE = {
  url: 'https://innovaconsult.ca',
  name: 'INNOVA',
  legalName: 'INNOVA CONSULT LTD.',
  descriptor: 'Applied Innovation & Technology',
  corporationNumber: '1522612-1',
  /** NATO Commercial and Government Entity code, assigned by DND on 2026-10-01. */
  ncage: 'L15L3',
  duns: '241954189',
  incorporated: '2023',
  experienceSince: '2012',
  city: 'Ottawa',
  region: 'Ontario',
  country: 'Canada',
  email: 'info@innovaconsult.ca',
  /** Public URL of the Workflow OS demo. Leave empty until the demo is published. */
  workflowDemoUrl: '',
  defaultDescription:
    'INNOVA is an Ottawa applied-innovation company. We research, prototype, build and deploy applied AI and software with companies, researchers and public organizations.'
};

export const NAV = [
  { href: '/projects', label: 'Projects' },
  {
    href: '/capabilities',
    label: 'Capabilities',
    children: [
      { href: '/capabilities', label: 'All capabilities' },
      { href: '/ai-transformation', label: 'AI Transformation' },
      { href: '/software', label: 'Software & Products' },
      { href: '/innovation', label: 'Innovation & R&D' }
    ]
  },
  { href: '/workflow-os', label: 'Workflow OS' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/about', label: 'About' }
];
