import type { Span } from './stages';

export interface Capability {
  key: string;
  /** Record code shown as mono meta, e.g. CAP-AI. */
  code: string;
  name: string;
  line: string;
  span: Span;
  href: string;
  /** Label of the link to the capability's own page. */
  linkLabel: string;
  scope: string[];
  /** Project slugs (see projects.ts) where this capability is shown in real work. */
  projects?: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    key: 'ai',
    code: 'CAP-AI',
    name: 'Applied AI & automation',
    line: 'AI systems designed around real workflows, decisions and measurable business outcomes.',
    span: [0, 5],
    href: '/ai-transformation',
    linkLabel: 'AI transformation method',
    scope: [
      'Process mapping software (Workflow OS)',
      'Workflow automation',
      'AI assistants and agents',
      'Multi-agent and human-in-the-loop systems',
      'AI governance and controls',
      'Decision-support tools'
    ],
    projects: ['workflow-os', 'aicrmius', 'finmozg']
  },
  {
    key: 'software',
    code: 'CAP-SW',
    name: 'Software & digital products',
    line: 'Custom software, internal platforms and digital products, built from prototype to operation.',
    span: [2, 4],
    href: '/software',
    linkLabel: 'Software & products',
    scope: [
      'Internal platforms and process systems',
      'SaaS and web applications',
      'Mobile apps',
      'Data systems and dashboards',
      'Integrations',
      'Modernizing existing software'
    ],
    projects: ['uafest', 'foundwall', 'aicrmius', 'babakokum']
  },
  {
    key: 'rd',
    code: 'CAP-RD',
    name: 'Applied R&D and commercialization',
    line: 'Technology scouting, experiments and fast validation, then the path from proof of concept to product.',
    span: [0, 2],
    href: '/innovation',
    linkLabel: 'Innovation & R&D',
    scope: [
      'Opportunity discovery',
      'Technology scouting',
      'Proof-of-concept builds',
      'Technical and business feasibility',
      'Productization',
      'Pilots with industry users'
    ],
    projects: ['openfield', 'finmozg', 'workflow-os']
  },
  {
    key: 'partnerships',
    code: 'CAP-PT',
    name: 'Innovation partnerships',
    line: 'Joint development with companies, researchers, technology providers and public organizations.',
    span: [0, 5],
    href: '/partnerships',
    linkLabel: 'Partnership models',
    scope: [
      'Co-development',
      'Joint R&D',
      'Pilot deployment',
      'Technology integration',
      'Canadian market collaboration',
      'Consortium funding applications'
    ],
    projects: ['openfield', 'dual-use']
  }
];
