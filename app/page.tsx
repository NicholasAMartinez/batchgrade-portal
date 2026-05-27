import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { BatchGradeLogo } from "@/components/bg-logo";

export default function Home() {
  return (
    /* The Page */
    <div className="flex flex-row ">

      {/* Sidenav */}
      <aside className="flex flex-col border border-black h-screen w-52">
        {/* Sidenav Title */}
        <header className="flex items-center border-b border-green-500 h-16 w-full p-4 text-xl">
          <BatchGradeLogo />
          <div className="ml-4 border">
            Batch 
            <span className="text-green-950"> Grade </span>
          </div>
        </header>

        {/* Sidenav Navigation */}
        <nav className="p-4">
          <ul>
            <li className="border border-blue-500 p-2 mb-1">Login</li>
            <li className="border border-blue-500 p-2 mb-1">Sign Up</li>
            <li className="border border-blue-500 p-2 mb-1">Visit Website</li>
            <li className="border border-blue-500 p-2 mb-1">About</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex items-center justify-center border border-red-500 h-screen flex-1">
        <div className="text-center border w-64 h-32">
          Card Content
        </div>
      </main>
    </div>



    // Keep as a reference for now 
    // <main className="min-h-screen flex flex-col items-center">
    //   <div className="flex-1 w-full flex flex-col gap-20 items-center">
    //     <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //       <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
    //         <div className="flex gap-5 items-center font-semibold">
    //           <Link href={"/"}>Next.js Supabase Starter</Link>
    //         </div>
    //           <Suspense>
    //             <AuthButton />
    //           </Suspense>
    //       </div>
    //     </nav>
    //     <div>
    //       Home
    //     </div>
    //   </div>
    // </main>
  );
}
