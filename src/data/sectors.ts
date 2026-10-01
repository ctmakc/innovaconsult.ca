export type Engagement = 'building' | 'researching' | 'exploring';

export const ENGAGEMENT_LABEL: Record<Engagement, string> = {
  building: 'Building',
  researching: 'Researching',
  exploring: 'Exploring with partners'
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
    line: 'Agents that work inside business records under human approval, with every action logged and reversible.',
    evidence: 'AICRMIUS, Workflow OS, FinMozg'
  },
  {
    name: 'Enterprise software',
    engagement: 'building',
    line: 'Operations back offices, registers and portals that replace spreadsheets and inbox workflows.',
    evidence: 'UAFest ecosystem'
  },
  {
    name: 'Community & public platforms',
    engagement: 'building',
    line: 'Public-facing services where privacy, accessibility and trust matter as much as features.',
    evidence: 'FoundWall, UAFest'
  },
  {
    name: 'AgriTech',
    engagement: 'researching',
    line: 'Records and reporting for mixed fleets of agricultural robots, built for dealers and growers.',
    evidence: 'OpenField'
  },
  {
    name: 'Data & knowledge systems',
    engagement: 'researching',
    line: 'Turning documents, registers and operational history into searchable, auditable knowledge.'
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
    line: 'Software and AI for defence-adjacent programs, scoped with Canadian and allied partners.'
  }
];
