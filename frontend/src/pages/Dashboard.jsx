import Sidebar from "../components/Sidebar";
import ProfileButton from "../components/ProfileButton";
import WelcomeCard from "../components/WelcomeCard";
import StatsSection from "../components/StatsSection";
import DifficultyCard from "../components/DifficultyCard";
import DailyGoal from "../components/DailyGoal";
import Heatmap from "../components/Heatmap";
import RecentActivity from "../components/RecentActivity";
import WeeklyChart from "../components/WeeklyChart";

export default function Dashboard() {
  return (
    <div className="relative flex min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <WelcomeCard />
          <ProfileButton />
        </div>

        {/* Statistics */}
        <StatsSection />

        {/* Middle Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <DifficultyCard />
          <DailyGoal />
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <WeeklyChart />
          <RecentActivity />
        </div>

        {/* Heatmap */}
        <div className="mt-6">
          <Heatmap />
        </div>

      </main>

    </div>
  );
}