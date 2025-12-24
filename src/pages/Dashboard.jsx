import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);


  // ✅ Listen to auth state properly
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/login");
      }
    });


    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="card w-full max-w-lg bg-white shadow-xl">
        <div className="card-body text-center space-y-4">
          <h2 className="text-2xl font-bold text-teal-600">
            Dashboard
          </h2>

          <p className="text-gray-600">
            Welcome to StyleDecor 🎨
          </p>

          {user && (
            <p className="text-sm text-gray-500">
              Logged in as: <strong>{user.email}</strong>
            </p>
          )}

          <button
            onClick={() => navigate("/dashboard/payments")}
            className="btn btn-outline btn-primary"
          >
            View Payment History
          </button>

          <button
            onClick={handleLogout}
            className="btn btn-error btn-outline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
