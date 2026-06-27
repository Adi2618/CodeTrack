import Sidebar from "../components/Sidebar";

export default function Problems() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-5xl font-black">
          Problems
        </h1>

        <p className="text-gray-400 mt-2">
          Manage all solved coding problems.
        </p>

      </div>

    </div>

  );
}