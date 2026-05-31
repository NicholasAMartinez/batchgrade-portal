/**
 * This component will hold the content for the landing page. It can be expanded
 * as needed.
 */

export function LandingContent() {
  return (
    <div className="max-w-lg text-center">
      <div className="text-3xl font-semibold">
        Batch <span className="text-[var(--primary)]">Grade</span>
      </div>
      <div className="mt-4 text-xl text-[var(--muted-foreground)]">
        Automated grading tools for instructors and students.
      </div>
    </div>
  );
}
