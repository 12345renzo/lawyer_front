"use client";

import React, { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <ThemeProvider>
      <LayoutDashboard>

        <div className="min-h-screen transition-all duration-300">
          <Sidebar
            isOpen={isSidebarOpen}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <div
            className={`transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
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
