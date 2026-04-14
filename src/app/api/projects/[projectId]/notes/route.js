import { NextResponse } from "next/server";
import { addNoteToProject, getNotesForProject } from "@/lib/notes";

const MAX_LEN = 4000;

export async function GET(_request, { params }) {
  const { projectId } = await params;
  if (!projectId) {
    return NextResponse.json({ error: "Missing project" }, { status: 400 });
  }
  const notes = getNotesForProject(projectId);
  return NextResponse.json({ notes });
}

export async function POST(request, { params }) {
  const { projectId } = await params;
  if (!projectId) {
    return NextResponse.json({ error: "Missing project" }, { status: 400 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const raw = typeof payload.body === "string" ? payload.body : "";
  if (raw.length > MAX_LEN) {
    return NextResponse.json(
      { error: `Note must be at most ${MAX_LEN} characters` },
      { status: 400 },
    );
  }

  try {
    const note = addNoteToProject(projectId, raw);
    return NextResponse.json({ note }, { status: 201 });
  } catch (e) {
    if (e.message === "EMPTY_NOTE") {
      return NextResponse.json({ error: "Note cannot be empty" }, { status: 400 });
    }
    throw e;
  }
}
