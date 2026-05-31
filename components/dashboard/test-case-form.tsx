/**
 * This more or less represents adding a complete row. Name, Input, Output, along with
 * the + Add button. This is the Create of CRUD
 */

"use client";

import type { TestCaseFields } from "./test-cases";

// Props to use the CRUD operation in this case Create.
type TestCaseFormProps = {
  onChange: (values: TestCaseFields) => void;
  onSubmit: () => void;
  values: TestCaseFields;
};

export function TestCaseForm(props: TestCaseFormProps) {
  return (
    <div className="grid grid-cols-4 gap-2 border-b p-4">
      
      {/* Name Input */}
      <input
        className="border bg-transparent p-2"
        onChange={(event) =>
          props.onChange({ ...props.values, name: event.target.value })
        }
        placeholder="Name"
        value={props.values.name}
      />

      {/* Test Case Input Input */}
      <input
        className="border bg-transparent p-2"
        onChange={(event) =>
          props.onChange({ ...props.values, input: event.target.value })
        }
        placeholder="Input"
        value={props.values.input}
      />

      {/* Test Case Output Input */}
      <input
        className="border bg-transparent p-2"
        onChange={(event) =>
          props.onChange({ ...props.values, output: event.target.value })
        }
        placeholder="Output"
        value={props.values.output}
      />

      {/* Add/Submit */}
      <button
        className="inline-flex h-10 w-28 items-center justify-center justify-self-end rounded-md border border-[var(--ring)] bg-primary px-4 py-2 text-sm font-medium text-[var(--ring)] hover:bg-white/10"
        onClick={props.onSubmit}
      >
        + Add Case
      </button>
    </div>
  );
}
