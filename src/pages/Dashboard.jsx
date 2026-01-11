import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import UserDashboard from "../components/dashboard/UserDashboard";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import ManagerDashboard from "../components/dashboard/ManagerDashboard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-bold text-teal-600">Dashboard</h1>

      <DashboardLayout role={role}>
        {(active) =>
          role === "admin" ? (
            <AdminDashboard activePage={active} />
          ) : role === "manager" ? (
            <ManagerDashboard activePage={active} />
          ) : (
            <UserDashboard activePage={active} user={user} />
          )
        }
      </DashboardLayout>

      <button onClick={handleLogout} className="btn btn-error btn-outline">
        Logout
      </button>
    </div>
  );
}
