# ✅ TODO — Proyecto Web Empresa de Construcción

> Lista completa de tareas para desarrollo por IA.
> Stack: React 18 + Vite + Tailwind CSS + React Router DOM v6 + React Icons.

---

## 📍 FASE 1: Configuración Base y Entorno (Foundation)

### Inicialización del proyecto
- [x] Crear proyecto con Vite + React (`npm create vite@latest ./ -- --template react`)
- [x] Instalar dependencias: `tailwindcss`, `postcss`, `autoprefixer`
- [x] Instalar `react-router-dom` v6
- [x] Instalar `react-icons`
- [x] Inicializar Tailwind CSS (`npx tailwindcss init -p`)

### Configuración de Tailwind CSS (`tailwind.config.js`)
- [x] Configurar `content` para escanear archivos `.jsx`
- [x] Definir paleta de colores semánticos: `primary` (naranja construcción o azul corporativo), `secondary` (gris oscuro/plomo), `accent` (amarillo seguridad)
- [x] Importar fuente moderna de Google Fonts (Inter o Roboto) y configurarla como `fontFamily.sans` por defecto

### Estilos base (`src/index.css`)
- [x] Agregar directivas de Tailwind (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
- [x] Importar la fuente de Google Fonts vía `@import`
- [x] Configurar estilos base globales (reset, scroll-behavior smooth, etc.)

### Estructura de carpetas
- [x] Crear directorio `src/assets/`
- [x] Crear directorio `src/components/layout/`
- [x] Crear directorio `src/components/home/`
- [x] Crear directorio `src/components/projects/`
- [x] Crear directorio `src/components/ui/`
- [x] Crear directorio `src/data/`
- [x] Crear directorio `src/pages/`

---

## 📍 FASE 2: Modelado de Datos y Enrutamiento (Data & Routing)

### Mock Data (`src/data/mockData.js`)
- [x] Crear arreglo `services` con objetos: `id`, `title`, `description`, `icon`, `image`
  - [x] Incluir servicios realistas: Construcción Civil, Remodelaciones, Obras Civiles, Acabados, etc.
  - [x] Usar URLs de imágenes de prueba (Unsplash) para cada servicio
- [x] Crear arreglo `projects` con objetos: `id`, `title`, `slug`, `shortDescription`, `fullDescription`, `client`, `duration`, `completionDate`, `coverImage`, `gallery` (array de URLs), `technicalSpecs` (array de strings)
  - [x] Incluir al menos 4-6 proyectos de construcción realistas con slugs únicos
  - [x] Incluir URLs de imágenes de prueba para cover y galería
- [x] Crear arreglo `testimonials` con objetos: `id`, `clientName`, `role`, `text`, `rating` (1-5)
  - [x] Incluir al menos 4-6 testimonios realistas
- [x] Exportar todos los arreglos como exports nombrados

### Punto de entrada (`src/main.jsx`)
- [x] Configurar `ReactDOM.createRoot` con `StrictMode`
- [x] Importar `index.css`
- [x] Renderizar componente `App`

### Enrutamiento (`src/App.jsx`)
- [x] Importar `BrowserRouter`, `Routes`, `Route` de React Router DOM
- [x] Envolver la app en `BrowserRouter`
- [x] Configurar componente `Layout` como ruta padre
- [x] Definir ruta `/` → `<Home />`
- [x] Definir ruta `/nosotros` → `<About />`
- [x] Definir ruta `/servicios` → `<Services />`
- [x] Definir ruta `/proyectos` → `<Projects />`
- [x] Definir ruta `/proyectos/:slug` → `<ProjectDetail />`

---

## 📍 FASE 3: Componentes Globales y Layout (Estructura Visual)

### Layout (`src/components/layout/Layout.jsx`)
- [x] Crear componente contenedor principal
- [x] Renderizar `Navbar` en la parte superior
- [x] Renderizar `<Outlet />` de React Router para contenido dinámico
- [x] Renderizar `Footer` en la parte inferior
- [x] Renderizar `WhatsAppWidget` de forma global

### Navbar (`src/components/layout/Navbar.jsx`)
- [x] Diseño sticky header (`fixed top-0 w-full z-50`)
- [x] Fondo transparente arriba, fondo sólido al hacer scroll (usar `useState` + `useEffect` con evento `scroll`)
- [x] Logo o nombre de la empresa a la izquierda
- [x] Enlaces de navegación a la derecha: Inicio, Nosotros, Servicios, Proyectos
- [x] Enlaces funcionales con `<NavLink>` o `<Link>` de React Router
- [x] Implementar menú hamburguesa para móviles (con React Icons)
- [x] Menú móvil: modal de pantalla completa o panel lateral con animación
- [x] Diseño totalmente responsive (Mobile-First)

### Footer (`src/components/layout/Footer.jsx`)
- [x] Diseño con fondo oscuro acorde a la paleta
- [x] Sección de enlaces rápidos (Inicio, Servicios, Proyectos, Nosotros)
- [x] Sección de datos de contacto estáticos (teléfono, email, dirección)
- [x] Copyright con año actual
- [x] Diseño responsive

### WhatsApp Widget (`src/components/ui/WhatsAppWidget.jsx`)
- [x] Posición fija: `fixed bottom-6 right-6 z-50`
- [x] Botón circular verde con ícono de WhatsApp (de React Icons)
- [x] Animación de pulso sutil (`animate-pulse` o `ping`)
- [x] Enlace `href="https://wa.me/NUMERO?text=MENSAJE"` con `target="_blank"` y `rel="noopener noreferrer"`

---

## 📍 FASE 4: Ensamblaje del Landing Page (Home)

### Hero Section (`src/components/home/Hero.jsx`)
- [x] Imagen de fondo de alta calidad (obra en construcción)
- [x] Overlay oscuro sobre la imagen (`bg-black/50`) para legibilidad
- [x] Título H1 impactante y persuasivo
- [x] Subtítulo descriptivo
- [x] Botón CTA primario: "Solicitar Presupuesto" (enlace a WhatsApp o scroll a contacto)
- [x] Botón CTA secundario: "Ver Proyectos" (`<Link to="/proyectos">`)
- [x] Diseño responsive y centrado

### About Preview (`src/components/home/AboutPreview.jsx`)
- [x] Sección corta de "Sobre Nosotros" para la home
- [x] Texto que resalta experiencia y confianza de la empresa
- [x] Posible imagen o ícono acompañante
- [x] Botón o enlace a la página completa `/nosotros`
- [x] Espaciado consistente (`py-16` o `py-24`)

### Services Preview (`src/components/home/ServicesPreview.jsx`)
- [x] Grid responsivo de máximo 3-4 servicios destacados (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [x] Consumir datos desde `mockData.js` (importar `services` y mostrar solo los primeros 3-4)
- [x] Tarjetas con ícono, título y descripción corta
- [x] Efecto hover: elevación (`hover:-translate-y-1`) y sombra (`hover:shadow-lg`) con transición suave
- [x] Botón o enlace a la página completa `/servicios`

### Testimonials (`src/components/home/Testimonials.jsx`)
- [x] Grid o carrusel de reseñas de clientes
- [x] Consumir datos desde `mockData.js` (importar `testimonials`)
- [x] Mostrar nombre del cliente, rol, texto de la reseña y rating (estrellas)
- [x] Diseño responsivo y visualmente atractivo

### Página Home (`src/pages/Home.jsx`)
- [x] Importar y apilar componentes en orden: `Hero`, `AboutPreview`, `ServicesPreview`, `Testimonials`
- [x] Asegurar separación visual entre secciones (espaciados consistentes)

---

## 📍 FASE 5: Páginas Internas y Portafolio Dinámico (Core Features)

### Página About (`src/pages/About.jsx`)
- [x] Presentación completa de la empresa
- [x] Resaltar experiencia en el sector de construcción
- [x] Transmitir confianza y autoridad
- [x] Diseño atractivo con imágenes o íconos de soporte
- [x] Diseño responsive

### Página Servicios (`src/pages/Services.jsx`)
- [x] Listado completo de todos los servicios de la empresa
- [x] Consumir datos desde `mockData.js` (importar arreglo `services` completo)
- [x] Grid responsivo (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [x] Tarjetas con efecto hover (elevación y sombra con transición)
- [x] Cada tarjeta: ícono, título, descripción e imagen del servicio

### Página Proyectos (`src/pages/Projects.jsx`)
- [x] Grid general del portafolio mostrando todos los proyectos
- [x] Consumir datos desde `mockData.js` (importar arreglo `projects`)
- [x] Grid responsivo (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [x] Usar componente `ProjectCard.jsx` para cada proyecto

### Project Card (`src/components/projects/ProjectCard.jsx`)
- [x] Tarjeta con imagen de portada (`coverImage`) del proyecto
- [x] Título del proyecto
- [x] Descripción corta (`shortDescription`)
- [x] Enlace `<Link>` a la vista individual `/proyectos/:slug`
- [x] Efecto hover con transición suave

### Página Detalle de Proyecto (`src/pages/ProjectDetail.jsx`)
- [x] Usar `useParams` de React Router para capturar el `:slug` de la URL
- [x] Buscar el proyecto correspondiente en `mockData.js` por `slug`
- [x] Si no existe el proyecto, mostrar componente/mensaje "Proyecto no encontrado"
- [x] Cabecera con título del proyecto y foto de portada
- [x] Layout de 2 columnas en desktop:
  - [x] Columna izquierda: descripción larga (`fullDescription`) y lista de `technicalSpecs` con íconos de check
  - [x] Columna derecha: tarjeta de resumen con datos de `client`, `completionDate`, `duration`
- [x] Incluir componente `ProjectGallery.jsx`

### Project Gallery (`src/components/projects/ProjectGallery.jsx`)
- [x] Grid de imágenes responsivo (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`)
- [x] Mostrar todas las imágenes del array `gallery` del proyecto
- [x] Posible efecto hover o lightbox en las imágenes

---

## 📍 FASE 6: Pulido y Refactorización (Polish)

### Componente Button reutilizable (`src/components/ui/Button.jsx`)
- [x] Crear componente `Button` reutilizable con variantes (primario, secundario, outline)
- [x] Props para personalización: `variant`, `size`, `onClick`, `href`, `children`
- [x] Estilos consistentes con la paleta del proyecto

### Revisión Mobile-First
- [x] Revisar todas las clases de Tailwind para asegurar correcta visualización en móviles
- [x] Verificar que el menú hamburguesa funcione correctamente en todos los breakpoints
- [x] Verificar que todos los grids colapsen correctamente en pantallas pequeñas
- [x] Probar Hero section en diferentes resoluciones

### Consistencia visual
- [x] Ajustar espaciados (`padding`/`margin`) para mantener consistencia entre secciones
- [x] Verificar que la paleta de colores se aplique uniformemente
- [x] Verificar tipografía y tamaños de fuente en todos los componentes

### Estados de carga y errores
- [x] Implementar estado "Proyecto no encontrado" en `ProjectDetail.jsx` con diseño amigable
- [x] Verificar manejo de datos vacíos (arreglos sin contenido)
- [x] Verificar que todos los enlaces de navegación funcionen correctamente

### SEO y Accesibilidad
- [x] Asegurar estructura correcta de encabezados (un solo `<h1>` por página)
- [x] Usar etiquetas HTML5 semánticas (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- [x] Agregar atributos `alt` descriptivos a todas las imágenes
- [x] Agregar `title` y `meta description` adecuados

### Optimización y rendimiento
- [x] Verificar que la app compile sin errores (`npm run build`)
- [x] Verificar que no haya warnings en la consola del navegador
- [x] Asegurar carga rápida de la web

---

## 📋 Resumen de Archivos a Crear

| Archivo | Fase |
|---|---|
| `tailwind.config.js` | 1 |
| `src/index.css` | 1 |
| `src/main.jsx` | 2 |
| `src/App.jsx` | 2 |
| `src/data/mockData.js` | 2 |
| `src/components/layout/Layout.jsx` | 3 |
| `src/components/layout/Navbar.jsx` | 3 |
| `src/components/layout/Footer.jsx` | 3 |
| `src/components/ui/WhatsAppWidget.jsx` | 3 |
| `src/components/home/Hero.jsx` | 4 |
| `src/components/home/AboutPreview.jsx` | 4 |
| `src/components/home/ServicesPreview.jsx` | 4 |
| `src/components/home/Testimonials.jsx` | 4 |
| `src/pages/Home.jsx` | 4 |
| `src/pages/About.jsx` | 5 |
| `src/pages/Services.jsx` | 5 |
| `src/pages/Projects.jsx` | 5 |
| `src/pages/ProjectDetail.jsx` | 5 |
| `src/components/projects/ProjectCard.jsx` | 5 |
| `src/components/projects/ProjectGallery.jsx` | 5 |
| `src/components/ui/Button.jsx` | 6 |
