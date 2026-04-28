# [DOCUMENTO DE ESPECIFICACIÓN TÉCNICA - PRD/SPEC]
**Proyecto:** Sitio Web para Empresa de Construcción (Lead Generation & Portafolio)
**Stack Tecnológico:** React 18, Vite, Tailwind CSS, React Router DOM v6, React Icons.
**Metodología:** Spec-Driven Development / Mobile-First / Componentes Funcionales (Hooks).

## 1. Arquitectura y Estructura de Archivos
La IA debe generar y respetar estrictamente la siguiente estructura de directorios:
```text
/src
  /assets        # Imágenes, íconos estáticos (usar placeholders de Unsplash por ahora)
  /components
    /layout      # Navbar.jsx, Footer.jsx, Layout.jsx
    /home        # Hero.jsx, AboutPreview.jsx, ServicesPreview.jsx, Testimonials.jsx
    /projects    # ProjectCard.jsx, ProjectGallery.jsx
    /ui          # Button.jsx, WhatsAppWidget.jsx (Componentes reutilizables)
  /data          # mockData.js (Centralizar toda la data estática aquí)
  /pages         # Home.jsx, About.jsx, Services.jsx, Projects.jsx, ProjectDetail.jsx
  App.jsx        # Configuración de Rutas (React Router)
  main.jsx       # Punto de entrada
  index.css      # Directivas de Tailwind
```

## 2. Modelos de Datos (Mock Data)
Toda la información debe ser dinámica y consumirse desde `src/data/mockData.js`. La IA debe crear arreglos de objetos con la siguiente estructura (completar con datos de prueba realistas sobre construcción):

* **Services:** `id`, `title` (ej. Construcción Civil, Remodelaciones), `description`, `icon` (nombre del ícono o SVG), `image`.
* **Projects:** `id`, `title`, `slug` (para la URL), `shortDescription`, `fullDescription`, `client`, `duration`, `completionDate`, `coverImage`, `gallery` (array de URLs de imágenes), `technicalSpecs` (array de strings con detalles técnicos).
* **Testimonials:** `id`, `clientName`, `role` (ej. Propietario, Inversor), `text`, `rating` (1-5).

## 3. Enrutamiento (React Router DOM)
Implementar un archivo `App.jsx` que envuelva la aplicación en un componente `Layout` (que incluya el Navbar, el Footer y el WhatsAppWidget de forma global).
* `/` -> `<Home />`
* `/nosotros` -> `<About />`
* `/servicios` -> `<Services />`
* `/proyectos` -> `<Projects />`
* `/proyectos/:slug` -> `<ProjectDetail />` (Página dinámica)

## 4. Especificaciones de Componentes y UI/UX

**A. Navbar (`Navbar.jsx`)**
* **Comportamiento:** Sticky header (se mantiene al hacer scroll). Fondo transparente arriba, fondo sólido al bajar.
* **Mobile:** Menú hamburguesa que despliega los enlaces a pantalla completa o modal lateral.

**B. Hero Section (`Hero.jsx`)**
* **Diseño:** Imagen de fondo de alta calidad (obra en construcción) con un *overlay* oscuro (`bg-black/50`) para legibilidad del texto.
* **Contenido:** H1 impactante, subtítulo persuasivo.
* **Botones:** Dos CTAs. Primario: "Solicitar Presupuesto" (scroll al contacto o enlace a WhatsApp). Secundario: "Ver Proyectos" (Link a `/proyectos`).

**C. Grid de Servicios (`ServicesPreview.jsx` y página `Services.jsx`)**
* **Diseño:** Grid responsivo (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
* **Tarjetas:** Efecto *hover* (ligera elevación `hover:-translate-y-1` y sombra `hover:shadow-lg`), transición suave.

**D. Portafolio y Detalle de Proyecto (`ProjectDetail.jsx`)**
* **Lógica:** Usar `useParams` de React Router para capturar el `slug`. Buscar el proyecto correspondiente en `mockData.js`. Si no existe, mostrar un componente de "Proyecto no encontrado".
* **Estructura de la vista individual:**
    * Cabecera con el título y la foto de portada.
    * Grid de 2 columnas en desktop: Izquierda (Descripción larga y lista de `technicalSpecs` con íconos de *check*), Derecha (Tarjeta de resumen con Cliente, Fecha, Duración).
    * `ProjectGallery.jsx`: Un grid de imágenes (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`) que muestre el array de fotos del proyecto.

**E. WhatsApp Widget (`WhatsAppWidget.jsx`)**
* **Posición:** `fixed bottom-6 right-6 z-50`.
* **Diseño:** Botón circular verde con el ícono de WhatsApp. Incluir una animación de pulso sutil (`animate-pulse` o un `ping` en un pseudo-elemento).
* **Acción:** Enlace `href="https://wa.me/NUMERO?text=MENSAJE"` abriendo en `_blank`.

## 5. Reglas de Estilo (Tailwind CSS)
* **Paleta de colores sugerida:** Ampliar el `tailwind.config.js` con colores semánticos. Ejemplo: `primary` (Naranja construcción o Azul corporativo), `secondary` (Gris oscuro/Plomo), `accent` (Amarillo seguridad).
* **Tipografía:** Importar una fuente limpia y moderna desde Google Fonts (ej. *Inter* o *Roboto*) y configurarla como *sans* por defecto.
* **Espaciado:** Mantener consistencia usando las clases de *padding* y *margin* de Tailwind (ej. `py-16` o `py-24` para separar secciones).

## 6. Instrucciones de Entrega para la IA
Para evitar cortes en la respuesta por el límite de tokens, entrégame el código en el siguiente orden estricto, esperando mi confirmación ("Continúa") entre cada paso:
1.  **Paso 1:** `package.json` (dependencias a instalar), `tailwind.config.js`, `index.css` y `src/data/mockData.js`.
2.  **Paso 2:** Configuración de rutas (`App.jsx`, `main.jsx`) y Componentes de Layout (`Layout.jsx`, `Navbar.jsx`, `Footer.jsx`, `WhatsAppWidget.jsx`).
3.  **Paso 3:** Vistas principales (`Home.jsx` y sus componentes internos: `Hero.jsx`, `AboutPreview.jsx`, etc.).
4.  **Paso 4:** Vistas de páginas internas (`Projects.jsx`, `ProjectDetail.jsx`, `Services.jsx`).