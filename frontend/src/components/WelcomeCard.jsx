export default function WelcomeCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl">

      {/* Glow */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-between">

        <div>
          <p className="text-cyan-400 font-semibold mb-2">
            Welcome Back 👋
          </p>

          <h1 className="text-5xl font-extrabold">
            Ready to Code?
          </h1>

          <p className="text-slate-400 mt-4 max-w-xl">
            Solve problems, maintain your streak, and improve your programming
            skills every single day.
          </p>

          <button className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Start Practicing →
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl font-bold shadow-[0_0_40px_rgba(34,211,238,.4)]">
            A
          </div>
        </div>

      </div>
    </div>
  );
}