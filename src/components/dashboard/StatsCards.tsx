"use client";

import React from 'react';
import { FileText, Users, Calendar, DollarSign } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';

interface StatsCardsProps {
  className?: string;
}

const StatsCards: React.FC<StatsCardsProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const stats = [
    { 
      label: 'Expedientes Activos', 
      value: '124', 
      change: '+12%', 
      icon: FileText, 
      color: 'blue' 
    },
    { 
      label: 'Clientes Totales', 
      value: '89', 
      change: '+8%', 
      icon: Users, 
      color: 'green' 
    },
    { 
      label: 'Citas Esta Semana', 
      value: '23', 
      change: '+15%', 
      icon: Calendar, 
      color: 'yellow' 
    },
    { 
      label: 'Ingresos del Mes', 
      value: '€45,230', 
      change: '+22%', 
      icon: DollarSign, 
      color: 'purple' 
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: isDarkMode ? 'bg-blue-900' : 'bg-blue-100',
        icon: 'text-blue-600'
      },
      green: {
        bg: isDarkMode ? 'bg-green-900' : 'bg-green-100',
        icon: 'text-green-600'
      },
      yellow: {
        bg: isDarkMode ? 'bg-yellow-900' : 'bg-yellow-100',
        icon: 'text-yellow-600'
      },
      purple: {
        bg: isDarkMode ? 'bg-purple-900' : 'bg-purple-100',
        icon: 'text-purple-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ${className}`}>
      {stats.map((stat, index) => {
        const colorClasses = getColorClasses(stat.color);
        
        return (
          <div 
            key={index} 
            className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${cardClasses}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                <stat.icon className={`h-6 w-6 ${colorClasses.icon}`} />
              </div>
              <span className="text-sm text-green-600 font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
