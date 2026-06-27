import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBook, FiBarChart2 } from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiHome />,
    },
    {
      name: "Problems",
      path: "/problems",
      icon: <FiBook />,
    },
    {
      name: "Progress",
      path: "/progress",
      icon: <FiBarChart2 />,
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-white/5 backdrop-blur-2xl border-r border-white/10 p-6 relative z-20 flex-shrink-0">

      <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10">
        CodeTrack
      </h2>

      <ul className="space-y-3">

        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:translate-x-2 ${
                location.pathname === item.path
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}