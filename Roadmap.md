# 🗺️ ROADMAP DE DESARROLLO PARA IA: Proyecto Web de Construcción

**Instrucción principal para la IA:** A continuación, te presento el plan de desarrollo dividido en **6 Fases (Milestones)**. No debes programar todo a la vez. Tu objetivo es ejecutar **solo la fase que yo te indique**. Al finalizar cada fase, debes detenerte, entregar el código completo de esa sección, y esperar mi comando de aprobación ("Aprobado, pasa a la siguiente fase") antes de continuar.

---

### 📍 FASE 1: Configuración Base y Entorno (Foundation)
**Objetivo:** Levantar la arquitectura del proyecto y configurar las herramientas.
**Lo que la IA debe entregar en esta fase:**
1.  Comandos exactos de terminal para crear el proyecto (Vite + React) e instalar dependencias (Tailwind CSS, React Router DOM, React Icons).
2.  Código completo de `tailwind.config.js` (incluyendo la paleta de colores semánticos para construcción).
3.  Código de `index.css` con las directivas base de Tailwind.
4.  Estructura de carpetas en formato texto para que yo la replique en mi editor.

### 📍 FASE 2: Modelado de Datos y Enrutamiento (Data & Routing)
**Objetivo:** Crear el "cerebro" de la aplicación y la navegación.
**Lo que la IA debe entregar en esta fase:**
1.  El archivo `src/data/mockData.js` completo. Debe contener los arreglos exportables de `services`, `projects` y `testimonials` con datos de relleno realistas sobre construcción y URLs de imágenes de prueba (ej. Unsplash).
2.  El archivo `main.jsx` limpio.
3.  El archivo `App.jsx` configurando `BrowserRouter` y las rutas exactas definidas en el Spec (`/`, `/nosotros`, `/servicios`, `/proyectos`, `/proyectos/:slug`).

### 📍 FASE 3: Componentes Globales y Layout (Estructura Visual)
**Objetivo:** Construir el cascarón donde vivirán las páginas.
**Lo que la IA debe entregar en esta fase:**
1.  `Layout.jsx`: El contenedor principal que renderiza el Navbar, el `Outlet` (contenido dinámico) y el Footer.
2.  `Navbar.jsx`: Totalmente *responsive*, con menú hamburguesa para móviles y enlaces funcionales.
3.  `Footer.jsx`: Con enlaces rápidos y datos de contacto estáticos.
4.  `WhatsAppWidget.jsx`: El botón flotante global en la esquina inferior derecha.

### 📍 FASE 4: Ensamblaje del Landing Page (Home)
**Objetivo:** Desarrollar la página de inicio orientada a la conversión.
**Lo que la IA debe entregar en esta fase (consumiendo `mockData.js`):**
1.  `Hero.jsx`: La cabecera principal con la imagen de fondo y los botones (CTAs).
2.  `AboutPreview.jsx`: Sección corta de "Sobre Nosotros".
3.  `ServicesPreview.jsx`: Un grid de máximo 3 o 4 servicios destacados.
4.  `Testimonials.jsx`: El grid o carrusel de reseñas de clientes.
5.  `Home.jsx`: El archivo de la página que importa y apila todos los componentes anteriores ordenadamente.

### 📍 FASE 5: Páginas Internas y Portafolio Dinámico (Core Features)
**Objetivo:** Construir las páginas de detalle y el sistema dinámico de proyectos.
**Lo que la IA debe entregar en esta fase:**
1.  `Services.jsx` (Página): El listado completo de servicios de la empresa.
2.  `Projects.jsx` (Página): El grid general del portafolio mostrando las tarjetas de todos los proyectos (`ProjectCard.jsx`).
3.  `ProjectDetail.jsx` (Página dinámica): El componente que lee el `:slug` de la URL usando `useParams`, busca el proyecto en `mockData.js`, y renderiza la vista detallada (cabecera, descripción, specs técnicos y `ProjectGallery.jsx`).

### 📍 FASE 6: Pulido y Refactorización (Polish)
**Objetivo:** Asegurar la calidad del código y la experiencia de usuario.
**Lo que la IA debe entregar en esta fase (solo si se le solicita):**
1.  Revisión de clases de Tailwind para asegurar que no haya problemas en dispositivos móviles (Mobile-First check).
2.  Ajustes de espaciados (`padding/margin`) para mantener consistencia visual.
3.  Implementación de estados de carga (Loading states) o manejo de errores (ej. "Proyecto no encontrado" en `ProjectDetail.jsx`).

***

### Cómo usar este Roadmap en la práctica:

1.  Abre un nuevo chat con la IA de desarrollo.
2.  Pega el **SPEC** que creamos en el paso anterior.
3.  Inmediatamente después, pega este **ROADMAP**.
4.  Termina tu mensaje inicial diciendo: *"Entendido el Spec y el Roadmap. Por favor, comienza ejecutando ÚNICAMENTE la FASE 1."*