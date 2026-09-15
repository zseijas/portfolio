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
  },
  {
    name: 'MCP Server SMSya',
    description: 'Servidor Model Context Protocol que integra LLMs con la plataforma SMSya para soporte al cliente, administración del gateway SMS, monitoreo operacional y auto-remediación de incidentes.',
    techs: ['Python', 'MCP']
  },
  {
    name: 'smsya-database',
    description: 'Herramienta para mantener los cambios en la base de datos de la plataforma SMSya.',
    techs: ['PostgreSQL', 'PostgREST', 'Jenkins']
  },
  {
    name: 'SMSYa Gateway JWT',
    description: 'API Gateway seguro con autenticación JWT para Jasmin SMS Gateway. Proxy inverso autenticado hacia la API HTTP de Jasmin con endpoints adicionales para balance, health checks y mensajería multicanal (Telegram, WhatsApp, Email).',
    techs: ['FastAPI', 'JWT', 'Jasmin', 'Docker']
  }
];
