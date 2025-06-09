# FinFlow 💰

Aplicación web para gestión de finanzas personales y de proyectos.

## 🚀 Stack Tecnológica

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Firebase (Firestore, Auth, Hosting)
- **Estado**: Zustand, React Query/TanStack Query
- **Formularios**: React Hook Form + Zod
- **Gráficos**: Recharts
- **Herramientas**: Vite, ESLint, Prettier, Husky

## 📋 Funcionalidades

- ✅ Autenticación de usuarios
- 📊 Gestión de presupuestos con categorías
- 💸 Sistema de deudas entre personas
- 🏗️ Gestión de proyectos con gastos y colaboradores
- 📈 Reportes y gráficos de gastos
- 📱 Interfaz responsive y moderna

## 🏗️ Estructura del Proyecto

```
finflow/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rutas de autenticación
│   ├── dashboard/         # Dashboard principal
│   ├── presupuestos/      # Gestión de presupuestos
│   ├── deudas/           # Sistema de deudas
│   ├── proyectos/        # Gestión de proyectos
│   └── reportes/         # Reportes y gráficos
├── components/            # Componentes reutilizables
├── lib/                  # Utilidades y configuraciones
├── hooks/                # Custom hooks
├── types/                # Definiciones de TypeScript
└── firebase/             # Configuración de Firebase
```

## 🔥 Estructura de Datos Firebase

```
usuarios/{userId}/
├── perfil: {...}
├── presupuestos/{presupuestoId}/
│   ├── nombre: string
│   ├── monto: number
│   ├── fecha_inicio: timestamp
│   ├── fecha_fin: timestamp
│   └── categorias: string[]
├── deudas/{deudaId}/
│   ├── persona: string
│   ├── monto: number
│   ├── fecha_vencimiento: timestamp
│   └── estado: 'pendiente' | 'pagada'
├── proyectos/{proyectoId}/
│   ├── nombre: string
│   ├── presupuesto: number
│   ├── gastos: {...}
│   └── colaboradores: string[]
└── transacciones/{transaccionId}/
    ├── tipo: 'ingreso' | 'gasto'
    ├── monto: number
    ├── categoria: string
    ├── fecha: timestamp
    └── descripcion: string
```

## 🚀 Getting Started

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno
4. Ejecutar: `npm run dev`

## 📝 Convenciones

- TypeScript en todos los archivos
- Tailwind CSS para estilos
- Shadcn/ui para componentes
- camelCase para variables/funciones
- PascalCase para componentes/tipos
- kebab-case para archivos/rutas 