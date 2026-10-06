import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { visibleProjects, STATUS_LABEL } from '../data/projects';

/** /llms.txt — plain-text map of the site for language-model crawlers, built from the same data as the pages. */
export const GET: APIRoute = () => {
  const url = (path: string) => new URL(path, SITE.url).href;
  const lines = [
    `# ${SITE.name} (${SITE.legalName})`,
    '',
    `> Applied-innovation and technology company in ${SITE.city}, ${SITE.region}, ${SITE.country}. Federal corporation ${SITE.corporationNumber}, incorporated ${SITE.incorporated}. Researches, prototypes, builds and deploys applied AI and software. Contact: ${SITE.email}`,
    '',
    '## Capabilities',
    '',
    `- [AI Transformation](${url('/ai-transformation')}): map how work happens, score where automation pays, implement AI with governance and measure the result`,
    `- [Software & Products](${url('/software')}): custom software, internal platforms, SaaS and mobile products, from a working prototype to operation`,
    `- [Innovation & R&D](${url('/innovation')}): technology scouting, rapid prototypes and experiments, and commercialization`,
    `- [Partnerships](${url('/partnerships')}): co-development, applied R&D, commercialization, technology integration and pilot deployments`,
    '',
    '## Products and projects (status as published)',
    '',
    ...visibleProjects.map((p) => `- [${p.name}](${url(p.internal ?? `/projects/${p.slug}`)}): ${STATUS_LABEL[p.status]}. ${p.summary}`),
    '',
    '## Company',
    '',
    `- [About](${url('/about')}): ${SITE.legalName}, federal corporation ${SITE.corporationNumber}, ${SITE.city}`,
    `- [Contact](${url('/contact')}): ${SITE.email}`,
    ''
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
