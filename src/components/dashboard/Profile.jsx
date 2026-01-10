import React, { useState } from "react";

export default function Profile({ user }) {
  const [name, setName] = useState(user?.displayName || "");
  const email = user?.email || "";

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className="input input-bordered w-full"
            value={email}
            disabled
          />
        </div>

        <button className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  );
}
