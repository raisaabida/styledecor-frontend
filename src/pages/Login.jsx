import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        "demo@styleddecor.com",
        "123456"
      );
      toast.success("Demo login successful");
      navigate("/dashboard");
    } catch {
      toast.error("Demo account not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body space-y-3">
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

            <button
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <button
            onClick={handleDemoLogin}
            className="btn btn-outline w-full"
            disabled={loading}
          >
            Demo Login
          </button>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-teal-600 font-semibold"
            >
              Register
            </Link>
          </p>

          <p className="text-xs text-center text-gray-500">
            Demo credentials: demo@styleddecor.com / 123456
          </p>
        </div>
      </div>
    </div>
  );
}
