"use client";

import React, { useState } from 'react';
import { Calendar, FileText, Users, CreditCard } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';
import Button from '../ui/Button';

interface DemoSectionProps {
  className?: string;
}

const DemoSection: React.FC<DemoSectionProps> = ({ className }) => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('expedientes');

  const tabs = [
    { id: 'expedientes', label: 'Expedientes', icon: FileText },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'documentos', label: 'Documentos', icon: FileText },
  ];

  const mockCases = [
    {
      id: '2024-001',
      title: 'Caso #2024-001',
      status: 'Activo',
      statusColor: 'bg-green-100 text-green-800',
      statusColorDark: 'bg-green-800 text-green-300',
      description: 'Divorcio contencioso - Cliente: María González',
      nextDate: '15 Mar 2024',
    },
    {
      id: '2024-002',
      title: 'Caso #2024-002',
      status: 'Pendiente',
      statusColor: 'bg-yellow-100 text-yellow-800',
      statusColorDark: 'bg-yellow-800 text-yellow-300',
      description: 'Reclamación laboral - Cliente: José Martínez',
      nextDate: '22 Mar 2024',
    },
  ];

  const quickActions = [
    { icon: FileText, label: 'Crear nuevo expediente' },
    { icon: Calendar, label: 'Programar cita' },
    { icon: CreditCard, label: 'Generar factura' },
  ];

  const themeClasses = isDarkMode
    ? 'bg-[#1E1E2E]/95 border-gray-700'
    : 'bg-white/95 border-gray-200';

    const themeClassesv2 = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-gray-50 border-gray-200';

  const headerClasses = isDarkMode
    ? 'border-gray-700 bg-gray-750'
    : 'border-gray-200 bg-gray-50';

  const caseClasses = isDarkMode
    ? 'border-gray-600 bg-gray-700'
    : 'border-gray-200 bg-gray-50';

  return (
    <section className={`py-20 ${themeClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 font-bold">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ve LexGest en {' '}
            <span className={isDarkMode ? 'text-yellow-400' : 'text-blue-600'}>
              Acción
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explora las principales funcionalidades de nuestra plataforma
          </p>
        </div>

        <div className={`max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden ${themeClassesv2}`}>
          {/* Tab Header */}
          <div className={`px-6 py-4 border-b ${headerClasses}`}>
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-bold ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? 'dark:bg-yellow-400 dark:text-gray-900 hover:dark:bg-yellow-400'
                        : 'bg-blue-600 text-white'
                      : isDarkMode
                        ? 'dark:text-gray-300 hover:dark:text-yellow-400 hover:dark:bg-transparent'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-transparent'
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cases List */}
              <div className="space-y-6">
                {mockCases.map((case_) => (
                  <div key={case_.id} className={`p-4 rounded-lg border ${caseClasses}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold">{case_.title}</span>
                      <span className={`font-bold px-2 py-1 rounded text-sm ${isDarkMode ? case_.statusColorDark : case_.statusColor}`}>
                        {case_.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {case_.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Próxima cita: {case_.nextDate}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Acciones Rápidas</h3>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`w-full p-3 rounded-lg transition-colors text-white font-bold ${
                        isDarkMode
                          ? 'hover:bg-gray-600 border border-gray-600 hover:dark:text-white'
                          : 'hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <action.icon className="h-5 w-5 inline mr-2" />
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
