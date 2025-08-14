import React from 'react';
import { UserProfil } from "@/src/interface/landing/thema";
import { User } from 'lucide-react';

interface UserProfileProps {
  isDarkMode: boolean;
  user?: UserProfil; // Hacerlo opcional para poder usar valores por defecto
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  isDarkMode,
  user = {
    name: 'Ana Martín',
    role: 'Abogada Senior'
  } // Valores por defecto
}) => {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <div className={`p-4 rounded-lg transition-colors ${
        isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
      }`}>
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full ${
            isDarkMode ? 'bg-yellow-400' : 'bg-blue-600'
          } flex items-center justify-center mr-3`}>
            <User className={`h-5 w-5 ${
              isDarkMode ? 'text-gray-900' : 'text-white'
            }`} />
          </div>
          <div>
            <div className="font-semibold text-sm">{user.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {user.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;