import type { Span } from './stages';

export interface PartnershipModel {
  name: string;
  line: string;
  span: Span;
  youBring: string;
  weBring: string;
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
    weBring: 'Rapid prototyping, experiments, validation'
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
    weBring: 'Configuration, rollout, measurement'
  },
  {
    name: 'Canadian market collaboration',
    line: 'Helping proven technology find Canadian users, partners and programs.',
    span: [0, 4],
    youBring: 'Technology with traction elsewhere',
    weBring: 'Local product adaptation, partners, program navigation'
  },
  {
    name: 'Joint funding applications',
    line: 'Building the project and the consortium behind an innovation program application.',
    span: [0, 2],
    youBring: 'Expertise, co-funding or an industry need',
    weBring: 'Project design, technical work plan, delivery capacity'
  },
  {
    name: 'Industry + technology consortium',
    line: 'Operators, researchers and builders on one project with clear roles.',
    span: [0, 5],
    youBring: 'Your part of the problem',
    weBring: 'Coordination and the software that ties it together'
  }
];
