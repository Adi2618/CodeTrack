import { FiClock } from "react-icons/fi";

export default function RecentActivity() {
  const activities = [
    {
      title: "No activity yet",
      time: "Start solving problems!",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
          <FiClock size={22} />
        </div>

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>
      </div>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex justify-between items-center rounded-2xl bg-slate-800/60 p-4 hover:bg-slate-800 transition"
          >
            <div>
              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {activity.time}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}