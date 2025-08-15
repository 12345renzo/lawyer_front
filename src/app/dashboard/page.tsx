"use client";
import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  Sidebar,
  Header,
  StatsCards,
  RecentCases,
  ScheduleWidget,
  QuickActions,
  CasesTable,
  PlaceholderTab,
} from "@/components";
import LayoutDashboard from "@/components/layout/LayoutDashboard";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Por defecto cerrado
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);

  // Detectar si estamos en móvil y pantallas muy pequeñas
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024); // 1024px es el breakpoint lg de Tailwind
      setIsVerySmallScreen(width <= 500); // Para pantallas de 500px o menos
      
      if (width >= 1024) {
        setIsSidebarOpen(false); // En desktop, empezar con sidebar colapsado (solo iconos)
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // En móvil, cerrar el sidebar después de seleccionar una opción
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Cerrar sidebar cuando se hace clic en el overlay (solo móvil)
  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <ThemeProvider>
      <LayoutDashboard>
        <div className="min-h-screen transition-all duration-300">
          {/* Overlay para móvil - no es necesario si está en pantalla completa */}
          {isMobile && isSidebarOpen && !isVerySmallScreen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={handleOverlayClick}
            />
          )}
          
          <Sidebar
            isOpen={isSidebarOpen}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          
          <div
            className={`transition-all duration-300 ${
              !isMobile 
                ? (isSidebarOpen ? "lg:ml-64" : "lg:ml-16") // Desktop: 64 expandido, 16 colapsado
                : "ml-0" // Móvil: siempre 0 porque es overlay
            }`}
          >
            <Header
              isSidebarOpen={isSidebarOpen}
              activeTab={activeTab}
              onToggleSidebar={toggleSidebar}
            />
            
            {/* Dashboard Content */}
            {activeTab === "dashboard" && (
              <div className="p-6">
                <StatsCards />
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <RecentCases />
                  </div>
                  <div className="space-y-6">
                    <ScheduleWidget />
                    <QuickActions />
                  </div>
                </div>
              </div>
            )}
            
            {/* Cases Tab */}
            {activeTab === "cases" && (
              <div className="p-6">
                <CasesTable />
              </div>
            )}
            
            {/* Other tabs */}
            {activeTab !== "dashboard" && activeTab !== "cases" && (
              <PlaceholderTab activeTab={activeTab} />
            )}
          </div>
        </div>
      </LayoutDashboard>
    </ThemeProvider>
  );
}