"use client";

import React from 'react';
import { FileText, Users, Calendar } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { isDarkMode } = useTheme();
  const router = useRouter();

  const toggleDemo = () => {
    router.push('/dashboard');
  }

  const themeClasses = isDarkMode
    ? 'bg-[#1E1E2E] text-gray-100'
    : 'bg-white text-gray-900';

  return (
    <section id="inicio" className={`pt-16 min-h-screen flex items-center ${themeClasses} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Optimiza tu{' '}
              <span className={`${isDarkMode ? 'text-yellow-300' : 'text-blue-600'}`}>
                Despacho Jurídico
              </span>{' '}
              con LexGest
            </h1>
            <p className={`text-xl ${
                isDarkMode ? "text-gray-300": "text-black"
              }`}>
              La solución todo en uno para gestión de casos, clientes, facturación y más.
              Simple, seguro y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className={`${isDarkMode
                  ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-black'
                  : 'bg-blue-600 hover:bg-blue-700 text-white font-black'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                Prueba Gratis 30 Días
              </Button>
              <Button
                onClick={toggleDemo}
                variant="outline"
                size="lg"
                className={`${isDarkMode
                  ? 'border-gray-600 hover:border-yellow-400 hover:text-yellow-400 text-white font-black'
                  : 'border-black text-black font-black hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className={`rounded-xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
              <div className={`px-4 py-3 border-b flex items-center space-x-2 ${isDarkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
                }`}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Panel de Control</h3>
                  <FileText className={`h-6 w-6 ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`} />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <FileText className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold">124</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Expedientes</div>
                  </div>
                  <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <Users className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold">89</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Clientes</div>
                  </div>
                  <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
                    <Calendar className="h-8 w-8 text-yellow-600 mb-2" />
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Citas Hoy</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className={`p-3 rounded border-l-4 border-blue-500 ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                    <div className="flex justify-between">
                      <span className="font-medium">Caso: Divorcio López vs. García</span>
                      <span className="text-sm text-gray-500">2 días</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded border-l-4 border-yellow-500 ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                    <div className="flex justify-between">
                      <span className="font-medium">Audiencia - Sala 3</span>
                      <span className="text-sm text-gray-500">Mañana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
