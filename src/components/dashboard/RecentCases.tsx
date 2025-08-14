"use client";

import React from 'react';
import { Filter, Plus, Eye, Edit, MoreVertical, Calendar } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';
import Button from '../ui/Button';

interface RecentCasesProps {
  className?: string;
}

const RecentCases: React.FC<RecentCasesProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const recentCases = [
    {
      id: '2024-001',
      title: 'Divorcio contencioso',
      client: 'María González',
      status: 'active',
      priority: 'high',
      nextDate: '2024-03-15',
      type: 'Familiar'
    },
    {
      id: '2024-002',
      title: 'Reclamación laboral',
      client: 'José Martínez',
      status: 'pending',
      priority: 'medium',
      nextDate: '2024-03-22',
      type: 'Laboral'
    },
    {
      id: '2024-003',
      title: 'Constitución sociedad',
      client: 'TechStart SL',
      status: 'completed',
      priority: 'low',
      nextDate: '2024-03-10',
      type: 'Mercantil'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': 
        return isDarkMode ? 'text-green-400 bg-green-900' : 'text-green-800 bg-green-100';
      case 'pending': 
        return isDarkMode ? 'text-yellow-400 bg-yellow-900' : 'text-yellow-800 bg-yellow-100';
      case 'completed': 
        return isDarkMode ? 'text-blue-400 bg-blue-900' : 'text-blue-800 bg-blue-100';
      default: 
        return isDarkMode ? 'text-gray-400 bg-gray-800' : 'text-gray-800 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'pending': return 'Pendiente';
      case 'completed': return 'Completado';
      default: return 'Desconocido';
    }
  };

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const caseClasses = isDarkMode
    ? 'bg-gray-750 hover:bg-gray-700'
    : 'bg-gray-50 hover:bg-gray-100';

  return (
    <div className={`rounded-xl border ${cardClasses} p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Expedientes Recientes</h2>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Filter className="h-4 w-4" />
          </Button>
          <Button
            variant="primary"
            size="sm"
            className={`${isDarkMode ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Nuevo
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {recentCases.map((case_) => (
          <div 
            key={case_.id} 
            className={`p-4 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md ${caseClasses} ${getPriorityColor(case_.priority)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-semibold">#{case_.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                    {getStatusLabel(case_.status)}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {case_.type}
                  </span>
                </div>
                <h3 className="font-medium mb-1">{case_.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Cliente: {case_.client}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Próxima fecha: {case_.nextDate}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCases;
