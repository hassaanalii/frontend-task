"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

function formatTime(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function ProjectNotes({ projectId }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const load = useCallback(async () => {
    if (!projectId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/projects/${projectId}/notes`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load notes");
      setNotes(data.notes ?? []);
    } catch (e) {
      toast.error(e.message || "Could not load notes");
      setNotes([]);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/projects/${projectId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save note");

      setText("");
      setNotes((prev) => [data.note, ...prev]);
      toast.success("Note saved");
    } catch (err) {
      toast.error(err.message || "Could not save note");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-5 border-t border-neutral-200 pt-4">
      <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-neutral-500">
        Notes
      </h3>

      <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
        <label htmlFor="project-note" className="sr-only">
          New note
        </label>
        <textarea
          id="project-note"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          maxLength={4000}
          placeholder="Write a note about this project…"
          className="w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#1970D3] focus:outline-none focus:ring-2 focus:ring-[#1970D3]/25"
        />
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-neutral-400">{text.length}/4000</span>
          <button
            type="submit"
            disabled={submitting || !text.trim()}
            className="rounded-xl bg-[#1970D3] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1560b8] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Saving…" : "Save note"}
          </button>
        </div>
      </form>

      <div className="max-h-40 overflow-y-auto pr-1 scrollbar-hidden">
        {loading ? (
          <p className="text-sm text-neutral-400">Loading notes…</p>
        ) : notes.length === 0 ? (
          <p className="text-sm text-neutral-400">No notes yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {notes.map((n) => (
              <li
                key={n.id}
                className="rounded-lg border border-neutral-100 bg-neutral-50/80 px-3 py-2 text-sm text-neutral-700"
              >
                <p className="whitespace-pre-wrap break-words">{n.body}</p>
                <p className="mt-1 text-xs text-neutral-400">
                  {formatTime(n.createdAt)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
