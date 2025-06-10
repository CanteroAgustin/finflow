# Contributing to FinFlow

## 🚀 Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits limpio y automatizado.

### Formato de Commit

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos de Commits

- **feat**: Nueva funcionalidad
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, comas, etc.)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o modificar tests
- **chore**: Tareas de mantenimiento
- **ci**: Cambios en CI/CD
- **build**: Cambios en build
- **revert**: Revertir commits

### Ejemplos

```bash
# Nueva funcionalidad
git commit -m "feat: agregar autenticación con Firebase"

# Corrección de bug
git commit -m "fix: resolver error en validación de formulario"

# Documentación
git commit -m "docs: actualizar README con nuevas funcionalidades"

# Refactorización
git commit -m "refactor: simplificar lógica de cálculo de presupuesto"

# Con scope
git commit -m "feat(auth): implementar login con Google"
git commit -m "fix(ui): corregir responsive en móviles"
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción

# Linting y Formateo
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Ejecutar ESLint con auto-fix
npm run format       # Formatear código con Prettier
npm run format:check # Verificar formato sin cambiar
```

## 🔧 Git Hooks

El proyecto usa Husky para ejecutar automáticamente:

- **pre-commit**: Ejecuta lint-staged (ESLint + Prettier)
- **commit-msg**: Valida formato de commits con commitlint

## 📝 Convenciones de Código

- **TypeScript**: Usar en todos los archivos
- **Tailwind CSS**: Para estilos
- **camelCase**: Variables y funciones
- **PascalCase**: Componentes y tipos
- **kebab-case**: Archivos y rutas

## 🚨 Antes de Hacer Commit

1. Asegúrate de que el código pase los tests
2. Ejecuta `npm run lint` para verificar errores
3. Ejecuta `npm run format` para formatear código
4. Usa el formato de commit correcto

## 📋 Checklist de Pull Request

- [ ] Código sigue las convenciones
- [ ] Tests pasan
- [ ] Documentación actualizada
- [ ] Commits siguen el formato convencional
- [ ] No hay conflictos de merge
