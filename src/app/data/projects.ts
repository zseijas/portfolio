import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    name: 'SMSYA WebAdmin',
    description: 'Panel web para plataforma de mensajería SMS masiva: gestión de campañas, envíos y reportes.',
    techs: ['Angular', 'TypeScript', 'Node.js', 'MySQL']
  },
  {
    name: 'SMSYA Jasmin Gateway',
    description: 'Gateway SMS basado en Jasmin, routing y entrega de alto volumen.',
    techs: ['Python', 'Jasmin', 'Docker']
  },
  {
    name: 'Yanomapp WebAdmin',
    description: 'Panel administrativo web para gestión operativa de plataforma móvil.',
    techs: ['Angular', 'TypeScript']
  },
  {
    name: 'Athenium WebAdmin',
    description: 'Aplicación web administrativa con dashboards y gestión en tiempo real para plataforma de mercados.',
    techs: ['Angular', 'TypeScript', 'PostgreSQL']
  },
  {
    name: 'GTR Administrativo',
    description: 'Sistema administrativo web para gestión de flotas: administración, certificaciones y canales.',
    techs: ['Angular', 'Node.js', 'PostgreSQL']
  },
  {
    name: 'GTR Seguimiento API',
    description: 'API REST Node.js para seguimiento y trazabilidad operativa.',
    techs: ['Node.js', 'PostgreSQL', 'Docker']
  }
];
