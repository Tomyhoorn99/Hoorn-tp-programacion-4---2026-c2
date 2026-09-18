# Sistema de Cine — Programación IV TP1

Aplicación web completa para la gestión y comercialización de un cine.

## Tecnologías

- **Angular 22**: Framework principal con standalone components
- **Supabase**: Backend (Auth, Database, Storage, Realtime)
- **TypeScript 6**: Lenguaje de desarrollo
- **Vitest**: Testing framework
- **Node 24**: Runtime environment

## Estructura del Proyecto

```
src/app/
├── core/              # Funcionalidades centrales de la aplicación
│   ├── guards/        # Guards de routing para protección de rutas
│   ├── interceptors/  # HTTP interceptors
│   ├── services/      # Servicios compartidos y lógica de negocio central
│   └── models/        # Interfaces, tipos y modelos de datos
│
├── shared/            # Componentes y utilidades reutilizables
│   ├── components/    # Componentes compartidos entre features
│   ├── pipes/         # Pipes personalizadas
│   └── directives/    # Directivas personalizadas
│
├── layout/            # Componentes de estructura visual
│   ├── components/    # Header, footer, navbar, sidebar
│   └── pages/         # Layouts completos (main layout, auth layout, etc.)
│
└── features/          # Módulos de funcionalidad del negocio
    ├── auth/          # Autenticación y autorización
    ├── peliculas/     # Gestión de películas
    ├── cartelera/     # Cartelera del cine
    ├── salas/         # Gestión de salas
    ├── funciones/     # Funciones y horarios
    ├── compras/       # Proceso de compra de entradas
    ├── candy-bar/     # Productos del candy bar
    ├── resenas/       # Reseñas de usuarios
    ├── fidelizacion/  # Programa de fidelización
    ├── proximamente/  # Próximos estrenos
    ├── empleado/      # Panel de empleado
    └── admin/         # Panel de administrador
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm start
```

La aplicación se ejecutará en `http://localhost:4200/`

## Build

```bash
npm run build
```

Los archivos de producción se generarán en el directorio `dist/`.

## Tests

```bash
npm test
```

## Criterios de Desarrollo

- Priorizar código simple, claro y mantenible
- Preferir soluciones nativas de Angular y Supabase antes de agregar librerías
- Evitar sobreingeniería y complejidad innecesaria
- Separar responsabilidades: componentes para UI, servicios para lógica
- Crear componentes reutilizables cuando exista una necesidad real
- Mantener nombres y estructura consistentes con el proyecto

## Configuración de Supabase

Antes de ejecutar el proyecto, configurar las credenciales de Supabase en:
- `src/environments/environment.ts` (desarrollo)
- `src/environments/environment.prod.ts` (producción)

```typescript
export const environment = {
  production: false,
  supabase: {
    url: 'TU_SUPABASE_URL',
    anonKey: 'TU_SUPABASE_ANON_KEY'
  }
};
```
