import { Timestamp } from 'firebase/firestore';

// Tipos de configuración del usuario
export interface UserConfig {
  moneda: string;
  tema: 'light' | 'dark' | 'auto';
  notificaciones: boolean;
  idioma: string;
}

// Perfil del usuario
export interface UserProfile {
  email: string;
  nombre: string;
  apellido: string;
  foto?: string;
  fechaRegistro: Timestamp;
  configuracion: UserConfig;
}

// Presupuesto
export interface Presupuesto {
  id?: string;
  nombre: string;
  monto: number;
  fechaInicio: Timestamp;
  fechaFin: Timestamp;
  categorias: string[];
  descripcion?: string;
  activo: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Deuda
export interface Deuda {
  id?: string;
  persona: string;
  monto: number;
  fechaVencimiento: Timestamp;
  estado: 'pendiente' | 'pagada';
  descripcion?: string;
  tipo: 'debo' | 'me_debe';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Proyecto
export interface Proyecto {
  id?: string;
  nombre: string;
  presupuesto: number;
  descripcion?: string;
  colaboradores: string[];
  activo: boolean;
  fechaInicio: Timestamp;
  fechaFin?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Transacción
export interface Transaccion {
  id?: string;
  tipo: 'ingreso' | 'gasto';
  monto: number;
  categoria: string;
  fecha: Timestamp;
  descripcion: string;
  presupuestoId?: string;
  proyectoId?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Colecciones de Firestore
export interface FirestoreCollections {
  usuarios: {
    [userId: string]: {
      perfil: UserProfile;
      presupuestos: {
        [presupuestoId: string]: Presupuesto;
      };
      deudas: {
        [deudaId: string]: Deuda;
      };
      proyectos: {
        [proyectoId: string]: Proyecto;
      };
      transacciones: {
        [transaccionId: string]: Transaccion;
      };
    };
  };
}
