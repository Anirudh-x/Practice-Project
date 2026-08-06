import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";


function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-(--color-primary) font-semibold border-b-2 border-(--color-primary) pb-1"
      : "text-(--color-text-muted) hover:text-(--color-primary) transition";

  return (
    <nav className="bg-(--color-bg) z-10 w-full transition-colors duration-300 border-b border-(--color-nav) ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-(--color-primary) flex items-center gap-2">
          <FaBookOpen /> E-Learning
        </h1>

        <div className="flex gap-10 items-center justify-center">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/courses" className={navLinkStyle}>
            Courses
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>

        <div className="flex gap-5 items-center">
          <button className="text-white px-4 py-2 rounded-3xl transition bg-(--color-primary) hover:opacity-90">
            Sign Up
          </button>

          <button className="px-5 py-2 rounded-3xl border transition border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary-light)">
            Login
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center justify-center text-(--color-text-muted) ml-4"
            aria-label="Toggle theme"
          >
            {isDark ? <LuSun size={26} /> : <FiMoon size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
