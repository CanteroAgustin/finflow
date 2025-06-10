export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Logo y Título */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              💰 FinFlow
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tu aplicación de gestión financiera personal
            </p>
          </div>

          {/* Mensaje de Bienvenida */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                ¡Hola Mundo! 👋
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Bienvenido a <strong>FinFlow</strong>, tu nueva aplicación para
                manejar:
              </p>

              {/* Características */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">💸</div>
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                    Deudas
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-300">
                    Gestiona lo que debes y te deben
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="font-semibold text-green-800 dark:text-green-200">
                    Presupuestos
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Controla tus gastos e ingresos
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🏗️</div>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">
                    Proyectos
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-300">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              🚀 Comenzar
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
