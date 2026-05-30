/**
 * Sidenav Component. This will take a list of SidenavItems and display them. 
 * When the user clicks on an item it will update the active item.
 * Depending on what the active item is new content will be shown on the screen.
 */

import { BatchGradeLogo } from "@/components/bg-logo";

// Interface to define the member variables of a sidenav item
interface SidenavItem {
  label: string | null;     // The text displayed for each item
  value: string;            // "login", "sign-up", some content value 
}

// Set of properties that need to be passed to this component.
interface SidenavProps {
  items: SidenavItem[];
  activeItem: string;
  onItemClick: (value: string | null) => void;
}

export function Sidenav(props: SidenavProps) {
  const listItems = props.items.map(item => 
    <li
      className={`border border-blue-500 cursor-pointer hover:bg-sky-700 pl-1 pb-1 pt-1 mb-1 ${props.activeItem === item.value ? "bg-sky-700" : ""}`}
      key={item.value}
      onClick={() => props.onItemClick(item.value)}>
      {item.label}
    </li>
  );
  return (
    <>
      {/* Sidenav */}
      <aside className="flex flex-col border border-black h-screen w-52">
        {/* Sidenav Title */}
        <header className="flex items-center border-b border-green-500 h-16 w-full p-4 text-xl">
          
          <button
            type="button"
            className="flex items-center"
            // If activeItem is set to null than it will display the default content
            onClick={() => props.onItemClick(null)}
          >
            <BatchGradeLogo />
            <div className="ml-4 border">
              Batch
              <span className="text-green-950"> Grade </span>
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
  )
}