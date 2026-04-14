"use client";

import ProjectTestListClient from "./ProjectTestListClient";

export default function ProjectTestList({ projects, className = "" }) {
  if (!projects?.length) {
    return <p className="text-sm text-neutral-500">No projects.</p>;
  }

  return (
    <div
      className={`project-test-list-scroll flex min-h-0 flex-col overflow-y-auto pr-10 ${className}`}
    >
      <ProjectTestListClient projects={projects} />
    </div>
  );
}
