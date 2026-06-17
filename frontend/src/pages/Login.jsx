import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "",
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.message === "Login successful") {
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black flex items-center justify-center">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-white text-center">
          CodeTrack
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Welcome Back
        </p>

        <form className="mt-8" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg mb-4 bg-white/20 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
