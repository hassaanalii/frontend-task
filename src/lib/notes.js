/**
 * In-memory notes per project (dev / demo). Survives for the lifetime of the Node process.
 * Replace with a database in production.
 */

/** @type {Map<string, Array<{ id: string, projectId: string, body: string, createdAt: string }>>} */
const notesByProject = new Map();

export function getNotesForProject(projectId) {
  const list = notesByProject.get(projectId);
  return list ? [...list] : [];
}

export function addNoteToProject(projectId, body) {
  const trimmed = body.trim();
  if (!trimmed) {
    throw new Error("EMPTY_NOTE");
  }
  const list = notesByProject.get(projectId) ?? [];
  const note = {
    id: crypto.randomUUID(),
    projectId,
    body: trimmed,
    createdAt: new Date().toISOString(),
  };
  notesByProject.set(projectId, [note, ...list]);
  return note;
}
