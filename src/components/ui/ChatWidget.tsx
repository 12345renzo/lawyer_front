"use client";

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTheme } from '../layout/ThemeProvider';
import Button from './Button';

interface ChatWidgetProps {
  className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  const { isDarkMode } = useTheme();
  const [showChatPopup, setShowChatPopup] = useState(false);

  const toggleChat = () => {
    setShowChatPopup(!showChatPopup);
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const buttonClasses = isDarkMode
    ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900'
    : 'bg-blue-600 hover:bg-blue-700 text-white';

  return (
    <>
      {/* Chat Popup */}
      {showChatPopup && (
        <div className={`fixed bottom-20 right-4 w-80 ${themeClasses} rounded-lg shadow-2xl border z-50 ${className}`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
            <h3 className="font-semibold">Chat de Soporte</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              ¡Hola! ¿En qué podemos ayudarte hoy?
            </p>
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className={`w-full p-2 border rounded-lg text-sm ${
                isDarkMode
                  ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400'
                  : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${buttonClasses} ${className}`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
};

export default ChatWidget;
