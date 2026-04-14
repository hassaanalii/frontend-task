"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ProjectSelectionContext = createContext(null);

export function ProjectSelectionProvider({ projects, children }) {
  const [selectedId, setSelectedId] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const selectProjectById = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const openProjectModal = useCallback((id) => {
    setSelectedId(id);
    setIsEditorOpen(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsEditorOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      projects,
      selectedId,
      selectedProject,
      isEditorOpen,
      selectProjectById,
      openProjectModal,
      closeProjectModal,
    }),
    [
      projects,
      selectedId,
      selectedProject,
      isEditorOpen,
      selectProjectById,
      openProjectModal,
      closeProjectModal,
    ],
  );

  return (
    <ProjectSelectionContext.Provider value={value}>
      {children}
    </ProjectSelectionContext.Provider>
  );
}

export function useProjectSelection() {
  const ctx = useContext(ProjectSelectionContext);
  if (!ctx) {
    throw new Error(
      "useProjectSelection must be used within ProjectSelectionProvider",
    );
  }
  return ctx;
}
