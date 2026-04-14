"use client";

import ProjectTestListClient from "./ProjectTestListClient";

export default function ProjectTestList({ projects, className = "" }) {
  if (!projects?.length) {
    return <p className="text-sm text-neutral-500">No projects.</p>;
  }

  return (
    <div
      className={`project-test-list-scroll flex flex-col pr-4 max-xl:max-h-none max-xl:overflow-visible xl:max-h-none xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-10 ${className}`}
    >
      <ProjectTestListClient projects={projects} />
    </div>
  );
}
