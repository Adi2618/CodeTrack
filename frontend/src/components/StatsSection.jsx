import {
  FiCode,
  FiTrendingUp,
  FiClock,
  FiAward,
} from "react-icons/fi";

import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

      <StatCard
        title="Problems Solved"
        value="0"
        icon={<FiCode size={26} />}
        color="bg-cyan-500/20 text-cyan-400"
      />

      <StatCard
        title="Current Streak"
        value="0 🔥"
        icon={<FiTrendingUp size={26} />}
        color="bg-orange-500/20 text-orange-400"
      />

      <StatCard
        title="Practice Hours"
        value="0"
        icon={<FiClock size={26} />}
        color="bg-purple-500/20 text-purple-400"
      />

      <StatCard
        title="Level"
        value="1"
        icon={<FiAward size={26} />}
        color="bg-green-500/20 text-green-400"
      />

    </div>
  );
}