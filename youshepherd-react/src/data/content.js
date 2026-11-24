export const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/funcionalidades', label: 'Funcionalidades' },
  { to: '/precios', label: 'Precios' },
  { to: '/nosotros', label: 'Nosotros' },
];

export const benefits = [
  { title: 'Orden', icon: '/img/icono-orden.png', text: 'Cada persona, familia y ministerio en un solo registro, con roles y permisos para que cada líder vea solo lo que le corresponde.' },
  { title: 'Claridad', icon: '/img/icono-claridad.png', text: 'Ofrendas e ingresos registrados con reportes fáciles de leer, para rendir cuentas con transparencia.' },
  { title: 'Cercanía', icon: '/img/icono-cercania.png', text: 'Comunica eventos, reuniones y avisos a tu congregación y mantén informado a cada grupo.' },
];

export const testimonials = [
  { text: 'Ten una visión clara de tu congregación y de cómo está creciendo, sin hojas de cálculo dispersas.', author: 'Para pastores' },
  { text: 'Registra ingresos y egresos y genera reportes para presentar al liderazgo sin rehacer cuentas a mano.', author: 'Para tesoreros' },
  { text: 'Conoce a tus miembros, su asistencia y sus estados, y comunica los avisos de tu grupo en un solo lugar.', author: 'Para líderes de grupo' },
];

export const features = [
  { title: 'Miembros y grupos', image: '/img/func-miembros-grupos.png', text: 'Registra personas, familias, ministerios y asistencia. Define los estados de membresía propios de tu iglesia y controla quién accede a qué mediante roles y permisos.' },
  { title: 'Finanzas y ofrendas', image: '/img/func-finanzas-ofrendas.png', text: 'Control de ingresos, egresos y ofrendas con reportes claros para rendir cuentas ante el liderazgo y la congregación.' },
  { title: 'Comunicación y eventos', image: '/img/func-comunicacion-eventos.png', text: 'Calendario de actividades, reuniones y avisos para toda la congregación.' },
];

export const plans = [
  { name: 'Básico', price: '$29.000', limit: 'Hasta 100 miembros', features: ['Miembros y grupos', 'Calendario de eventos'], recommended: false },
  { name: 'Crecimiento', price: '$59.000', limit: 'Hasta 500 miembros', features: ['Finanzas y reportes', 'Roles y permisos'], recommended: true },
  { name: 'Completo', price: '$99.000', limit: 'Sin límite de miembros', features: ['Todas las funciones', 'Soporte prioritario'], recommended: false },
];

export const faqs = [
  { q: '¿Necesito conocimientos técnicos?', a: 'No. YouShepherd está pensado para pastores y líderes sin experiencia técnica, con pantallas simples y claras.' },
  { q: '¿Mis datos están seguros?', a: 'La información de cada iglesia está separada de la de las demás, el acceso se controla con roles y permisos, y no existe registro público: las cuentas las crea la propia iglesia.' },
  { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes subir o bajar de plan cuando tu congregación lo necesite.' },
];

export const team = [
  { name: 'Gabriel Andrés Parra Rocha', role: 'Fundador y desarrollador', photo: '/img/equipo-foto-1.png' },
];

export const values = [
  { title: 'Servicio', text: 'Existimos para apoyar la labor de la iglesia, no para complicarla.' },
  { title: 'Transparencia', text: 'Cuentas claras y accesos bien definidos para generar confianza en la congregación.' },
  { title: 'Sencillez', text: 'Herramientas fáciles de usar, sin necesidad de ser experto en tecnología.' },
];
