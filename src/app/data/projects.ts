import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    name: 'SMSYA WebAdmin',
    challenge: 'Necesidad de gestionar campañas, envíos y reportes de mensajería masiva desde una interfaz centralizada y en tiempo real.',
    solution: 'Panel web de gestión completa: campañas, envíos, reportes y administración de la plataforma, conectado directo a la base vía API REST.',
    impact: 'Operación de mensajería centralizada, con reportes en tiempo real y autonomía total del equipo comercial.',
    techs: ['Angular', 'TypeScript', 'PostgREST']
  },
  {
    name: 'SMSYA Jasmin Gateway',
    challenge: 'Routing y entrega de SMS de alto volumen con disponibilidad continua.',
    solution: 'Gateway SMS basado en Jasmin, dockerizado, con routing configurable y monitoreo de entrega.',
    impact: 'Capacidad de procesamiento masivo con infraestructura estable y desplegable en minutos.',
    techs: ['Python', 'Jasmin', 'Docker']
  },
  {
    name: 'MCP Server SMSYA',
    challenge: 'Soporte al cliente y monitoreo operacional consumían tiempo del equipo técnico en tareas repetitivas.',
    solution: 'Servidor Model Context Protocol que integra LLMs con la plataforma: soporte al cliente, administración del gateway, monitoreo y auto-remediación de incidentes.',
    impact: 'Respuesta a incidentes en segundos y menos intervención manual en operación diaria.',
    techs: ['Python', 'MCP']
  },
  {
    name: 'SMSYA Database',
    challenge: 'Los cambios en la base de datos de la plataforma se aplicaban manualmente, sin control de versiones ni trazabilidad.',
    solution: 'Herramienta de migraciones versionadas sobre PostgreSQL, expuesta vía PostgREST e integrada en pipeline Jenkins.',
    impact: 'Cambios de esquema controlados, auditables y desplegados automáticamente.',
    techs: ['PostgreSQL', 'PostgREST', 'Jenkins']
  },
  {
    name: 'SMSYA Gateway JWT',
    challenge: 'La API HTTP de Jasmin quedaba expuesta: se requería acceso autenticado y funciones adicionales de monitoreo.',
    solution: 'API Gateway con autenticación JWT actuando como proxy inverso hacia Jasmin, con endpoints de balance, health checks y mensajería multicanal (Telegram, WhatsApp, Email).',
    impact: 'API segura con acceso controlado y visibilidad operacional en un solo punto de entrada.',
    techs: ['FastAPI', 'JWT', 'Jasmin', 'Docker']
  },
  {
    name: 'Yanomapp WebAdmin',
    challenge: 'Gestión operativa de plataforma móvil sin herramienta administrativa centralizada.',
    solution: 'Panel administrativo web para gestión de usuarios, contenido y operación de la plataforma.',
    impact: 'Administración autónoma de la plataforma sin depender de desarrollo para cada ajuste.',
    techs: ['Angular', 'TypeScript']
  },
  {
    name: 'Athenium WebAdmin',
    challenge: 'Plataforma de mercados criptoactivos requería dashboards y gestión en tiempo real para operación crítica.',
    solution: 'Aplicación web administrativa con dashboards en vivo y gestión operativa conectada a PostgREST.',
    impact: 'Visibilidad operacional en tiempo real para decisiones rápidas.',
    techs: ['Angular', 'TypeScript', 'PostgREST']
  },
  {
    name: 'GTR Administrativo',
    challenge: 'Gestión de flotas dispersa en hojas de cálculo y sistemas aislados.',
    solution: 'Sistema administrativo web unificado: administración, certificaciones y canales, con backend Node.js y PostgreSQL.',
    impact: 'Gestión de flota centralizada con datos consistentes y procesos estandarizados.',
    techs: ['Angular', 'Node.js', 'PostgreSQL']
  },
  {
    name: 'GTR Seguimiento API',
    challenge: 'Trazabilidad operativa fragmentada sin API de integración para terceros.',
    solution: 'API REST Node.js para seguimiento y trazabilidad operativa, dockerizada y con PostgreSQL.',
    impact: 'Integración directa de clientes y sistemas externos con trazabilidad completa.',
    techs: ['Node.js', 'PostgreSQL', 'Docker']
  },
  {
    name: 'Aplicación de Movilidad Lynnk One',
    challenge: 'Empresa de transporte colombiana necesitaba plataforma de movilidad estilo Uber para pasajeros y conductores.',
    solution: 'Aplicación móvil híbrida con Ionic: pedidos, seguimiento y gestión de viajes en tiempo real.',
    impact: 'Plataforma de movilidad operativa con modelo de negocio validado en producción.',
    techs: ['Ionic', 'MySQL']
  }
];
