import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    name: 'SMSYA WebAdmin',
    challenge: 'La operación de mensajería masiva requería gestionar campañas, envíos y reportes desde herramientas dispersas, sin visibilidad en tiempo real.',
    solution: 'Desarrollé un panel web de gestión completa conectado directo a la base de datos vía API REST, centralizando campañas, envíos y reportes en una sola interfaz.',
    impact: 'Hoy el equipo comercial opera con autonomía total, con reportes en tiempo real y decisiones basadas en datos actualizados.',
    techs: ['Angular', 'TypeScript', 'PostgREST']
  },
  {
    name: 'SMSYA Jasmin Gateway',
    challenge: 'La plataforma necesitaba entregar SMS de alto volumen con disponibilidad continua y routing flexible según el destino.',
    solution: 'Implementé un gateway SMS basado en Jasmin, dockerizado y con routing configurable, listo para desplegar y escalar en cualquier entorno.',
    impact: 'La infraestructura soporta procesamiento masivo estable, desplegable en minutos y sin intervención manual.',
    techs: ['Python', 'Jasmin', 'Docker']
  },
  {
    name: 'MCP Server SMSYA',
    challenge: 'El soporte al cliente y el monitoreo operacional consumían horas del equipo técnico en tareas repetitivas y detección manual de incidentes.',
    solution: 'Construí un servidor Model Context Protocol que integra LLMs con la plataforma: atiende soporte al cliente, administra el gateway y auto-remedia incidentes.',
    impact: 'Los incidentes se detectan y responden en segundos, con intervención humana solo en casos críticos.',
    techs: ['Python', 'MCP']
  },
  {
    name: 'SMSYA Database',
    challenge: 'Los cambios en la base de datos se aplicaban manualmente, sin control de versiones ni trazabilidad sobre qué cambió y cuándo.',
    solution: 'Creé una herramienta de migraciones versionadas sobre PostgreSQL, expuesta vía PostgREST e integrada al pipeline de Jenkins.',
    impact: 'Cada cambio de esquema queda versionado, auditado y desplegado automáticamente con trazabilidad completa.',
    techs: ['PostgreSQL', 'PostgREST', 'Jenkins']
  },
  {
    name: 'SMSYA Gateway JWT',
    challenge: 'La API HTTP de Jasmin quedaba expuesta sin autenticación, y faltaban funciones de monitoreo y mensajería multicanal.',
    solution: 'Desarrollé un API Gateway con autenticación JWT como proxy inverso hacia Jasmin, sumando endpoints de balance, health checks y mensajería multicanal (Telegram, WhatsApp, Email).',
    impact: 'Un único punto de entrada seguro con acceso controlado y visibilidad operacional completa de la plataforma.',
    techs: ['FastAPI', 'JWT', 'Jasmin', 'Docker']
  },
  {
    name: 'Yanomapp WebAdmin',
    challenge: 'La plataforma móvil crecía sin herramienta administrativa: cada ajuste de usuarios o contenido requería pasar por desarrollo.',
    solution: 'Desarrollé un panel administrativo web para gestión de usuarios, contenido y operación de la plataforma.',
    impact: 'El equipo administra la plataforma de forma autónoma, sin dependencia técnica para operaciones del día a día.',
    techs: ['Angular', 'TypeScript']
  },
  {
    name: 'Athenium WebAdmin',
    challenge: 'La operación de un mercado de criptoactivos exigía dashboards en tiempo real y gestión crítica sin margen para latencia ni errores.',
    solution: 'Construí una aplicación web administrativa con dashboards en vivo y gestión operativa conectada directamente a PostgREST.',
    impact: 'El equipo de operación gana visibilidad total en tiempo real y toma decisiones en segundos, no en horas.',
    techs: ['Angular', 'TypeScript', 'PostgREST']
  },
  {
    name: 'GTR Administrativo',
    challenge: 'La gestión de flotas estaba dispersa en hojas de cálculo y sistemas aislados, generando inconsistencia y pérdida de información.',
    solution: 'Desarrollé un sistema administrativo web unificado con backend Node.js y PostgreSQL: administración, certificaciones y canales en un solo lugar.',
    impact: 'La gestión de flota quedó centralizada con datos consistentes, procesos estandarizados y cero pérdida de información.',
    techs: ['Angular', 'Node.js', 'PostgreSQL']
  },
  {
    name: 'GTR Seguimiento API',
    challenge: 'La trazabilidad operativa estaba fragmentada y no existía una API para que clientes y sistemas externos se integraran.',
    solution: 'Desarrollé una API REST en Node.js, dockerizada y respaldada por PostgreSQL, dedicada al seguimiento y trazabilidad operativa.',
    impact: 'Clientes y sistemas externos se integran directamente, con trazabilidad completa de cada operación.',
    techs: ['Node.js', 'PostgreSQL', 'Docker']
  },
  {
    name: 'Aplicación de Movilidad Lynnk One',
    challenge: 'Una empresa de transporte colombiana necesitaba lanzar su plataforma de movilidad estilo Uber sin construir desde cero toda la tecnología.',
    solution: 'Desarrollé una aplicación móvil híbrida con Ionic: pedidos, seguimiento en tiempo real y gestión completa de viajes entre pasajeros y conductores.',
    impact: 'La plataforma salió a producción con un modelo de negocio validado y operación activa en el mercado colombiano.',
    techs: ['Ionic', 'MySQL']
  }
];
