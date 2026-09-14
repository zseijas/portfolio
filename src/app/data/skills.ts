import { SkillCategory } from './skill.model';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Bootstrap', 'Angular Material']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Laravel', 'PHP', 'Python']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase']
  }
];
