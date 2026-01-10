import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user, role } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  const navLinkClass =
    "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-white/20 dark:hover:bg-white/10";

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-gradient-to-r from-emerald-400/90 via-cyan-400/90 to-purple-400/90 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
            SD
          </div>
          <span className="font-semibold text-white">StyleDecor</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2 text-white">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/coverage-map" className={navLinkClass}>
            Coverage
          </NavLink>

          {user && (
            <>
              <NavLink to="/booking" className={navLinkClass}>
                Booking
              </NavLink>
              <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
              </NavLink>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 relative">

          {/* LOGGED OUT */}
          {!user && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-white/80 text-gray-900 text-sm font-medium hover:bg-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-black/80 text-white text-sm font-medium hover:bg-black transition"
              >
                Register
              </Link>
            </>
          )}

          {/* LOGGED IN – PROFILE DROPDOWN */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition"
              >
                <span className="text-sm">
                  {user.displayName || "Account"}
                </span>
                <img
                  src={user.photoURL || "https://i.pravatar.cc/40"}
                  alt="profile"
                  className="w-8 h-8 rounded-full border border-white/40"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setProfileOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/dashboard/payments"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setProfileOpen(false)}
                  >
                    Payments
                  </Link>

                  {role === "admin" && (
                    <span className="block px-4 py-2 text-xs text-gray-500">
                      Admin Access
                    </span>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-white space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/coverage-map" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Coverage
          </NavLink>

          {user && (
            <>
              <NavLink to="/booking" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Booking
              </NavLink>
              <NavLink to="/dashboard" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Dashboard
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
