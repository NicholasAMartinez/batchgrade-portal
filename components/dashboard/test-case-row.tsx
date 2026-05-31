/**
 * This as the name suggests is a complete row. Name, Input, Output.
 * From this we can prompt Update/Delete from CRUD. We will also display the content
 * so it is Read as well.
 */

"use client";

import { useState } from "react";
import type { TestCase, TestCaseFields } from "./test-cases";

// Props for updating/deleting
type TestCaseRowProps = {
  onDelete: (id: TestCase["id"]) => void;
  onUpdate: (id: TestCase["id"], values: TestCaseFields) => void;
  testCase: TestCase;
};

export function TestCaseRow(props: TestCaseRowProps) {
  // Are we editing true or false
  const [editing, setEditing] = useState(false);
  // For displaying
  const [values, setValues] = useState<TestCaseFields>({
    name: props.testCase.name,
    input: props.testCase.input,
    output: props.testCase.output
  });

  function saveTestCase() {
    props.onUpdate(props.testCase.id, values);
    setEditing(false);
  }

  return (
    <div className="border-b p-4">
      <div className="grid grid-cols-4 gap-2">
        {/* Column Header */}
        <div>
          <div className="text-sm">Name</div>
          <div>{props.testCase.name}</div>
        </div>
        <div>
          <div className="text-sm">Input</div>
          <div>{props.testCase.input}</div>
        </div>
        <div>
          <div className="text-sm">Output</div>
          <div>{props.testCase.output}</div>
        </div>
        {/* Edit/Delte Button group */}
        <div className="flex justify-self-end gap-2">
          <button
            className="inline-flex h-10 w-20 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium hover:bg-white/10"
            onClick={() => setEditing(!editing)}
          >
            Edit
          </button>

          <button
            className="inline-flex h-10 w-20 items-center justify-center rounded-md border px-3 text-sm font-medium text-red-500 hover:bg-red-700/50"
            onClick={() => props.onDelete(props.testCase.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Toggle for editing */}
      {editing && (
        <div className="mt-3 grid grid-cols-4 gap-2 border-t p-3">
          <input
            className="border bg-transparent p-2"
            onChange={(event) =>
              setValues({ ...values, name: event.target.value })
            }
            placeholder="Name"
            value={values.name}
          />
          <input
            className="border bg-transparent p-2"
            onChange={(event) =>
              setValues({ ...values, input: event.target.value })
            }
            placeholder="Input"
            value={values.input}
          />
          <input
            className="border bg-transparent p-2"
            onChange={(event) =>
              setValues({ ...values, output: event.target.value })
            }
            placeholder="Output"
            value={values.output}
          />
          <button
            className="inline-flex h-10 w-20 items-center justify-center justify-self-end rounded-md border border-[var(--ring)] bg-primary px-4 py-2 text-sm font-medium text-[var(--ring)] hover:bg-white/10"
            onClick={saveTestCase}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
