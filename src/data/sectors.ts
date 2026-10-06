export type Engagement = 'building' | 'researching' | 'exploring';

export const ENGAGEMENT_LABEL: Record<Engagement, string> = {
  building: 'Building',
  researching: 'Researching',
  exploring: 'Exploring'
};

export interface Sector {
  name: string;
  engagement: Engagement;
  line: string;
  evidence?: string;
}

export const SECTORS: Sector[] = [
  {
    name: 'AI & agentic systems',
    engagement: 'building',
    line: 'Agents that work inside business records under human approval, with each action logged for review.',
    evidence: 'AICRMIUS, Workflow OS, FINMOZG'
  },
  {
    name: 'Business software',
    engagement: 'building',
    line: 'Back offices, registers and portals that replace spreadsheets and inbox workflows.',
    evidence: 'UAFest ecosystem'
  },
  {
    name: 'Community & public platforms',
    engagement: 'building',
    line: 'Public-facing services where privacy, accessibility and trust matter as much as features.',
    evidence: 'FoundWall, UAFest'
  },
  {
    name: 'Data & knowledge systems',
    engagement: 'building',
    line: 'Turning mailboxes, documents and operating history into searchable, auditable records.',
    evidence: 'UAFest mail archive, AICRMIUS knowledge base'
  },
  {
    name: 'AgriTech',
    engagement: 'building',
    line: 'A prototype logbook and reports for mixed fleets of agricultural robots; field validation planned for 2027.',
    evidence: 'OpenField'
  },
  {
    name: 'HealthTech & PharmaTech',
    engagement: 'exploring',
    line: 'Workflow and documentation problems where careful automation can save clinical and lab time.'
  },
  {
    name: 'Public-sector technology',
    engagement: 'exploring',
    line: 'Digital services, knowledge tools and pilots for complex operational environments.'
  },
  {
    name: 'Dual-use technology',
    engagement: 'exploring',
    line: 'Software and AI for defence-adjacent programs, at the research and proposal stage.'
  }
];
