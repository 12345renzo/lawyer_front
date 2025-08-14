"use client";
import NavbarComponet from "@/src/components/landing/navbarComponet";
import TopBar from "@/src/components/landing/tolbarComponet";
import {
  Case,
  navbarItem,
  pageProps,
  StatCard,
} from "@/src/interface/landing/thema";
import { Calendar, CreditCard, FileText, Home, Settings, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HomePage: React.FC<pageProps> = ({ isDarkMode, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Datos mock (podrían moverse a un archivo aparte o servicio)
  const sidebarItems: navbarItem[] = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "cases", label: "Expedientes", icon: FileText },
    { id: "clients", label: "Clientes", icon: Users },
    { id: "calendar", label: "Agenda", icon: Calendar },
    { id: "billing", label: "Facturación", icon: CreditCard },
    { id: "settings", label: "Configuración", icon: Settings },
  ];

  const stats: StatCard[] = [
    {
      label: "Expedientes Activos",
      value: "124",
      change: "+12%",
      icon: FileText,
      color: "blue",
    },
    // ... otras stats
  ];

  const recentCases: Case[] = [
    // ... casos
  ];

  const upcomingEvents: Event[] = [
    // ... eventos
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-[#1E1E2E] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <NavbarComponet
        isDarkMode={isDarkMode}
        isOpen={isSidebarOpen}
        activeTab={activeTab}
        items={sidebarItems}
        onTabChange={setActiveTab}
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <TopBar 
          isDarkMode={isDarkMode}
          activeTab={activeTab}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          toggleTheme={toggleTheme}
        />
        
       {/*< {activeTab === 'dashboard' && (
          <DashboardContent 
            isDarkMode={isDarkMode}
            stats={stats}
            recentCases={recentCases}
            upcomingEvents={upcomingEvents}
          />
        )}
        
        {activeTab === 'cases' && (
          <CasesContent 
            isDarkMode={isDarkMode}
            cases={recentCases}
          />
        )}
        
        {activeTab !== 'dashboard' && activeTab !== 'cases' && (
          <PlaceholderContent 
            isDarkMode={isDarkMode}
            activeTab={activeTab}
          />
        )}*/}
      </div>
    </div>
  );
};

export default HomePage;
