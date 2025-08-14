# LexGest - Frontend

Sistema de gestión para despachos jurídicos construido con Next.js 14, TypeScript y Tailwind CSS.

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes

El proyecto está completamente componetizado siguiendo principios de responsabilidad única y reutilización:

#### 📁 Layout Components (`/src/components/layout/`)
- **ThemeProvider**: Contexto global para manejo de tema claro/oscuro
- **Navbar**: Navegación principal con menú responsive
- **Footer**: Pie de página con enlaces y información de contacto

#### 🎨 UI Components (`/src/components/ui/`)
- **Button**: Botón reutilizable con múltiples variantes y estados
- **ChatWidget**: Widget de chat flotante para soporte

#### 📄 Section Components (`/src/components/sections/`)
- **HeroSection**: Sección principal de la landing page
- **FeaturesSection**: Características del producto
- **DemoSection**: Demostración interactiva de funcionalidades
- **TestimonialsSection**: Testimonios de clientes
- **PricingSection**: Planes y precios

#### 🖥️ Dashboard Components (`/src/components/dashboard/`)
- **Sidebar**: Navegación lateral del dashboard
- **Header**: Barra superior con búsqueda y controles
- **StatsCards**: Tarjetas de estadísticas
- **RecentCases**: Lista de expedientes recientes
- **ScheduleWidget**: Widget de agenda
- **QuickActions**: Acciones rápidas
- **CasesTable**: Tabla de gestión de expedientes
- **PlaceholderTab**: Placeholder para secciones en desarrollo

### 🎯 Principios de Diseño

1. **Responsabilidad Única**: Cada componente tiene una sola responsabilidad
2. **Reutilización**: Componentes diseñados para ser reutilizables
3. **Props Interface**: Todas las props están tipadas con TypeScript
4. **Theme Integration**: Integración nativa con sistema de temas
5. **Accessibility**: Componentes accesibles por defecto

### 🔧 Características Técnicas

- **TypeScript**: Tipado estático completo
- **Tailwind CSS**: Sistema de diseño utility-first
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Soporte nativo para tema oscuro
- **Performance**: Lazy loading y optimizaciones
- **Accessibility**: ARIA labels y navegación por teclado

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📱 Páginas Disponibles

### Landing Page (`/`)
- Hero section con call-to-action
- Características del producto
- Demo interactiva
- Testimonios
- Planes de precios
- Formulario de contacto

### Dashboard (`/dashboard`)
- Panel principal con estadísticas
- Gestión de expedientes
- Agenda y calendario
- Acciones rápidas
- Navegación por pestañas

## 🎨 Sistema de Temas

El proyecto incluye un sistema de temas completo:

- **ThemeProvider**: Contexto global para estado del tema
- **useTheme Hook**: Hook personalizado para acceder al tema
- **Persistencia**: Preferencias guardadas en localStorage
- **Auto-detect**: Detección automática de preferencia del sistema

## 🔄 Estado y Gestión

- **React Hooks**: useState, useEffect para estado local
- **Context API**: Para estado global del tema
- **Props Drilling**: Minimizado usando composición de componentes

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Sistema de breakpoints de Tailwind
- **Touch Friendly**: Interacciones optimizadas para touch
- **Progressive Enhancement**: Funcionalidad básica en todos los dispositivos

## 🧪 Testing

```bash
npm run test
npm run test:watch
```

## 🚀 Build y Deploy

```bash
npm run build
npm start
```

## 📚 Documentación de Componentes

Cada componente incluye:
- Interface TypeScript completa
- Props documentadas
- Ejemplos de uso
- Variantes disponibles

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
