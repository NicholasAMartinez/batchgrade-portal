/**
 * Basic CRUD user interface. Split into components for a better separation.
 */

"use client";

import { TestCaseForm } from "./test-case-form";
import { TestCaseRow } from "./test-case-row";
import { useTestCases } from "./test-cases";

export function DashboardContent() {
  const {
    handleAddTestCase,
    handleDeleteTestCase,
    handleUpdateTestCase,
    newTestCase,
    setNewTestCase,
    testCases
  } = useTestCases();

  return (
    <div className="w-full max-w-7xl border">
      <div className="border-b p-4">
        <div className="font-semibold">Test Cases</div>
      </div>

      <TestCaseForm
        onChange={setNewTestCase}
        onSubmit={handleAddTestCase}
        values={newTestCase}
      />

      <div>
        {testCases.map((testCase) => (
          <TestCaseRow
            key={testCase.id}
            onDelete={handleDeleteTestCase}
            onUpdate={handleUpdateTestCase}
            testCase={testCase}
          />
        ))}

        {testCases.length === 0 && (
          <div className="flex justify-center p-4 text-[var(--muted-foreground)]">
            No Test Cases Found
          </div>
        )}
      </div>
    </div>
  );
}
