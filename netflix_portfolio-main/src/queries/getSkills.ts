// queries/getSkills.ts
import { Skill } from '../types';
import { skillsData } from '../data/skills';

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
