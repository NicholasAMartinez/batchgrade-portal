/**
 * Sidenav Component. This will take a list of SidenavItems and display them. 
 * When the user clicks on an item it will update the active item.
 * Depending on what the active item is new content will be shown on the screen.
 */

import { BatchGradeLogo } from "@/components/bg-logo";

// Interface to define the member variables of a sidenav item
export interface SidenavItem {
  label: string | null;     // The text displayed for each item
  value: string;            // "login", "sign-up", some content value 
}

// Set of properties that need to be passed to this component.
interface SidenavProps {
  items: SidenavItem[];
  activeItem: string | null;
  onItemClick: (value: string | null) => void;
}

export function Sidenav(props: SidenavProps) {
  // https://react.dev/learn/rendering-lists
  // Example of how to render a list
  const listItems = props.items.map(item => 
    <li
      className={`cursor-pointer rounded-md pl-3 p-2 mb-1 
      ${
        props.activeItem === item.value
          ? "bg-[var(--nav-active)] text-[var(--nav-active-foreground)]"
          : "text-[var(--foreground)] hover:bg-[var(--nav-hover)]"
      }`}
      key={item.value}
      onClick={() => props.onItemClick(item.value)}>
      {item.label}
    </li>
  );
  
  return (
    <>
      {/* Sidenav */}
      <aside className="flex flex-col h-screen w-52 border-r">
        {/* Sidenav Title */}
        <header className="border-b h-16 w-full p-2 pl-5 text-xl">
          <button
            type="button"
            className="flex items-center"
            // If activeItem is set to null than it will display the default content
            onClick={() => props.onItemClick(null)}
          >
            <BatchGradeLogo />
            <div className="ml-4">
              Batch
              <span className="text-[var(--primary)]"> Grade </span>
            </div>
          </button>
        </header>

        {/* Sidenav Navigation */}
        <nav className="p-2">
          <ul>
            {listItems}
          </ul>
        </nav>
      </aside>
    </>
  );
}
