# Arquitectura del Proyecto

## Principios de Organización

### 1. `core/` - Funcionalidades Centrales
Contiene la lógica fundamental de la aplicación que se usa en toda la app.

- **guards/**: Guards de Angular para protección de rutas (ej: AuthGuard, RoleGuard)
- **interceptors/**: HTTP interceptors para manejo global de requests/responses
- **services/**: Servicios singleton compartidos (ej: AuthService, SupabaseService)
- **models/**: Interfaces, tipos y modelos de datos TypeScript

**Regla**: Los elementos en `core` deben ser agnósticos del dominio del negocio y reutilizables.

### 2. `shared/` - Componentes Reutilizables
Elementos de UI y utilidades que se comparten entre features.

- **components/**: Componentes standalone reutilizables (ej: Button, Card, Modal)
- **pipes/**: Pipes personalizadas (ej: FormatDate, Currency)
- **directives/**: Directivas personalizadas (ej: HighlightDirective)

**Regla**: Los componentes en `shared` no deben tener lógica de negocio específica.

### 3. `layout/` - Estructura Visual
Componentes que definen la estructura y navegación de la aplicación.

- **components/**: Header, Footer, Navbar, Sidebar
- **pages/**: Layouts completos (MainLayout, AuthLayout, AdminLayout)

**Regla**: Los layouts orquestan la disposición visual pero no contienen lógica de negocio.

### 4. `features/` - Módulos de Funcionalidad
Cada carpeta representa una feature del negocio con su propia lógica.

Estructura típica de una feature:
```
features/peliculas/
├── components/          # Componentes específicos de películas
├── pages/              # Páginas (lista, detalle, formulario)
├── services/           # Servicios específicos de películas
└── models/             # Interfaces específicas de películas
```

**Regla**: Las features deben ser lo más independientes posible entre sí.

## Flujo de Dependencias

```
features → layout → shared → core
```

- `features` puede importar de `layout`, `shared` y `core`
- `layout` puede importar de `shared` y `core`
- `shared` puede importar de `core`
- `core` no debe importar de ninguna otra carpeta de app

## Convenciones de Nombres

### Archivos
- Componentes: `nombre.component.ts`
- Servicios: `nombre.service.ts`
- Guards: `nombre.guard.ts`
- Interceptors: `nombre.interceptor.ts`
- Modelos: `nombre.model.ts` o `nombre.interface.ts`
- Pipes: `nombre.pipe.ts`
- Directivas: `nombre.directive.ts`

### Clases y tipos
- Componentes: `NombreComponent`
- Servicios: `NombreService`
- Guards: `nombreGuard` (función) o `NombreGuard` (clase)
- Interfaces: `INombre` o `Nombre`
- Types: `NombreType`

## Standalone Components

Este proyecto utiliza **standalone components** (Angular 14+):
- No hay NgModules
- Los componentes declaran sus propias dependencias en `imports`
- Routing mediante `routes` arrays
- Providers configurados en `app.config.ts`

## Lazy Loading

Para optimizar la carga, las features se cargarán de forma lazy:

```typescript
{
  path: 'peliculas',
  loadComponent: () => import('./features/peliculas/pages/lista.component')
}
```

## Servicios e Inyección

- Servicios globales: `providedIn: 'root'` (en `core/services`)
- Servicios de feature: proveer a nivel de ruta o componente

## Testing

- Tests unitarios con Vitest
- Cada archivo debe tener su `.spec.ts` correspondiente
- Foco en lógica de negocio en servicios
- Tests de integración en componentes principales
