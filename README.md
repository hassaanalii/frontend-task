# frontend-task

Next.js 16 (App Router) dashboard UI: sidebar navigation, project list with detail modal, leaderboard, XP progress, and per-project notes. Styling uses Tailwind CSS v4 and the Nunito font.

---

## Component structure

High-level layout: **`RootLayout`** → **`(dashboard)/layout`** wraps **`AppShell`**, which composes **`Sidebar`**, **`AppHeader`**, and **`main`** (dashboard page content).

| Area | Path | Role |
|------|------|------|
| **App shell** | `src/components/AppShell.jsx` | Wraps the app in **`SidebarNavProvider`** and **`SidebarDrawerProvider`**, places sidebar + header + scrollable main. |
| **Essentials** | `src/components/essentials/` | **`Sidebar`**, **`AppHeader`**, **`MobileNavToggle`** (hamburger for `< xl`). |
| **Navigation** | `src/components/navigation/` | **`SidebarNavContext`**, **`SidebarDrawerContext`** — client providers only (no UI). |
| **Dashboard** | `src/components/dashboard/` | Feature folders: **`EditorPanel`**, **`ProjectTestList`** (+ **`ProjectTestListClient`**), **`LeaderboardPanel`** (+ **`LeaderboardPanelClient`**), **`ProgressSection`**, **`ProjectSelection`**, **`ProjectNotes`**. |
| **UI** | `src/components/ui/` | Reusable widgets: **`ProjectTestCard`**, **`RankingCard`**, **`XpProgressBar`**, **`ToasterHost`**. |
| **Utilities** | `src/util/leaderboard/` | Leaderboard-specific presentational pieces (**`RankCircle`**, **`Stars`**, etc.) used by **`RankingCard`**. |
| **Data / icons** | `src/data/`, `src/icons/` | Static config (**`sidebarData.js`**, **`xpProgressDefaults.js`**) and **`sidebarIcons.jsx`**. |
| **App routes** | `src/app/` | **`layout.js`**, **`globals.css`**, **`(dashboard)/page.jsx`**, **`api/**`**. |

**Server vs client:** Pages and panels such as **`LeaderboardPanel`** and **`(dashboard)/page`** are async Server Components where possible. Interactive pieces are marked **`"use client"`** (e.g. **`Sidebar`**, **`EditorPanel`**, **`ProjectTestList`**, **`ProjectNotes`**, context providers).

---

## State management approach

There is **no global store** (no Redux/Zustand). State is **React `useState` + Context** where cross-component coordination is needed.

1. **`ProjectSelectionContext`** (`ProjectSelectionBoundary` / `ProjectSelectionContext.jsx`)  
   - Holds **`projects`** (from the server page), **`selectedId`**, **`selectedProject`**, **`isEditorOpen`**, and actions **`openProjectModal`**, **`closeProjectModal`**, **`selectProjectById`**.  
   - Used by **`ProjectTestListClient`**, **`EditorPanel`**, and **`ProjectNotes`** (via **`projectId`** from selection).

2. **`SidebarNavContext`** (`SidebarNavContext.jsx`)  
   - **`activeNavId`** and **`setActiveNavId`** for sidebar item highlighting.

3. **`SidebarDrawerContext`** (`SidebarDrawerContext.jsx`)  
   - Mobile (`< xl`): **`isOpen`**, **`open`**, **`close`**, **`toggle`** for the sliding sidebar; body scroll lock and Escape handling live here.

4. **Local UI state**  
   - Examples: editor modal mount/enter animation (**`EditorPanel`**), notes textarea and fetch lifecycle (**`ProjectNotes`**), **`XpProgressBar`** display percentage.

**Data loading:** Initial **projects** and **leaderboard** rows are loaded on the **server** via **`getProjects()`** / **`getLeaderboard()`** in **`src/lib/`** and passed as props. **Notes** are loaded and submitted from the **client** with **`fetch`** to the notes API (see below).

---

## API integration

Routes live under **`src/app/api/`**. Shared mock logic lives in **`src/lib/`** so Server Components and route handlers stay aligned.

| Endpoint | Handler | Data source | Used by |
|----------|---------|-------------|---------|
| **`GET /api/projects`** | `app/api/projects/route.js` | **`getProjects()`** → `lib/projects.js` | Could be used for client refetch; dashboard page calls **`getProjects()`** directly on the server. |
| **`GET /api/leaderboard`** | `app/api/leaderboard/route.js` | **`getLeaderboard()`** → `lib/leaderboard.js` | Same pattern as projects. |
| **`GET /api/projects/[projectId]/notes`** | `app/api/projects/[projectId]/notes/route.js` | **`getNotesForProject()`** → `lib/notes.js` | **`ProjectNotes`** on load / refresh. |
| **`POST /api/projects/[projectId]/notes`** | Same file | **`addNoteToProject()`** → `lib/notes.js` | **`ProjectNotes`** submit; body JSON **`{ "body": string }`**. |

**Notes storage:** `lib/notes.js` keeps an **in-memory `Map`** per project ID (survives for the life of the Node process). Replace with a database for production.

**Feedback:** Successful note save triggers **`toast.success`** via **Sonner**; errors use **`toast.error`**. **`ToasterHost`** is mounted in **`src/app/layout.js`**.

---

## Scripts

- **`npm run dev`** — development server  
- **`npm run build`** — production build  
- **`npm run start`** — production server  
- **`npm run lint`** — ESLint  
