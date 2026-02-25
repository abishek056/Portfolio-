import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaBriefcase, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes, FaBlog } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/service', name: 'Services', icon: <FaCode /> },
    { path: '/portfolio', name: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/blog', name: 'Blog', icon: <FaBlog /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  const linkClasses = ({ isActive }) =>
    `relative flex items-center gap-2 px-4 py-2 transition-all duration-300 font-medium ${isActive ? 'text-blue-500' : 'text-text-secondary hover:text-blue-400'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className} ${scrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="font-bold text-xl md:text-2xl font-outfit tracking-tighter">
            Abishek Adhikari
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClasses}>
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-glass-border mx-2"></div>

          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-bg-secondary text-text-primary hover:bg-bg-accent transition-all border border-glass-border"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-bg-secondary text-text-primary transition-all border border-glass-border"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-primary"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-glass-border overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `flex items-center gap-4 text-xl font-bold py-2 ${isActive ? 'text-blue-500' : 'text-text-secondary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl text-blue-500/50">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export default Navbar;
