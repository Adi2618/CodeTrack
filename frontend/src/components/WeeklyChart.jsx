export default function WeeklyChart() {
  const bars = [20, 45, 35, 80, 55, 70, 40];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Progress
      </h2>

      <div className="flex items-end justify-between h-56">

        {bars.map((height, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-8 rounded-t-xl bg-gradient-to-t from-cyan-600 to-cyan-300 transition-all duration-500 hover:scale-110"
              style={{ height: `${height}%` }}
            ></div>

            <span className="text-xs text-slate-400">
              {["M","T","W","T","F","S","S"][index]}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}