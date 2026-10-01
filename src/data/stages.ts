// The stage line: one axis that every capability, project and partnership sits on.
export const STAGES = [
  { key: 'opportunity', label: 'Opportunity', line: 'Find the problem worth solving' },
  { key: 'research', label: 'Research', line: 'Test what is technically possible' },
  { key: 'prototype', label: 'Prototype', line: 'Build the smallest version that works' },
  { key: 'build', label: 'Build', line: 'Engineer it for daily use' },
  { key: 'deploy', label: 'Deploy', line: 'Put it in people’s hands' },
  { key: 'impact', label: 'Impact', line: 'Measure what changed' }
] as const;

export type StageIndex = 0 | 1 | 2 | 3 | 4 | 5;
/** Inclusive span on the stage line, e.g. [2, 4] = Prototype → Deploy. */
export type Span = readonly [StageIndex, StageIndex];
