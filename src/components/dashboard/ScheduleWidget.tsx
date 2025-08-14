"use client";

import React from 'react';
import { Calendar } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';
import Button from '../ui/Button';

interface ScheduleWidgetProps {
  className?: string;
}

const ScheduleWidget: React.FC<ScheduleWidgetProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const upcomingEvents = [
    { 
      time: '09:00', 
      title: 'Audiencia Sala 3', 
      client: 'María González', 
      type: 'court' 
    },
    { 
      time: '11:30', 
      title: 'Reunión cliente', 
      client: 'José Martínez', 
      type: 'meeting' 
    },
    { 
      time: '14:00', 
      title: 'Firma documentos', 
      client: 'TechStart SL', 
      type: 'signing' 
    },
    { 
      time: '16:30', 
      title: 'Consulta inicial', 
      client: 'Ana López', 
      type: 'consultation' 
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'court': return 'bg-red-500';
      case 'meeting': return 'bg-blue-500';
      case 'signing': return 'bg-green-500';
      case 'consultation': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const timeClasses = isDarkMode
    ? 'bg-yellow-900 text-yellow-300'
    : 'bg-blue-100 text-blue-800';

  const eventClasses = isDarkMode
    ? 'hover:bg-gray-700'
    : 'hover:bg-gray-100';

  return (
    <div className={`rounded-xl border ${cardClasses} p-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-6">Agenda de Hoy</h2>
      <div className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg transition-colors ${eventClasses}`}
          >
            <div className="flex items-start space-x-3">
              <div className={`px-2 py-1 rounded text-xs font-medium ${timeClasses}`}>
                {event.time}
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{event.title}</div>
                <div className="text-xs text-gray-500">{event.client}</div>
              </div>
              <div className={`w-2 h-2 rounded-full ${getEventTypeColor(event.type)}`}></div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className={`w-full mt-4 ${
          isDarkMode
            ? 'border-gray-600 hover:border-yellow-400 hover:text-yellow-400'
            : 'border-gray-300 hover:border-blue-600 hover:text-blue-600'
        }`}
      >
        Ver agenda completa
      </Button>
    </div>
  );
};

export default ScheduleWidget;
