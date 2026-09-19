/**
 * Barrel file para servicios del módulo core.
 * 
 * Facilita las importaciones desde otros módulos del proyecto.
 * En lugar de importar desde rutas largas, se puede hacer:
 * 
 * import { SupabaseService } from '@core/services';
 * 
 * Una vez configurado el path mapping en tsconfig.json
 */

export * from './supabase.service';
