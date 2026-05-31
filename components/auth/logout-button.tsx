"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <button
      className="border p-2 justify-center w-full hover:bg-red-700/50"
      onClick={logout}
    >
      Logout
    </button>
  );
}
