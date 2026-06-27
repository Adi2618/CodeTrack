import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end mb-8">
      <button
        onClick={() => navigate("/profile")}
        className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-2 shadow-lg transition-all duration-300 hover:border-cyan-500 hover:scale-105"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white">
          <FiUser size={20} />
        </div>

        <div className="hidden md:block text-left">
          <p className="text-sm text-slate-400">Logged in as</p>
          <p className="font-semibold">Anandhu</p>
        </div>
      </button>
    </div>
  );
}