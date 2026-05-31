"use client";

import { Sidenav } from "@/components/sidenav";
import { useState } from "react";
import { DashboardContent } from "@/components/dashboard/dashboard"
import type { SidenavItem } from "@/components/sidenav";

const sidenavItems: SidenavItem[] = [
  { label: "Other", value: "other" }
];

export default function Home() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    /* The Page */
    <div className="flex flex-row">
      {/* Sidenav */}
      <Sidenav
        items={sidenavItems}
        activeItem={activeItem}
        onItemClick={setActiveItem}
        showLogout={true}             // Users are logged in at this point.
      />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        {/* Default Landing Content */}
        {!activeItem && ( <DashboardContent /> )}

        {activeItem === "other" && (
          <div className="text-xl">
            This is simply an example of how it could be extended or CRUD features separated into their own "pages".
          </div>
        )}

      </main>
    </div>
  );
}
