export default function DifficultyCard() {
  const levels = [
    {
      name: "Easy",
      value: 0,
      color: "bg-green-500",
      width: "0%",
    },
    {
      name: "Medium",
      value: 0,
      color: "bg-yellow-500",
      width: "0%",
    },
    {
      name: "Hard",
      value: 0,
      color: "bg-red-500",
      width: "0%",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Difficulty Breakdown
      </h2>

      <div className="space-y-6">

        {levels.map((level) => (
          <div key={level.name}>

            <div className="flex justify-between mb-2">
              <span>{level.name}</span>
              <span className="text-slate-400">
                {level.value}
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full ${level.color} transition-all duration-700`}
                style={{ width: level.width }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}