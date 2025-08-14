export interface pageProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface navbarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface Case {
  id: string;
  title: string;
  client: string;
  status: 'active' | 'pending' | 'completed';
  priority: 'high' | 'medium' | 'low';
  nextDate: string;
  type: string;
}

export interface Event {
  time: string;
  title: string;
  client: string;
  type: 'court' | 'meeting' | 'signing' | 'consultation';
}

export interface UserProfil {
  name: string;
  role: string;
  avatar?: string; // Opcional para si en el futuro usamos imágenes
}