import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseToken = await cred.user.getIdToken();

      const res = await fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, firebaseToken }),
      });

      const data = await res.json();
      localStorage.setItem("access-token", data.token);

      toast.success("Account created!");
      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-teal-600">Register</h2>

          <form onSubmit={handleRegister} className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button className="btn btn-primary w-full">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
