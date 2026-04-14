import { Service } from '../models/service.model';

export const SERVICES_DATA: Service[] = [
  {
    id: 'diseno-y-desarrollo-web',
    title: 'Diseño y desarrollo web',
    description:
      'Arquitecturas web de alto rendimiento enfocadas en velocidad, seguridad y experiencias digitales de calidad.',
    shortDescription: 'Arquitecturas web de alto rendimiento',
    image: 'assets/diseno-y-desarrollo-web.jpg',
    icon: 'language',
    features: [
      {
        id: 'f1',
        title: 'Diseño Responsive',
        description: 'Enfoque mobile-first para visualización óptima en todos los dispositivos',
      },
      {
        id: 'f2',
        title: 'Optimización SEO',
        description: 'Desarrollado con mejores prácticas de optimización para motores de búsqueda',
      },
      {
        id: 'f3',
        title: 'Rendimiento Rápido',
        description: 'Código optimizado para tiempos de carga ultrarrápidos',
      },
    ],
    testimonials: [
      {
        id: 't1',
        clientName: 'Carlos Martínez',
        comment:
          'Excelente trabajo. El equipo entregó un sitio web impresionante que superó nuestras expectativas.',
        rating: 5,
      },
      {
        id: 't2',
        clientName: 'Ana García',
        comment: 'Servicio profesional con gran atención al detalle. ¡Altamente recomendado!',
        rating: 5,
      },
    ],
  },
  {
    id: 'asesoria-ui-ux',
    title: 'Asesoría UX/UI',
    description:
      'Estrategias centradas en el usuario que reducen la fricción y potencian la experiencia digital de tus productos.',
    shortDescription: 'Estrategias centradas en el usuario',
    image: 'assets/asesoria-ui-ux.jpg',
    icon: 'brush',
    features: [
      {
        id: 'f4',
        title: 'Investigación de Usuarios',
        description: 'Decisiones de diseño basadas en datos del comportamiento del usuario',
      },
      {
        id: 'f5',
        title: 'Prototipado Interactivo',
        description: 'Prototipos interactivos para probar y validar ideas',
      },
      {
        id: 'f6',
        title: 'Sistemas de Diseño',
        description: 'Bibliotecas de diseño consistentes y escalables',
      },
    ],
    testimonials: [
      {
        id: 't3',
        clientName: 'Miguel Rodríguez',
        comment: 'El nuevo diseño aumentó nuestra tasa de conversión en 40%. ¡Trabajo increíble!',
        rating: 5,
      },
    ],
  },
  {
    id: 'saas-software-as-a-service',
    title: 'SaaS (Software as a Service)',
    description:
      'Aplicaciones escalables en la nube diseñadas para resolver problemas complejos con eficiencia y elegancia.',
    shortDescription: 'Aplicaciones escalables en la nube',
    image: 'assets/saas-software-as-a-service.jpg',
    icon: 'cloud',
    features: [
      {
        id: 'f7',
        title: 'Infraestructura Escalable',
        description: 'Escala recursos fácilmente según la demanda',
      },
      {
        id: 'f8',
        title: 'Rentable',
        description: 'Paga solo por lo que usas con asignación optimizada de recursos',
      },
      {
        id: 'f9',
        title: 'Seguro y Confiable',
        description: 'Seguridad de nivel empresarial y garantía de 99.9% de tiempo de actividad',
      },
    ],
    testimonials: [
      {
        id: 't4',
        clientName: 'Laura Sánchez',
        comment:
          'La migración a la nube fue perfecta. Nuestros costos disminuyeron mientras mejoraba el rendimiento.',
        rating: 5,
      },
    ],
  },
  {
    id: 'paas-platform-as-a-service',
    title: 'PaaS (Platform as a Service)',
    description:
      'Plataformas robustas que permiten desarrollar y escalar aplicaciones sin preocuparte por la infraestructura.',
    shortDescription: 'Plataformas robustas de desarrollo',
    image: 'assets/paas-platform-as-a-service.jpg',
    icon: 'settings',
    features: [
      {
        id: 'f10',
        title: 'Desarrollo Ágil',
        description: 'Herramientas integradas para desarrollo rápido y eficiente',
      },
      {
        id: 'f11',
        title: 'Gestión Automatizada',
        description: 'Gestión automática de la infraestructura y despliegues',
      },
      {
        id: 'f12',
        title: 'Integración Continua',
        description: 'Pipelines CI/CD integrados para entregas continuas',
      },
    ],
    testimonials: [
      {
        id: 't5',
        clientName: 'Pedro López',
        comment:
          'Nuestra plataforma de desarrollo nos permitió lanzar productos 3 veces más rápido.',
        rating: 5,
      },
    ],
  },
  {
    id: 'marketing-digital',
    title: 'Marketing digital',
    description:
      'Estrategias digitales orientadas a resultados que aumentan tu visibilidad, tráfico y conversión.',
    shortDescription: 'Estrategias digitales orientadas a resultados',
    image: 'assets/marketing-digital.jpg',
    icon: 'trending_up',
    features: [
      {
        id: 'f13',
        title: 'SEO y SEM',
        description: 'Optimización de motores de búsqueda y campañas publicitarias efectivas',
      },
      {
        id: 'f14',
        title: 'Redes Sociales',
        description: 'Gestión integral de redes sociales para maximizar el alcance',
      },
      {
        id: 'f15',
        title: 'Análisis de Datos',
        description: 'Métricas detalladas y análisis para optimizar campañas en tiempo real',
      },
    ],
    testimonials: [
      {
        id: 't6',
        clientName: 'María Fernández',
        comment: 'Las estrategias de marketing digital triplicaron nuestro tráfico web en 6 meses.',
        rating: 5,
      },
    ],
  },
  {
    id: 'consultoria-tecnologica',
    title: 'Consultoría Tecnológica',
    description:
      'Asesoramiento experto para transformar tu negocio con estrategias tecnológicas innovadoras y escalables.',
    shortDescription: 'Asesoramiento experto en tecnología',
    image: 'assets/consultoria-tecnologica.jpg',
    icon: 'business_center',
    features: [
      {
        id: 'f16',
        title: 'Auditoría Tecnológica',
        description: 'Evaluación completa de tu infraestructura actual y recomendaciones de mejora',
      },
      {
        id: 'f17',
        title: 'Roadmap Digital',
        description: 'Plan estratégico personalizado para la transformación digital de tu empresa',
      },
      {
        id: 'f18',
        title: 'Gestión de Cambios',
        description: 'Soporte integral en la implementación de nuevas tecnologías',
      },
    ],
    testimonials: [
      {
        id: 't7',
        clientName: 'Roberto González',
        comment:
          'La consultoría tecnológica nos ayudó a modernizar nuestros procesos y reducir costos operativos en un 30%.',
        rating: 5,
      },
    ],
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad',
    description:
      'Protección integral de tus activos digitales con soluciones avanzadas de seguridad y monitoreo continuo.',
    shortDescription: 'Protección integral de activos digitales',
    image: 'assets/ciberseguridad.jpg',
    icon: 'security',
    features: [
      {
        id: 'f19',
        title: 'Auditoría de Seguridad',
        description: 'Análisis exhaustivo de vulnerabilidades y riesgos en tu infraestructura',
      },
      {
        id: 'f20',
        title: 'Monitoreo 24/7',
        description: 'Vigilancia continua de amenazas y respuesta inmediata a incidentes',
      },
      {
        id: 'f21',
        title: 'Cumplimiento Normativo',
        description: 'Aseguramiento de cumplimiento con regulaciones de seguridad y privacidad',
      },
    ],
    testimonials: [
      {
        id: 't8',
        clientName: 'Carmen Torres',
        comment:
          'La implementación de medidas de ciberseguridad nos protegió de varios ataques. Excelente inversión.',
        rating: 5,
      },
    ],
  },
  {
    id: 'analisis-de-datos',
    title: 'Análisis de Datos',
    description:
      'Transforma tus datos en insights valiosos con soluciones avanzadas de analítica y business intelligence.',
    shortDescription: 'Datos transformados en insights valiosos',
    image: 'assets/analisis-de-datos.jpg',
    icon: 'analytics',
    features: [
      {
        id: 'f22',
        title: 'Business Intelligence',
        description: 'Dashboards interactivos y reportes automatizados para toma de decisiones',
      },
      {
        id: 'f23',
        title: 'Machine Learning',
        description: 'Modelos predictivos para anticipar tendencias y comportamientos',
      },
      {
        id: 'f24',
        title: 'Integración de Datos',
        description: 'Unificación de múltiples fuentes de datos en una plataforma centralizada',
      },
    ],
    testimonials: [
      {
        id: 't9',
        clientName: 'Diego Mendoza',
        comment:
          'El análisis de datos nos permitió identificar oportunidades de mercado que estábamos pasando por alto.',
        rating: 5,
      },
    ],
  },
];
