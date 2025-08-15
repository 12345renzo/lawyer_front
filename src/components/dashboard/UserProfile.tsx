import { useState } from "react";
import { User } from "lucide-react";

function UserProfile() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 relative">
      <div
        className={`p-2 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } cursor-pointer`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full ${
              isDarkMode ? "bg-yellow-400" : "bg-blue-600"
            } flex items-center justify-center mr-3`}
          >
            <User
              className={`h-5 w-5 ${
                isDarkMode ? "text-gray-900" : "text-white"
              }`}
            />
          </div>
          <div>
            <div className="font-semibold text-sm">Ana Martín</div>
            <div className="text-xs text-gray-500">Abogada Senior</div>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className={`absolute bottom-full mb-2 w-full left-0 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          } rounded-lg shadow-lg border ${
            isDarkMode ? "border-gray-600" : "border-gray-200"
          } z-10`}
        >
          <ul className="py-1">
            <li>
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  isDarkMode
                    ? "hover:bg-gray-600 text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                Mi perfil
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  isDarkMode
                    ? "hover:bg-gray-600 text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                Configuración
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  isDarkMode
                    ? "hover:bg-gray-600 text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
