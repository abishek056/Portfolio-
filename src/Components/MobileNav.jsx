import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { ImFolderDownload } from "react-icons/im";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { path: '/', name: 'Home', icon: <FaHome /> },
        { path: '/service', name: 'Services', icon: <FaCode /> },
        { path: '/portfolio', name: 'Portfolio', icon: <FaBriefcase /> },
        { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
    ];

    const linkClasses = ({ isActive }) =>
        `flex items-center gap-4 px-6 py-4 text-lg rounded-xl transition-all duration-300 ${isActive
            ? "bg-blue-600/20 text-blue-400 font-bold"
            : "text-gray-300 hover:bg-white/10"
        }`;

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden fixed top-4 right-4 z-50 p-3 bg-slate-800 text-white rounded-full shadow-lg border border-slate-700 hover:bg-slate-700 transition-colors"
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-slate-900 z-40 md:hidden flex flex-col pt-24 px-6"
                    >
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={linkClasses}
                                    onClick={toggleMenu}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                </NavLink>
                            ))}

                            <a
                                href="/cv"
                                target="_blank"
                                className='flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 rounded-xl shadow-lg mt-6 font-bold'
                                onClick={toggleMenu}
                            >
                                <span>Download CV</span>
                                <ImFolderDownload className="text-xl" />
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNav;
