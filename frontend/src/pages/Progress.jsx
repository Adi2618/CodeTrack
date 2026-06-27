import Sidebar from "../components/Sidebar";

export default function Progress() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-5xl font-black">
          Progress
        </h1>

        <p className="text-gray-400 mt-2">
          Track your coding journey here.
        </p>

      </div>

    </div>
  );
}