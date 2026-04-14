import ProgressSection from "@/components/dashboard/ProgressSection/ProgressSection";
import { XP_PROGRESS_DEFAULTS } from "@/data/xpProgressDefaults";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <ProgressSection
        minXp={XP_PROGRESS_DEFAULTS.minXp}
        maxXp={XP_PROGRESS_DEFAULTS.maxXp}
        currentXp={XP_PROGRESS_DEFAULTS.currentXp}
      />
    </div>
  );
}