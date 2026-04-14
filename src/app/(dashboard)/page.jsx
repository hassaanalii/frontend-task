import LeaderboardPanel from "@/components/dashboard/LeaderboardPanel/LeaderboardPanel";
import EditorPanel from "@/components/dashboard/EditorPanel/EditorPanel";
import ProgressSection from "@/components/dashboard/ProgressSection/ProgressSection";
import ProjectTestList from "@/components/dashboard/ProjectTestList/ProjectTestList";
import ProjectSelectionBoundary from "@/components/dashboard/ProjectSelection/ProjectSelectionBoundary";
import { XP_PROGRESS_DEFAULTS } from "@/data/xpProgressDefaults";
import { getProjects } from "@/lib/projects";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden">
      <div className="shrink-0">
        <ProgressSection
          minXp={XP_PROGRESS_DEFAULTS.minXp}
          maxXp={XP_PROGRESS_DEFAULTS.maxXp}
          currentXp={XP_PROGRESS_DEFAULTS.currentXp}
        />
      </div>
      <ProjectSelectionBoundary projects={projects}>
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 overflow-hidden lg:grid-cols-[6fr_4fr] lg:items-stretch">
          <div className="flex min-h-0 flex-col gap-4">
            <ProjectTestList projects={projects} className="min-h-0 flex-1" />
          </div>
          <LeaderboardPanel className="min-h-0" />
        </div>
        <EditorPanel />
      </ProjectSelectionBoundary>
    </div>
  );
}
