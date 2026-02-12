# Portfolio Angular

Portfolio profesional de desarrollador frontend creado con Angular 17.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Modo oscuro premium con efectos glassmorphism
- 🔄 Animaciones suaves y micro-interacciones
- 📱 Completamente responsive
- ⚡ Optimizado para rendimiento
- 🎯 SEO-friendly

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- npm (viene con Node.js)

## 🛠️ Instalación

1. **Instalar Node.js**
   - Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/)
   - Verifica la instalación:
     ```bash
     node --version
     npm --version
     ```

2. **Instalar Angular CLI**
   ```bash
   npm install -g @angular/cli
   ```

3. **Instalar dependencias del proyecto**
   ```bash
   cd portfolio-angular
   npm install
   ```

## 🚀 Ejecutar el Proyecto

Para iniciar el servidor de desarrollo:

```bash
npm start
```

O alternativamente:

```bash
ng serve
```

Abre tu navegador y visita: `http://localhost:4200`

La aplicación se recargará automáticamente cuando hagas cambios en el código.

## 📦 Compilar para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se guardarán en el directorio `dist/`.

## 📁 Estructura del Proyecto

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navegación
│   │   │   ├── hero/            # Sección principal
│   │   │   ├── about/           # Sobre mí
│   │   │   ├── skills/          # Habilidades
│   │   │   ├── projects/        # Proyectos
│   │   │   ├── contact/         # Contacto
│   │   │   └── footer/          # Pie de página
│   │   ├── app.component.*      # Componente raíz
│   │   └── app.module.ts        # Módulo principal
│   ├── styles.css               # Estilos globales
│   └── index.html               # HTML principal
├── angular.json                 # Configuración Angular
├── package.json                 # Dependencias
└── tsconfig.json               # Configuración TypeScript
```

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `src/styles.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #14b8a6;
  /* ... más colores */
}
```

### Modificar Contenido

1. **Información personal**: Edita `src/app/components/hero/hero.component.html`
2. **Sobre mí**: Edita `src/app/components/about/about.component.ts`
3. **Habilidades**: Edita `src/app/components/skills/skills.component.ts`
4. **Proyectos**: Edita `src/app/components/projects/projects.component.ts`
5. **Contacto**: Edita `src/app/components/contact/contact.component.ts`

## 🌐 Despliegue

Puedes desplegar este portfolio en:

- **Vercel**: `vercel --prod`
- **Netlify**: Arrastra la carpeta `dist/` a Netlify
- **GitHub Pages**: Usa `angular-cli-ghpages`
- **Firebase Hosting**: `firebase deploy`

## 📝 Tecnologías Utilizadas

- Angular 17
- TypeScript
- CSS3 (con variables CSS)
- HTML5
- RxJS

## 💡 Consejos

- Reemplaza "Tu Nombre" en el componente Hero con tu nombre real
- Actualiza los enlaces de contacto con tus datos reales
- Añade imágenes reales de tus proyectos
- Personaliza los colores según tu marca personal

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal.

---

Hecho con ❤️ y Angular
