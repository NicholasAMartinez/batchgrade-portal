"use client";
import { Sidenav } from "@/components/sidenav";
import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { SignUpForm } from "@/components/sign-up-form";


export default function Home() {
  const sidenavItems = [
    { label: "Login", value: "login" },
    { label: "Sign Up", value: "sign-up" },
  ];

  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    /* The Page */
    <div className="flex flex-row ">

      {/* Sidenav */}
      <Sidenav
        items={sidenavItems}
        activeItem={activeItem}
        onItemClick={setActiveItem}
      />

      {/* Main Content */}
      <main className="flex items-center justify-center border border-red-500 h-screen flex-1">
        
          {!activeItem && (
            <div>
              Home Content
            </div>
          )}

          {activeItem === "login" && (
            <div>
              <LoginForm />
            </div>
          )}

          {activeItem === "sign-up" && (
            <div>
              <SignUpForm />
            </div>
          )}
      </main>
    </div>
  );
}
