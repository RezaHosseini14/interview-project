import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface DashboardLayoutProps {
  children: ReactNode;
  handleSelect: (id: string) => void;
}

function DashboardLayout({ children, handleSelect }: DashboardLayoutProps) {
  return (
    <div className="p-8 flex flex-col gap-8 h-screen">
      <Header />
      <div className="flex gap-8 flex-1">
        <Sidebar handleSelect={handleSelect} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
