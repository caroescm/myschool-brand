export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Producto', href: '#producto' },
  { label: 'Nuestra IA', href: '#ia' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#demo' },
];

export const PRODUCT_TABS = [
  // Gestión Académica
  {
    id: 'cursos',
    label: 'Cursos',
    headline: 'Planes de estudio organizados por sección',
    description:
      'Gestiona materias, asignaciones y contenidos por sección desde un solo lugar, con visibilidad completa para docentes y coordinadores.',
    bullets: [
      'Planificación curricular por sección y nivel',
      'Asignación de tareas y fechas de entrega',
      'Seguimiento de avance por materia',
      'Acceso docente desde cualquier dispositivo',
    ],
  },
  {
    id: 'calificaciones',
    label: 'Calificaciones',
    headline: 'Rendimiento académico en tiempo real',
    description:
      'Registra y consulta calificaciones al instante. Los reportes se actualizan solos y las familias acceden a los resultados apenas se publican.',
    bullets: [
      'Libro de notas digital por materia',
      'Reportes automáticos por periodo',
      'Historial académico completo del alumno',
      'Exporta boletines en PDF con un clic',
    ],
  },
  {
    id: 'horarios',
    label: 'Horarios',
    headline: 'Cuadros de horario para aulas y docentes',
    description:
      'Crea y publica horarios por sección y docente. Todos acceden a su horario actualizado desde la app, sin papel ni confusión.',
    bullets: [
      'Horarios por aula, sección y docente',
      'Detección automática de conflictos',
      'Publicación instantánea para familias',
      'Modificaciones en tiempo real',
    ],
  },
  {
    id: 'asistencia',
    label: 'Asistencia',
    headline: 'Control de asistencia y reportes para familias',
    description:
      'Registra la asistencia diaria por sección en segundos. Los padres reciben alertas automáticas y acceden al historial desde la app.',
    bullets: [
      'Registro por sección y periodo',
      'Alertas automáticas a familias',
      'Reportes históricos exportables',
      'Vista consolidada por alumno',
    ],
  },
  // Finanzas
  {
    id: 'cobranzas',
    label: 'Cobranzas',
    headline: 'Cuotas y mensualidades sin trabajo manual',
    description:
      'Configura los calendarios de pago y deja que MySchool envíe los recordatorios automáticos. Menos llamadas, más pagos a tiempo.',
    bullets: [
      'Calendario de cuotas y vencimientos',
      'Recordatorios automáticos por WhatsApp o email',
      'Estados de cuenta por familia',
      'Historial completo de cobros',
    ],
  },
  {
    id: 'morosidad',
    label: 'Morosidad',
    headline: 'Detecta y gestiona la morosidad por nivel',
    description:
      'Identifica en segundos qué familias tienen pagos pendientes y actúa antes de que la deuda crezca, con seguimiento por nivel y sección.',
    bullets: [
      'Dashboard de morosidad por nivel',
      'Alertas tempranas de deuda',
      'Gestión de acuerdos de pago',
      'Reportes para dirección y administración',
    ],
  },
  {
    id: 'pagos',
    label: 'Pagos',
    headline: 'Registro y conciliación de pagos centralizado',
    description:
      'Registra cada pago recibido y concílialo con las cuotas pendientes. Sin planillas de Excel, sin errores de doble registro.',
    bullets: [
      'Registro de pagos en efectivo, transferencia y otros',
      'Conciliación automática con cuotas',
      'Comprobantes digitales para familias',
      'Cierres de caja y reportes diarios',
    ],
  },
  // Comunicación
  {
    id: 'comunicaciones',
    label: 'Comunicaciones',
    headline: 'Comunicación directa con cada familia',
    description:
      'Envía mensajes individuales o grupales a familias por sección, nivel o toda la institución — desde una sola bandeja de entrada.',
    bullets: [
      'Chat 1:1 y grupal con padres y tutores',
      'Comunicados por sección o nivel',
      'Historial completo de conversaciones',
      'Acceso desde web y app móvil',
    ],
  },
  {
    id: 'notificaciones',
    label: 'Notificaciones',
    headline: 'Avisos y circulares que llegan de verdad',
    description:
      'Publica circulares, avisos urgentes o comunicados institucionales y asegúrate de que cada familia los reciba y los confirme.',
    bullets: [
      'Notificaciones push a la app familiar',
      'Confirmación de lectura por familia',
      'Circulares por nivel o institución',
      'Archivo de comunicados publicados',
    ],
  },
  {
    id: 'buzon',
    label: 'Buzón',
    headline: 'Atención familiar con seguimiento de tickets',
    description:
      'Las familias escriben sus consultas y el equipo del colegio responde con orden. Cada solicitud queda registrada hasta su resolución.',
    bullets: [
      'Bandeja centralizada de consultas familiares',
      'Tickets con estado y responsable asignado',
      'Tiempo de respuesta promedio visible',
      'Historial por familia',
    ],
  },
  // Vida Estudiantil
  {
    id: 'actividades',
    label: 'Actividades',
    headline: 'Eventos y extracurriculares en un calendario',
    description:
      'Organiza y comunica actividades, salidas y eventos del colegio. Las familias ven todo en su calendario y confirman participación.',
    bullets: [
      'Calendario de actividades institucional',
      'Inscripción y confirmación de asistencia',
      'Recordatorios automáticos a familias',
      'Gestión de permisos y autorizaciones',
    ],
  },
  {
    id: 'conducta',
    label: 'Conducta',
    headline: 'Registro de conducta con seguimiento familiar',
    description:
      'Documenta incidentes, reconocimientos y acuerdos de convivencia. Las familias son notificadas y el historial queda vinculado al perfil del alumno.',
    bullets: [
      'Registro de incidentes y reconocimientos',
      'Notificación inmediata a la familia',
      'Historial por alumno y periodo',
      'Seguimiento de acuerdos de convivencia',
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    headline: 'Fichas de salud y alertas para el equipo',
    description:
      'Accede a las fichas de salud de cada alumno desde cualquier dispositivo. El equipo recibe alertas sobre condiciones relevantes antes de cada actividad.',
    bullets: [
      'Ficha médica completa por alumno',
      'Alertas de alergias y condiciones crónicas',
      'Registro de incidentes de salud en el colegio',
      'Acceso rápido para el equipo de enfermería',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: '¿Cómo puede MySchool ayudar a mi colegio a crecer?',
    answer:
      'MySchool centraliza todas las operaciones del colegio — desde la asistencia hasta las comunicaciones con padres — en una sola plataforma, permitiendo que tu equipo se enfoque en lo que más importa: la educación.',
  },
  {
    question: '¿Qué módulos incluye la plataforma MySchool?',
    answer:
      'La plataforma incluye gestión de estudiantes, comunicaciones con familias, control de asistencia, calendario escolar, boletines de notas, y herramientas de IA para docentes.',
  },
  {
    question: '¿Cómo funciona la implementación de IA en MySchool?',
    answer:
      'Nuestra IA ayuda a los docentes a redactar comentarios personalizados en los boletines, generar planes de clase y analizar el progreso de los estudiantes, ahorrando hasta 10 horas semanales.',
  },
  {
    question: '¿Cuánto tiempo toma implementar MySchool en un colegio?',
    answer:
      'La configuración inicial toma menos de una semana. Nuestro equipo te acompaña en cada paso, desde la migración de datos hasta la capacitación del personal.',
  },
  {
    question: '¿MySchool funciona para colegios de todos los tamaños?',
    answer:
      'Sí. Trabajamos con colegios desde 100 hasta más de 3,000 estudiantes. La plataforma se adapta al tamaño y estructura de cada institución.',
  },
];
