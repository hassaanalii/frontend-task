import { getProjects } from "@/lib/projects";
import ProjectTestListClient from "./ProjectTestListClient";

export default async function ProjectTestList({ className = "" }) {
  const projects = await getProjects();

  return (
    <div
      className={`project-test-list-scroll flex min-h-0 flex-col overflow-y-auto pr-10 ${className}`}
    >
      <ProjectTestListClient projects={projects} />
    </div>
  );
}
