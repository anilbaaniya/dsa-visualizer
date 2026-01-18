import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="overflow-y-auto flex-1 relative">
        <Outlet />
      </main>
    </div>
  );
}
