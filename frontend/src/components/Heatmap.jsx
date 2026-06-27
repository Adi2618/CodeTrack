export default function Heatmap() {
  const activity = Array.from({ length: 140 }, () =>
    Math.floor(Math.random() * 5)
  );

  const colors = [
    "bg-slate-800",
    "bg-cyan-900",
    "bg-cyan-700",
    "bg-cyan-500",
    "bg-cyan-300",
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Coding Activity
        </h2>

        <span className="text-slate-400 text-sm">
          Last 20 Weeks
        </span>
      </div>

      <div className="grid grid-cols-20 gap-2">
        {activity.map((level, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-sm ${colors[level]} transition-all duration-300 hover:scale-125`}
          />
        ))}
      </div>

      <div className="flex justify-end items-center gap-2 mt-5 text-xs text-slate-400">
        <span>Less</span>

        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded ${color}`}
          />
        ))}

        <span>More</span>
      </div>

    </div>
  );
}