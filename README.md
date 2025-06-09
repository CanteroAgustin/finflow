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
├── src/
│   └── app/                    # Next.js App Router
│       ├── layout.tsx          # Layout principal
│       ├── page.tsx            # Página de inicio
│       └── globals.css         # Estilos globales
├── public/                     # Archivos estáticos
├── components/                 # Componentes reutilizables (próximamente)
├── lib/                       # Utilidades y configuraciones (próximamente)
├── hooks/                     # Custom hooks (próximamente)
├── types/                     # Definiciones de TypeScript (próximamente)
└── firebase/                  # Configuración de Firebase (próximamente)
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

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/CanteroAgustin/finflow.git
   cd finflow
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint

## 🎯 Estado Actual del Proyecto

✅ **Configuración inicial completada**  
✅ **Next.js 14 con TypeScript funcionando**  
✅ **Tailwind CSS configurado**  
✅ **Página de inicio personalizada**  
✅ **Repositorio Git configurado**  
⏳ **Próximo paso**: Configuración de Firebase  

## 📝 Convenciones

- TypeScript en todos los archivos
- Tailwind CSS para estilos
- Shadcn/ui para componentes
- camelCase para variables/funciones
- PascalCase para componentes/tipos
- kebab-case para archivos/rutas

## 🔄 Próximos Pasos

1. Configurar Firebase (Auth, Firestore)
2. Implementar autenticación de usuarios
3. Crear componentes base con Shadcn/ui
4. Implementar CRUD de presupuestos
5. Sistema de deudas
6. Gestión de proyectos
7. Reportes y gráficos

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
