/**
 * This more or less handles all of the real "logic" behind integrating
 * with supabase. This is where we read, create, update, and delete test cases.
 * While the ID should be enough there is still not proper checks...
 */

"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

// This is all of the fields that I will read
export type TestCase = {
  id: number;
  name: string;
  input: string;
  output: string;
};

// Only these three for now, but set up to expand
export type TestCaseFields = Pick<TestCase, "name" | "input" | "output">;

// All other fields are not relevant at the moment or would just
// clog up the UI.
export const emptyTestCase: TestCaseFields = {
  name: "",
  input: "",
  output: ""
};

// These are the only columns we want back from Supabase right now.
const testCaseColumns = "id, name, input, output";

export function useTestCases() {
  // The test cases currently displayed on the dashboard
  const [testCases, setTestCases] = useState<TestCase[]>([]);

  // The values typed into the add form before submitting
  const [newTestCase, setNewTestCase] = useState<TestCaseFields>(emptyTestCase);

  // Read all test cases once when the dashboard loads
  useEffect(() => {
    const supabase = createClient();

    supabase
      .from("test_cases")
      .select(testCaseColumns)
      .then(({ data }) => setTestCases(data ?? []));
  }, []);

  // Create a new test case, then add it to the current list
  async function handleAddTestCase() {
    const supabase = createClient();
    const { data } = await supabase
      .from("test_cases")
      .insert([newTestCase])
      .select(testCaseColumns);

    setTestCases((currentTestCases) => [
      ...currentTestCases,
      ...(data ?? [])
    ]);
    setNewTestCase(emptyTestCase);
  }

  // Update an existing test case by its id
  async function handleUpdateTestCase(
    id: TestCase["id"],
    values: TestCaseFields,
  ) {
    const supabase = createClient();
    const { data } = await supabase
      .from("test_cases")
      .update(values)
      .eq("id", id)
      .select(testCaseColumns);
    const updatedTestCase = data?.[0];

    if (!updatedTestCase) return;

    setTestCases((currentTestCases) =>
      currentTestCases.map((testCase) =>
        testCase.id === id ? updatedTestCase : testCase
      )
    );
  }

  // Delete a test case by its row id
  async function handleDeleteTestCase(id: TestCase["id"]) {
    const supabase = createClient();

    await supabase.from("test_cases").delete().eq("id", id);

    setTestCases((currentTestCases) =>
      currentTestCases.filter((testCase) => testCase.id !== id)
    );
  }

  // Return everything the dashboard needs to display and change test cases
  return {
    handleAddTestCase,
    handleDeleteTestCase,
    handleUpdateTestCase,
    newTestCase,
    setNewTestCase,
    testCases
  };
}
