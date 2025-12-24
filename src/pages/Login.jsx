import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // ✅ use the same firebase.js
import toast from "react-hot-toast";



export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-teal-600">
            Login to StyleDecor
          </h2>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button className="btn btn-primary w-full">Login</button>
          </form>

          <p className="text-center text-sm mt-2">
            Don’t have an account?{" "}
            <Link to="/register" className="text-teal-600 font-semibold">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
