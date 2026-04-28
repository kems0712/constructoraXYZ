import {
  FaHardHat,
  FaTools,
  FaBuilding,
  FaPaintRoller,
  FaDraftingCompass,
  FaTruckMoving,
} from 'react-icons/fa';

// ─── SERVICIOS ────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: 'Construcción Civil',
    description:
      'Ejecución integral de obras civiles residenciales, comerciales e industriales con los más altos estándares de calidad y seguridad.',
    icon: FaHardHat,
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 2,
    title: 'Remodelaciones',
    description:
      'Transformamos y renovamos espacios existentes, dándoles una nueva vida con diseños modernos y funcionales.',
    icon: FaPaintRoller,
    image:
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  },
  {
    id: 3,
    title: 'Obras Civiles',
    description:
      'Infraestructura vial, puentes, canales y obras de gran envergadura ejecutadas con precisión y experiencia.',
    icon: FaBuilding,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    id: 4,
    title: 'Acabados & Terminaciones',
    description:
      'Pisos, revestimientos, pintura y acabados de alta gama para darle el toque final perfecto a tu proyecto.',
    icon: FaTools,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 5,
    title: 'Diseño Arquitectónico',
    description:
      'Creamos planos y diseños personalizados que combinan estética, funcionalidad y normativas vigentes.',
    icon: FaDraftingCompass,
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 6,
    title: 'Movimiento de Tierras',
    description:
      'Excavaciones, rellenos y nivelaciones de terrenos con maquinaria pesada de última generación.',
    icon: FaTruckMoving,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
];

// ─── PROYECTOS ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Residencial Los Robles',
    slug: 'residencial-los-robles',
    shortDescription:
      'Complejo residencial de 24 viviendas unifamiliares con áreas verdes y zona recreativa.',
    fullDescription:
      'El proyecto Residencial Los Robles es un desarrollo habitacional de primer nivel que comprende 24 viviendas unifamiliares distribuidas en un terreno de 12,000 m². Cada vivienda cuenta con 3 habitaciones, 2 baños, sala-comedor, cocina integral, patio trasero y estacionamiento doble. El conjunto incluye áreas verdes comunitarias, parque infantil, salón de usos múltiples y seguridad perimetral las 24 horas. La construcción se realizó con bloques de concreto de alta resistencia, techos de losa aligerada y acabados premium en pisos de porcelanato y granito.',
    client: 'Inversiones Inmobiliarias del Sur S.A.',
    duration: '18 meses',
    completionDate: 'Marzo 2024',
    coverImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    ],
    technicalSpecs: [
      'Área total: 12,000 m²',
      'Estructura antisísmica de concreto armado',
      'Instalaciones eléctricas empotradas',
      'Sistema de agua caliente centralizado',
      'Pisos de porcelanato de 60x60 cm',
      'Ventanas de aluminio con vidrio templado',
    ],
  },
  {
    id: 2,
    title: 'Centro Comercial Plaza Dorada',
    slug: 'centro-comercial-plaza-dorada',
    shortDescription:
      'Construcción de centro comercial de 3 niveles con 45 locales comerciales y estacionamiento subterráneo.',
    fullDescription:
      'Plaza Dorada es un moderno centro comercial de 3 plantas que alberga 45 locales comerciales, un food court con capacidad para 200 personas, cine con 4 salas y un estacionamiento subterráneo para 180 vehículos. El diseño arquitectónico combina fachadas de vidrio templado con elementos de acero estructural, creando un espacio luminoso y contemporáneo. El sistema de climatización centralizado garantiza comfort en todas las áreas, y el sistema contra incendios cumple con todas las normativas vigentes.',
    client: 'Grupo Comercial Dorado C.A.',
    duration: '24 meses',
    completionDate: 'Noviembre 2023',
    coverImage:
      'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1528698827591-e625c32e4e1f?w=800&q=80',
      'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
    ],
    technicalSpecs: [
      'Área construida: 8,500 m²',
      'Estructura metálica de acero A36',
      'Fachada de muro cortina con vidrio templado',
      'Sistema HVAC centralizado',
      'Escaleras eléctricas y 3 ascensores',
      'Sistema contra incendios automatizado',
    ],
  },
  {
    id: 3,
    title: 'Edificio Corporativo Torre Azul',
    slug: 'edificio-corporativo-torre-azul',
    shortDescription:
      'Edificio de oficinas de 12 pisos con diseño sostenible y certificación LEED.',
    fullDescription:
      'Torre Azul es un edificio corporativo de 12 pisos diseñado bajo estándares de construcción sostenible y en proceso de certificación LEED Silver. Cuenta con 48 oficinas modulares, 3 salas de conferencias, lobby de doble altura con acabados en mármol, y una terraza verde en el último piso. El edificio incorpora paneles solares, sistema de recolección de aguas lluvias, iluminación LED con sensores de presencia y vidrios de control solar que reducen el consumo energético en un 35%.',
    client: 'Corporación Empresarial del Norte',
    duration: '30 meses',
    completionDate: 'Julio 2024',
    coverImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
    ],
    technicalSpecs: [
      'Área total: 15,000 m²',
      '12 pisos + 2 sótanos',
      'Estructura de concreto postensado',
      'Paneles solares fotovoltaicos (120 kW)',
      'Sistema de aguas grises recicladas',
      'Ascensores de alta velocidad Otis',
    ],
  },
  {
    id: 4,
    title: 'Puente Vehicular Río Grande',
    slug: 'puente-vehicular-rio-grande',
    shortDescription:
      'Puente de concreto pretensado de 120 metros de longitud para tráfico vehicular pesado.',
    fullDescription:
      'El Puente Vehicular Río Grande es una obra de infraestructura vial que conecta dos municipios sobre el río Grande, facilitando el transporte de carga y pasajeros en la región. Con 120 metros de longitud y 12 metros de ancho (4 carriles), el puente fue diseñado para soportar cargas de hasta 60 toneladas. La estructura principal es de concreto pretensado con vigas tipo AASHTO, apoyada sobre 6 pilas de concreto armado cimentadas sobre pilotes hincados a 25 metros de profundidad.',
    client: 'Ministerio de Obras Públicas',
    duration: '14 meses',
    completionDate: 'Enero 2024',
    coverImage:
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
      'https://images.unsplash.com/photo-1513467535987-fd81bc7d600f?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    ],
    technicalSpecs: [
      'Longitud total: 120 metros',
      'Ancho de calzada: 12 metros (4 carriles)',
      'Capacidad de carga: 60 toneladas',
      'Vigas pretensadas tipo AASHTO',
      'Pilotes hincados a 25 m de profundidad',
      'Barandas de seguridad tipo New Jersey',
    ],
  },
  {
    id: 5,
    title: 'Hotel Boutique Mar Sereno',
    slug: 'hotel-boutique-mar-sereno',
    shortDescription:
      'Hotel de 5 estrellas con 32 habitaciones frente al mar, piscina infinity y spa.',
    fullDescription:
      'Mar Sereno es un exclusivo hotel boutique de 5 estrellas ubicado frente al océano, diseñado para ofrecer una experiencia de lujo incomparable. Cuenta con 32 habitaciones con vista al mar, restaurante gourmet, bar lounge, piscina infinity de borde infinito, spa con 6 cabinas de tratamiento, gimnasio equipado y salón de eventos para 150 personas. La arquitectura combina elementos tropicales con líneas contemporáneas, utilizando materiales nobles como piedra natural, madera de teca y vidrio templado.',
    client: 'Grupo Hotelero Costa Azul',
    duration: '20 meses',
    completionDate: 'Septiembre 2023',
    coverImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    ],
    technicalSpecs: [
      'Área construida: 4,200 m²',
      '32 habitaciones de lujo',
      'Piscina infinity de 25 metros',
      'Estructura antisísmica de concreto',
      'Acabados en piedra natural y teca',
      'Sistema domótico integral',
    ],
  },
  {
    id: 6,
    title: 'Planta Industrial TechPack',
    slug: 'planta-industrial-techpack',
    shortDescription:
      'Nave industrial de 5,000 m² para producción y almacenamiento con oficinas administrativas.',
    fullDescription:
      'La Planta Industrial TechPack es una moderna nave industrial de 5,000 m² diseñada para operaciones de manufactura y logística. Incluye un área de producción de 3,500 m² con altura libre de 10 metros, zona de carga y descarga con 6 muelles para tráileres, almacén climatizado de 800 m² y un bloque de oficinas administrativas de 700 m² en dos niveles. La estructura principal es de acero estructural con cerramientos en panel sándwich aislante, garantizando eficiencia térmica y acústica.',
    client: 'TechPack Industries S.A.',
    duration: '12 meses',
    completionDate: 'Mayo 2024',
    coverImage:
      'https://images.unsplash.com/photo-1565636385955-f49731bfa1fa?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    ],
    technicalSpecs: [
      'Área total: 5,000 m²',
      'Altura libre: 10 metros',
      'Estructura de acero A36/A572',
      '6 muelles de carga para tráileres',
      'Panel sándwich aislante de poliuretano',
      'Sistema eléctrico trifásico 480V',
    ],
  },
];

// ─── TESTIMONIOS ──────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    clientName: 'Carlos Mendoza',
    role: 'Propietario',
    text: 'Excelente trabajo en la construcción de nuestra casa. El equipo fue profesional, cumplió con los plazos y la calidad de los acabados superó nuestras expectativas. Totalmente recomendados.',
    rating: 5,
  },
  {
    id: 2,
    clientName: 'María Elena Vargas',
    role: 'Gerente de Operaciones',
    text: 'Contratamos sus servicios para la remodelación de nuestras oficinas y quedamos muy satisfechos. Entendieron perfectamente nuestra visión y la ejecutaron con precisión.',
    rating: 5,
  },
  {
    id: 3,
    clientName: 'Roberto Fernández',
    role: 'Inversor Inmobiliario',
    text: 'He trabajado con ellos en 3 proyectos residenciales y siempre entregan a tiempo y dentro del presupuesto. Su equipo técnico es de primer nivel.',
    rating: 5,
  },
  {
    id: 4,
    clientName: 'Ana Lucía Paredes',
    role: 'Directora de Proyectos',
    text: 'La construcción de nuestra planta industrial fue un reto logístico enorme, pero lo manejaron con profesionalismo excepcional. Muy agradecidos.',
    rating: 4,
  },
  {
    id: 5,
    clientName: 'Javier Morales',
    role: 'Propietario',
    text: 'Realizaron la ampliación de nuestro hogar y el resultado fue impresionante. Utilizaron materiales de primera y el proceso fue muy organizado.',
    rating: 5,
  },
  {
    id: 6,
    clientName: 'Patricia Solano',
    role: 'Arquitecta Consultora',
    text: 'Como arquitecta, valoro mucho trabajar con constructoras que respeten los planos y las especificaciones. Este equipo lo hace impecablemente.',
    rating: 4,
  },
];
