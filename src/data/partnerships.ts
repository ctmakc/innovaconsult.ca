import type { Span } from './stages';

export interface PartnershipModel {
  name: string;
  line: string;
  span: Span;
  youBring: string;
  weBring: string;
  /** Optional link to a real project that shows this model in practice. */
  example?: { href: string; label: string };
}

export const PARTNERSHIP_MODELS: PartnershipModel[] = [
  {
    name: 'Co-development',
    line: 'We build a product together and share the work and the result.',
    span: [2, 4],
    youBring: 'Domain knowledge, users, a problem you understand deeply',
    weBring: 'Product design, engineering, AI, delivery'
  },
  {
    name: 'Applied R&D',
    line: 'A defined research question, a prototype and an honest feasibility answer.',
    span: [1, 2],
    youBring: 'Research results, data or a technical hypothesis',
    weBring: 'Rapid prototyping, experiments, validation',
    example: { href: '/projects/openfield', label: 'Example: OpenField, a robot-fleet logbook prototype' }
  },
  {
    name: 'Product commercialization',
    line: 'Turning a proven concept into a product people can buy and use.',
    span: [3, 5],
    youBring: 'A working technology or research output',
    weBring: 'Product architecture, MVP, pilots, go-to-market support'
  },
  {
    name: 'Technology integration',
    line: 'Connecting your technology to the systems your customers already run.',
    span: [3, 4],
    youBring: 'A platform, device, API or model',
    weBring: 'Integrations, workflows, deployment'
  },
  {
    name: 'Pilot deployment',
    line: 'A time-boxed pilot with real users and agreed success measures.',
    span: [4, 5],
    youBring: 'An operational environment and users',
    weBring: 'Configuration, rollout, measurement',
    example: { href: '/projects/openfield', label: 'Example: OpenField, field validation now being scoped for 2027' }
  },
  {
    name: 'Canadian adaptation and integration',
    line: 'Fitting technology proven elsewhere to Canadian users and the systems they run.',
    span: [0, 4],
    youBring: 'Technology proven in other markets',
    weBring: 'Engineering to adapt it to Canadian data, languages, regulation and the software already in place'
  },
  {
    name: 'Joint funding applications',
    line: 'Building the project and the consortium behind an innovation program application.',
    span: [0, 2],
    youBring: 'Expertise, co-funding or an industry need',
    weBring: 'Project design, the technical work plan and budget, and the software build with named subcontractors'
  },
  {
    name: 'Industry + technology consortium',
    line: 'Operators, researchers and builders on one project with clear roles.',
    span: [0, 5],
    youBring: 'Your part of the problem',
    weBring: 'Coordination and the software that ties it together'
  }
];
