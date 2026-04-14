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
    <div className="flex flex-col gap-4 overflow-visible xl:min-h-0 xl:flex-1 xl:gap-6 xl:overflow-hidden">
      <div className="shrink-0">
        <ProgressSection
          minXp={XP_PROGRESS_DEFAULTS.minXp}
          maxXp={XP_PROGRESS_DEFAULTS.maxXp}
          currentXp={XP_PROGRESS_DEFAULTS.currentXp}
        />
      </div>
      <ProjectSelectionBoundary projects={projects}>
        <div className="grid grid-cols-1 gap-4 overflow-visible xl:min-h-0 xl:flex-1 xl:grid-cols-[6fr_4fr] xl:items-stretch xl:gap-6 xl:overflow-hidden">
          <div className="flex flex-col gap-4 max-xl:min-h-0 xl:min-h-0">
            <ProjectTestList
              projects={projects}
              className="max-xl:flex-none xl:min-h-0 xl:flex-1"
            />
          </div>
          <LeaderboardPanel className="max-xl:min-h-0 xl:min-h-0" />
        </div>
        <EditorPanel />
      </ProjectSelectionBoundary>
    </div>
  );
}
