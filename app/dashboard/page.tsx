"use client";

import { Sidenav } from "@/components/sidenav";
import { useState } from "react";
import type { SidenavItem } from "@/components/sidenav";

const sidenavItems: SidenavItem[] = [
  { label: "Place Holder", value: "placeholder" }
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
        {!activeItem && (
          <div>
            Example default
          </div>
        )}

        {activeItem === "placeholder" && (
          <div>
            Sample
          </div>
        )}

      </main>
    </div>
  );
}
