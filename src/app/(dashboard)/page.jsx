import LeaderboardPanel from "@/components/dashboard/LeaderboardPanel/LeaderboardPanel";
import ProgressSection from "@/components/dashboard/ProgressSection/ProgressSection";
import ProjectTestList from "@/components/dashboard/ProjectTestList/ProjectTestList";
import { XP_PROGRESS_DEFAULTS } from "@/data/xpProgressDefaults";

export default function DashboardPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden">
      <div className="shrink-0">
        <ProgressSection
          minXp={XP_PROGRESS_DEFAULTS.minXp}
          maxXp={XP_PROGRESS_DEFAULTS.maxXp}
          currentXp={XP_PROGRESS_DEFAULTS.currentXp}
        />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 overflow-hidden lg:grid-cols-[6fr_4fr] lg:items-stretch">
        <ProjectTestList className="min-h-0" />
        <LeaderboardPanel className="min-h-0" />
      </div>
    </div>
  );
}
