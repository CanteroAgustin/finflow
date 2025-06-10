'use client';

import { useAuthContext } from '@/contexts/AuthContext';
import { AuthContainer } from '@/components/auth/AuthContainer';

export default function Home() {
  const { user, loading, userProfile, logout } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              💰 FinFlow
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tu aplicación de gestión financiera personal
            </p>
          </div>
          <AuthContainer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Header con información del usuario */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                💰 FinFlow
              </h1>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Bienvenido,
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {userProfile?.nombre} {userProfile?.apellido}
                  </p>
                </div>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              ¡Hola Mundo con Autenticación! 👋
            </p>
          </div>

          {/* Dashboard del usuario */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
                Dashboard de {userProfile?.nombre}
              </h2>

              {/* Información del usuario */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    📧 Información de Cuenta
                  </h3>
                  <p className="text-blue-600 dark:text-blue-300">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-blue-600 dark:text-blue-300">
                    <strong>Miembro desde:</strong>{' '}
                    {userProfile?.fechaRegistro
                      ?.toDate()
                      .toLocaleDateString('es-ES')}
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                    ⚙️ Configuración
                  </h3>
                  <p className="text-green-600 dark:text-green-300">
                    <strong>Moneda:</strong> {userProfile?.configuracion.moneda}
                  </p>
                  <p className="text-green-600 dark:text-green-300">
                    <strong>Tema:</strong> {userProfile?.configuracion.tema}
                  </p>
                </div>
              </div>

              {/* Características de la app */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">💸</div>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">
                    Deudas
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-300">
                    Gestiona lo que debes y te deben
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">
                    Presupuestos
                  </h3>
                  <p className="text-sm text-orange-600 dark:text-orange-300">
                    Controla tus gastos e ingresos
                  </p>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🏗️</div>
                  <h3 className="font-semibold text-indigo-800 dark:text-indigo-200">
                    Proyectos
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-300">
                    Organiza proyectos y colaboradores
                  </p>
                </div>
              </div>

              {/* Stack Tecnológico */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🛠️ Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Next.js 14
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              🚀 Comenzar a Usar
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              📖 Documentación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
