"use client";

import { useProjectSelection } from "@/components/dashboard/ProjectSelection/ProjectSelectionContext";
import ProjectTestCard from "@/components/ui/ProjectTestCard";

export default function ProjectTestListClient({ projects }) {
  const { selectedId, openProjectModal } = useProjectSelection();

  if (!projects.length) {
    return <p className="text-sm text-neutral-500">No projects.</p>;
  }

  return (
    <ul className="flex flex-col gap-4">
      {projects.map((p) => {
        const selected = selectedId === p.id;
        return (
          <li key={p.id}>
            <ProjectTestCard
              project={p}
              selected={selected}
              onSelect={() => openProjectModal(p.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
