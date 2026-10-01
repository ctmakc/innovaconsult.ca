import type { Span } from './stages';

export interface Capability {
  key: string;
  name: string;
  line: string;
  span: Span;
  href: string;
  scope: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    key: 'ai',
    name: 'Applied AI & automation',
    line: 'AI systems designed around real workflows, decisions and measurable business outcomes.',
    span: [0, 5],
    href: '/ai-transformation',
    scope: [
      'Business-process discovery',
      'Workflow automation',
      'AI assistants and agents',
      'Multi-agent and human-in-the-loop systems',
      'AI governance and controls',
      'Decision support'
    ]
  },
  {
    key: 'software',
    name: 'Software & digital products',
    line: 'Custom software, internal platforms and digital products, built from prototype to operation.',
    span: [2, 4],
    href: '/software',
    scope: [
      'Internal platforms and process systems',
      'SaaS and web applications',
      'Mobile apps',
      'Data systems and dashboards',
      'Integrations',
      'Modernising existing software'
    ]
  },
  {
    key: 'rd',
    name: 'Applied R&D & commercialization',
    line: 'Technology scouting, experiments and fast validation, then the path from proof of concept to product.',
    span: [0, 2],
    href: '/innovation',
    scope: [
      'Opportunity discovery',
      'Technology scouting',
      'Proof-of-concept builds',
      'Technical and business feasibility',
      'Productization',
      'Pilots with industry users'
    ]
  },
  {
    key: 'partnerships',
    name: 'Innovation partnerships',
    line: 'Joint development with companies, researchers, technology providers and public organizations.',
    span: [0, 5],
    href: '/partnerships',
    scope: [
      'Co-development',
      'Joint R&D',
      'Pilot deployment',
      'Technology integration',
      'Canadian market collaboration',
      'Consortium funding applications'
    ]
  }
];
