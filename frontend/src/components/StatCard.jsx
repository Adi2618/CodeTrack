export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}