"use client";

import React from "react";
import { Star } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className,
}) => {
  const { isDarkMode } = useTheme();

  const testimonials = [
    {
      rating: 5,
      text: "LexGest redujo un 40% nuestro tiempo en gestión administrativa. Ahora podemos enfocarnos más en nuestros clientes.",
      author: "Ana Martín",
      company: "Martín & Asociados",
      initials: "AM",
    },
    {
      rating: 5,
      text: "La integración de facturación es perfecta. Hemos mejorado significativamente nuestro flujo de caja.",
      author: "Carlos Ruiz",
      company: "Bufete Ruiz",
      initials: "CR",
    },
    {
      rating: 5,
      text: "Seguridad excepcional y soporte técnico siempre disponible. Recomiendo LexGest sin dudarlo.",
      author: "Laura Sánchez",
      company: "Sánchez Legal",
      initials: "LS",
    },
  ];

  const themeClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-gray-50 border-gray-200";

  const cardClasses = isDarkMode
    ? "bg-gray-700 border border-gray-600"
    : "bg-white border border-gray-200";

  const avatarClasses = isDarkMode ? "bg-gray-600" : "bg-gray-200";

  return (
    <section className={`py-20 ${themeClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4" ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Lo que dicen nuestros{" "}
            <span className={isDarkMode ? "text-yellow-400" : "text-blue-600"}>
              Clientes
            </span>
          </h2>
          <p
            className={`text-xl ${isDarkMode ? "text-white" : "text-gray-600"}`}
          >
            Más de 500 despachos confían en LexGest
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${cardClasses} shadow-lg`}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className={`italic mb-4" ${
                  isDarkMode ? "text-white" : "text-gray-600"
                }`}
              >
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full ${avatarClasses} flex items-center justify-center mr-4`}
                >
                  <span
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
