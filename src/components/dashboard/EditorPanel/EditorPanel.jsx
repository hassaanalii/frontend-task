"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useProjectSelection } from "@/components/dashboard/ProjectSelection/ProjectSelectionContext";

const PANEL_MS = 220;

export default function EditorPanel({ className = "" }) {
  const { selectedProject, isEditorOpen, closeProjectModal } =
    useProjectSelection();

  const [mounted, setMounted] = useState(false);
  const [enter, setEnter] = useState(false);

  const open = Boolean(isEditorOpen && selectedProject);

  useLayoutEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnter(true));
      });
      return () => cancelAnimationFrame(id);
    }
    setEnter(false);
  }, [open]);

  const handleBackdropTransitionEnd = useCallback(
    (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "opacity") return;
      if (!isEditorOpen) {
        setMounted(false);
      }
    },
    [isEditorOpen],
  );

  const handleDialogTransitionEnd = useCallback((e) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (!isEditorOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeProjectModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isEditorOpen, closeProjectModal]);

  if (!mounted || !selectedProject) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 transition-opacity ease-out sm:p-4 xl:p-4 ${className}`}
      style={{
        transitionDuration: `${PANEL_MS}ms`,
        opacity: enter ? 1 : 0,
      }}
      role="presentation"
      onTransitionEnd={handleBackdropTransitionEnd}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/50"
        aria-label="Close project details"
        onClick={closeProjectModal}
      />
      <section
        className="pointer-events-auto relative z-10 flex max-h-[min(90vh,520px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white px-4 py-4 shadow-lg transition-transform ease-out sm:px-5 xl:px-5"
        style={{
          transitionDuration: `${PANEL_MS}ms`,
          transform: enter ? "scale(1)" : "scale(0.96)",
        }}
        onTransitionEnd={handleDialogTransitionEnd}
        aria-labelledby="editor-panel-heading"
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-3 flex shrink-0 items-start justify-between gap-3">
          <h2
            id="editor-panel-heading"
            className="text-sm font-bold uppercase tracking-wide text-neutral-500"
          >
            Project details
          </h2>
          <button
            type="button"
            onClick={closeProjectModal}
            className="cursor-pointer rounded-lg p-1.5 text-lg leading-none text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-800"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto sm:flex-row sm:items-start">
          <span className="relative mx-auto size-24 shrink-0 overflow-hidden rounded-full bg-neutral-200 sm:mx-0">
            <Image
              src={selectedProject.imageUrl || "/user.jpg"}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-lg font-bold text-[#1970D3]">
              {selectedProject.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {selectedProject.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
