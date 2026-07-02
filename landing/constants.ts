export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Producto', href: '#producto' },
  { label: 'Nuestra IA', href: '#ia' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#demo' },
];

export const PRODUCT_TABS = [
  {
    id: 'comunicaciones',
    label: 'Comunicaciones',
    headline: 'Centro de comunicaciones y mensajería',
    description:
      'Mensajería con personal del colegio y familias por grado y sección, con comunicados masivos segmentados y clasificados automáticamente.',
    bullets: [
      'Mensajería con personal del colegio y familias por grado y sección',
      'Comunicados masivos segmentados por nivel, grado y sección',
      'Clasificación de mensajes por comunicado, agenda, reunión, evento e interno',
      'Mensajes categorizados aparecen automáticamente en el calendario institucional, sin pasos extras',
    ],
  },
  {
    id: 'calendario',
    label: 'Calendario',
    headline: 'Calendario institucional',
    description:
      'Agenda y notifica las fechas relevantes para la institución en una vista unificada, visible para el colegio y las familias.',
    bullets: [
      'Vista unificada de comunicados, agenda, reuniones, eventos, avisos internos y cobranza',
      'Visible para el colegio y las familias',
    ],
  },
  {
    id: 'atencion-familiar',
    label: 'Atención familiar',
    headline: 'Resolución de casos de familias',
    description:
      'Sistema de tickets para resolver consultas de familias, con bandeja personal organizada por estado para cada profesor o área.',
    bullets: [
      'Sistema de tickets para resolver consultas',
      'Filtros por categoría, prioridad, fecha',
      'Bandeja personal para cada profesor o área, organizada en Asignados, En Progreso y Cerrados',
    ],
  },
  {
    id: 'aula',
    label: 'Aula',
    headline: 'Listado de aulas por nivel, grado y sección',
    description:
      'Visualiza cada aula con su horario, estudiantes, notas de conducta y asistencia desde un mismo lugar.',
    bullets: [
      'Vista por grado, sección o docente',
      'Horario semanal visual por aula',
      'Visualización de estudiantes, notas de conducta y asistencia',
    ],
  },
  {
    id: 'personal',
    label: 'Personal',
    headline: 'Directorio del personal del colegio',
    description:
      'Directorio completo por área o función, con datos de contacto, rol y formación de cada persona.',
    bullets: [
      'Directorio completo por área o función (docentes, tutor o administrativo)',
      'Datos de contacto y rol de cada persona',
      'Ficha de experiencia relevante y formación académica por personal',
    ],
  },
  {
    id: 'estudiantes',
    label: 'Estudiantes',
    headline: 'El perfil completo de cada estudiante',
    description:
      'Toda la información del estudiante en una sola ficha, con búsqueda instantánea por DNI, nombre, nivel, grado o sección.',
    bullets: [
      'Información general, académica, financiera, horario, calificaciones, asistencia, conducta, psicología y tópico por ficha',
      'Búsqueda por DNI, nombre, nivel, grado o sección',
    ],
  },
  {
    id: 'gestion-academica',
    label: 'Gestión Académica',
    headline: 'Administración de áreas, calendarización y asignación docente',
    description:
      'Configura la apertura y cierre de año, asigna profesores y mantén calificaciones y reportes de rendimiento en tiempo real.',
    bullets: [
      'Configuración de apertura y cierre de año, asignación de profesores, calendarización y libreta de notas',
      'Áreas, competencias, capacidades y desempeños alineados al Ministerio de Educación, reorganizables para el colegio',
      'Calificaciones y reportes de rendimiento en tiempo real',
      'Horarios y asistencia conectados al mismo sistema',
    ],
  },
  {
    id: 'gestion-formativa',
    label: 'Gestión Formativa',
    headline: 'Configuración de criterios de conducta y participación de padres',
    description:
      'Define criterios formativos por nivel o sección y da seguimiento a la participación de las familias en el proceso.',
    bullets: [
      'Criterios y subcriterios configurables por nivel o sección',
      'Seguimiento de la participación de las familias en el proceso formativo',
      'Asignación de tutores por aula',
    ],
  },
  {
    id: 'cursos',
    label: 'Cursos',
    headline: 'Gestiona y visualiza los cursos del colegio',
    description:
      'Estructura completa alineada al Ministerio, con IA que sugiere comentarios de justificación por estudiante.',
    bullets: [
      'Estructura completa: área, competencia, capacidad, desempeño, con pesos configurables para calcular notas automáticamente',
      'Cuentan con IA para sugerir comentarios de justificación para cada estudiante, basados en su historial y en los lineamientos del Ministerio',
      'Asignaciones y planes de estudio organizados por sección',
    ],
  },
  {
    id: 'conducta',
    label: 'Conducta',
    headline: 'Registro y seguimiento de conducta por aula',
    description:
      'Evalúa la convivencia y las actividades del aula con un promedio general de tutoría, y observaciones individuales por estudiante.',
    bullets: [
      'Evaluación por normas de convivencia, más actividades del aula y del colegio, y un promedio general de tutoría por estudiante',
      'Observación individual por estudiante para explicar el contexto de las notas',
      'Cierre por trimestres con plazo definido, el tutor puede extender el plazo si es necesario',
    ],
  },
  {
    id: 'asistencia',
    label: 'Asistencia',
    headline: 'Gestión y seguimiento de asistencia estudiantil',
    description:
      'Estados claros por estudiante con alertas automáticas y un tablero de control con el porcentaje general del colegio.',
    bullets: [
      'Estados claros por estudiante: presente, tardanza, ausencia',
      'Alertas automáticas de rachas justificadas de inasistencia por estudiante',
      'Tablero de control que permite visualizar qué aulas han cerrado su asistencia diaria y porcentajes generales de asistencia por fecha del colegio',
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    headline: 'Fichas de observaciones de salud por estudiante',
    description:
      'Ficha médica completa y casos psicológicos con seguimiento hasta el cierre, con contacto de emergencia a la mano.',
    bullets: [
      'Ficha médica completa: grupo sanguíneo, seguro de accidentes, clínica o seguro privado, alergias, vacunas, medicación crónica y patologías previas',
      'Métricas básicas con historial (peso, talla, IMC) y contacto de emergencia a la mano',
      'Casos psicológicos con motivo de consulta, resumen clínico, sesiones registradas y seguimiento hasta el cierre del caso',
    ],
  },
  {
    id: 'financiero',
    label: 'Financiero',
    headline: 'Manejo de cobranzas, morosidad, becas y registro de pagos',
    description:
      'Detecta la morosidad por antigüedad de deuda y proyecta ingresos y estado financiero en tiempo real.',
    bullets: [
      'Detección de morosidad con nivel de antigüedad de deuda por estudiante',
      'Realización de pagos desde la plataforma',
      'Proyección de ingresos y estado financiero en tiempo real',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Compito por matrícula con otros colegios en mi área. ¿MySchool puede cambiar cómo las familias perciben al colegio?',
    answer:
      'La comunicación y la transparencia pesan en la decisión de una familia de quedarse o no en un colegio. Cuando los padres ven asistencia, pagos y avance académico claros y a tiempo, sin tener que ir a preguntar a la dirección, hacen nota de ello, del tiempo recuperado, terminando de reflejarse en la renovación de matrícula.',
  },
  {
    question: 'No todos los profesores se sienten igual de cómodos con la tecnología. ¿Eso va a ser un problema?',
    answer:
      'La plataforma está pensada para ser intuitiva desde el primer uso, pero esto no es sólo una promesa. El equipo de MySchool acompaña directamente a los profesores que lo necesiten, resolviendo dudas y ajustando lo que haga falta, para que el nivel de comodidad con la tecnología de cada uno no sea una barrera.',
  },
  {
    question: '¿Puedo personalizar la plataforma a la forma que trabaja mi colegio?',
    answer:
      'Sí. MySchool no solo cumple con los estándares y estructura que exige el ministerio, también está construido para adaptar los módulos a la forma de operar de cada colegio.',
  },
  {
    question: '¿Todos los módulos están integrados entre sí?',
    answer:
      'Sí, comparten la misma base de información. Por ejemplo, la asistencia registrada en la libreta de notas aparece igualmente en el perfil del estudiante y en los reportes para familias, sin que alguien tenga que pasarlo de un sistema a otro.',
  },
  {
    question: '¿Es una plataforma web o se requiere de instalación?',
    answer:
      'Es 100% web, una gran ventaja, evitando instalaciones pesadas, actualizaciones manuales por computadora o depender de máquinas del colegio. Se accede desde cualquier navegador, en cualquier equipo, así que el equipo directivo puede revisar todo incluso desde el celular, sin estar atado a una oficina.',
  },
];
