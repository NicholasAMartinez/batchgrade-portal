/**
 * Basic CRUD user interface.
 */

"use client";

import { useState } from "react";

export function DashboardContent() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full max-w-7xl border">
      <div className="border-b p-4">
        <div className="font-semibold">Test Cases</div>
      </div>

      <div className="grid grid-cols-4 gap-2 border-b p-4">
        <input
          className="border bg-transparent p-2"
          placeholder="Name"
        />
        <input
          className="border bg-transparent p-2"
          placeholder="Input"
        />
        <input
          className="border bg-transparent p-2"
          placeholder="Output"
        />
        <button
          className="inline-flex h-10 w-28 items-center justify-center justify-self-end rounded-md border border-[var(--ring)] bg-primary px-4 py-2 text-sm font-medium text-[var(--ring)] hover:bg-white/10"
          type="button"
        >
          + Add Case
        </button>
      </div>

      <div>
        <div className="border-b p-4">
          <div className="grid grid-cols-4 gap-2">
            <div>
              <div className="text-sm">Name</div>
              <div>Test Case</div>
            </div>
            <div>
              <div className="text-sm">Input</div>
              <div>Nicholas</div>
            </div>
            <div>
              <div className="text-sm">Output</div>
              <div>Hello Nicholas!</div>
            </div>

            <div className="flex justify-self-end gap-2">
              <button
                className="inline-flex h-10 w-20 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium hover:bg-white/10"
                onClick={() => setEditing(!editing)}
                type="button"
              >
                Edit
              </button>

              <button
                className="inline-flex h-10 w-20 items-center justify-center rounded-md border px-3 text-sm font-medium text-red-500 hover:bg-red-700/50"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Editing option if active */}
          {editing && (
            <div className="mt-3 grid grid-cols-4 gap-2 border-t p-3">
              <input
                className="border bg-transparent p-2"
                placeholder="Name"
              />
              <input
                className="border bg-transparent p-2"
                placeholder="Input"
              />
              <input
                className="border bg-transparent p-2"
                placeholder="Output"
              />
              <button
                className="inline-flex h-10 w-20 items-center justify-center justify-self-end rounded-md border border-[var(--ring)] bg-primary px-4 py-2 text-sm font-medium text-[var(--ring)] hover:bg-white/10"
                type="button"
              >
                Save
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center p-4 text-[var(--muted-foreground)]">
          No Test Cases Found
        </div>
      </div>
    </div>
  );
}
