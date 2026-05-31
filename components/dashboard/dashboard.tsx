/**
 * Basic CRUD user interface. This will handle 
 */

export function DashboardContent() {
  return (
    <div className="w-full max-w-7xl p-4 border ">
      <div className="flex mb-4 p-3 justify-between border">
        <div>Test Cases</div>
        <button className="border  px-3">
          + Add Case
        </button>
      </div>

      <div className="border ">
        <div className="flex justify-between border-b  p-3">
          <div className="border  p-2">
            ID | USER_ID | INSERTED_AT | UPDATED_AT | NAME | INPUT | OUTPUT 
          </div>

          <div className="flex gap-2 border  p-2">
            <button className="border  px-2">
              ...
            </button>
            <button className="border  px-2 text-red-600">
              X
            </button>
          </div>
        </div>

        <div className="flex justify-center p-3">
          No Test Cases Found
        </div>
      </div>
    </div>
  );
}
