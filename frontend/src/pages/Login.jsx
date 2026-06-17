import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black flex items-center justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-white text-center">
          CodeTrack
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Welcome Back
        </p>

        <form className="mt-8">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg mb-4 bg-white/20 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg mb-4 bg-white/20 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded-lg text-white"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-300 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}
