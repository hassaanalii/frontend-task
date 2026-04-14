"use client";

import { ProjectSelectionProvider } from "./ProjectSelectionContext";

export default function ProjectSelectionBoundary({ projects, children }) {
  return (
    <ProjectSelectionProvider projects={projects}>{children}</ProjectSelectionProvider>
  );
}
