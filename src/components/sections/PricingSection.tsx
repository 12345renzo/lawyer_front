"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';
import Button from '../ui/Button';

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  const plans = [
    {
      name: 'Básico',
      price: '€49',
      period: '/mes',
      features: [
        '1 usuario',
        '50 expedientes',
        '5GB almacenamiento',
        'Soporte por email',
        'Facturación básica'
      ],
      isPopular: false,
      buttonText: 'Empezar Gratis',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Profesional',
      price: '€99',
      period: '/mes',
      features: [
        '5 usuarios',
        'Expedientes ilimitados',
        '50GB almacenamiento',
        'Soporte prioritario',
        'Facturación avanzada',
        'Integraciones API'
      ],
      isPopular: true,
      buttonText: 'Empezar Gratis',
      buttonVariant: 'primary' as const
    },
    {
      name: 'Enterprise',
      price: '€199',
      period: '/mes',
      features: [
        'Usuarios ilimitados',
        'Expedientes ilimitados',
        '500GB almacenamiento',
        'Soporte 24/7',
        'Funciones premium',
        'Manager dedicado'
      ],
      isPopular: false,
      buttonText: 'Contactar Ventas',
      buttonVariant: 'outline' as const
    }
  ];

  const themeClasses = isDarkMode
    ? 'bg-[#1E1E2E] text-gray-100'
    : 'bg-white text-gray-900';

  const nopopularClasses = isDarkMode
    ? 'border-gray-600 bg-gray-700 hover:border-gray-500'
    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg';

  const popularClasses = isDarkMode
    ? 'border-yellow-400 bg-gray-700'
    : 'border-blue-600 bg-white shadow-xl';

  return (
    <section id="precios" className={`py-20 ${themeClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes que se adaptan a tu {' '}
            <span className={isDarkMode ? 'text-yellow-400' : 'text-blue-600'}>
              Despacho
            </span>
          </h2>
          <p className={`text-xl ${
                      isDarkMode ? "text-white" : "text-gray-600"
                    }`}>
            Desde abogados independientes hasta grandes bufetes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 relative ${plan.isPopular ? popularClasses : nopopularClasses
                }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-blue-600 text-white'
                  }`}>
                  Más Popular
                </div>
              )}

              {/* Plan Header */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Button
                variant={plan.buttonVariant}
                className={`w-full font-bold ${plan.isPopular && isDarkMode
                    ? 'bg-yellow-400 hover:bg-yellow-300 text-gray-900 hover:dark:text-black'
                    : isDarkMode ? 'dark:text-white hover:dark:border-yellow-300 hover:dark:text-yellow-400' : ''
                  }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
