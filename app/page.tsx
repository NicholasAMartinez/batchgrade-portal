"use client";

import { LandingContent } from "@/components/landing-content"
import { SignUpForm } from "@/components/auth/sign-up-form";
import { LoginForm } from "@/components/auth/login-form";
import { Sidenav } from "@/components/sidenav";
import { useState } from "react";
import type { SidenavItem } from "@/components/sidenav";

const sidenavItems: SidenavItem[] = [
  { label: "Login", value: "login" },
  { label: "Sign Up", value: "sign-up" }
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
      />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        {/* Default Landing Content */}
        {!activeItem && <LandingContent />}

        {activeItem === "login" && <LoginForm />}

        {activeItem === "sign-up" && <SignUpForm />}
      </main>
    </div>
  );
}
