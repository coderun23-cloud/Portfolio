import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaServicestack,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [delayedMenuOpen, setDelayedMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => {
        setDelayedMenuOpen(true);
      }, 100); // Adjust delay as needed
    } else {
      setDelayedMenuOpen(false);
      setMenuOpen(false);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6 },
    exit: { opacity: 0 },
  };

  const navItems = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/skills", icon: <FaTools />, label: "Skills" },
    { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "/services", icon: <FaServicestack />, label: "Services" },
    { to: "/resume", icon: <FaFileAlt />, label: "Resume" },
  ];

  return (
    <header className="relative z-50 bg-gray-900 border-b border-blue-500">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-100 ml-5">
          <Link to="/">NG</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 p-5 text-xl items-center mr-5">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center gap-2 transition duration-300 pb-1 ${
                  currentPath === to
                    ? "text-blue-400 border-b-2 border-blue-800"
                    : "text-white hover:text-blue-300 hover:border-b-2 hover:border-blue-800"
                }`}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white mr-5 z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Background Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {delayedMenuOpen && (
          <motion.ul
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-gray-800 px-6 py-4 space-y-4 text-lg z-40"
          >
            {navItems.map(({ to, icon, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={toggleMenu}
                  className={`flex items-center gap-2 transition duration-300 pb-1 ${
                    currentPath === to
                      ? "text-blue-400 border-b-2 border-blue-800"
                      : "text-white hover:text-blue-300 hover:border-b-2 hover:border-blue-800"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
