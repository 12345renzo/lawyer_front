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
import { useTheme } from "@/components/layout/ThemeProvider";

// Componente interno que usa el hook useTheme
function DashboardContent() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);

  // Detectar si estamos en móvil y pantallas muy pequeñas
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setIsVerySmallScreen(width <= 500);
      if (width >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <LayoutDashboard>
      <div className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <Sidebar
          isOpen={isSidebarOpen}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onToggleSidebar={toggleSidebar}
          onCloseSidebar={closeSidebar}
        />

        {/* Overlay para móvil - debe ir DESPUÉS del Sidebar */}
        {isMobile && isSidebarOpen && !isVerySmallScreen && (
          <div
            className="fixed inset-0 lg:hidden z-40"
            style={{ left: isSidebarOpen ? '256px' : '0' }} // 256px = w-64 del sidebar
            onClick={handleOverlayClick}
          />
        )}

        <div
          className={`transition-all duration-300 ${
            !isMobile
              ? isSidebarOpen
                ? "lg:ml-64"
                : "lg:ml-16"
              : "ml-0"
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
  );
}

// Componente principal que envuelve con ThemeProvider
export default function DashboardPage() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
}