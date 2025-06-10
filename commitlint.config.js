module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Corrección de bug
        'docs', // Documentación
        'style', // Cambios de estilo (formato, etc.)
        'refactor', // Refactorización
        'perf', // Mejoras de rendimiento
        'test', // Tests
        'chore', // Tareas de mantenimiento
        'ci', // Cambios en CI/CD
        'build', // Cambios en build
        'revert', // Revertir commits
      ],
    ],
    'subject-case': [0], // No forzar case específico
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
  },
};
