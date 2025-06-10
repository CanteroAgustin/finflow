'use client';

import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto">
      {/* Tabs */}
      <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            isLogin
              ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            !isLogin
              ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Crear Cuenta
        </button>
      </div>

      {/* Form */}
      {isLogin ? <LoginForm /> : <RegisterForm />}

      {/* Switch message */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            {isLogin ? 'Crear cuenta' : 'Iniciar sesión'}
          </button>
        </p>
      </div>
    </div>
  );
};
