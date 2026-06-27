import { FiTarget } from "react-icons/fi";

export default function DailyGoal() {
  const completed = 0;
  const target = 2;
  const progress = (completed / target) * 100;

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <FiTarget size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Daily Goal
          </h2>

          <p className="text-slate-400">
            Solve {target} problems today
          </p>
        </div>
      </div>

      <div className="mb-2 flex justify-between">
        <span>{completed}/{target} Completed</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4">
        <p className="text-cyan-300 font-medium">
          🚀 Keep going! Every solved problem makes you a stronger developer.
        </p>
      </div>

    </div>
  );
}