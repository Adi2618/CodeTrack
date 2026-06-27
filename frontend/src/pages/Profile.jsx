import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-5xl font-black mb-8">
          Profile
        </h1>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 max-w-xl">

          <div className="flex items-center gap-6">

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold">
              {username ? username[0].toUpperCase() : "U"}
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {username}
              </h2>

              <p className="text-gray-400">
                CodeTrack User
              </p>
            </div>

          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition duration-300"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}