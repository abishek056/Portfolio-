import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImFolderDownload } from "react-icons/im";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCode } from 'react-icons/fa';
import image1 from '../assets/image/image.jpg';

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group ${isActive
      ? "bg-blue-600/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-blue-500/30"
      : "text-gray-400 hover:bg-slate-800/50 hover:text-white hover:scale-102"
    }`;

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/service', name: 'Services', icon: <FaCode /> },
    { path: '/portfolio', name: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-80 h-screen sticky top-0 flex flex-col justify-between p-6 bg-slate-900 border-r border-slate-800 hidden md:flex'
    >
      {/* Profile Section */}
      <div className='flex flex-col items-center mt-4'>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={image1}
            alt="Profile"
            className='relative w-32 h-32 rounded-full object-cover border-4 border-slate-800 shadow-2xl transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <div className='text-center mt-6'>
          <h2 className='font-bold text-2xl text-white tracking-wide'>
            Abishek <span className='text-blue-500'>Adhikari</span>
          </h2>
          <div className='mt-2 inline-block px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20'>
            <p className='text-sm text-blue-400 font-medium'>Frontend Developer</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex flex-col gap-2'>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={linkClasses}>
            <span className="text-xl group-hover:text-blue-400 transition-colors">{item.icon}</span>
            <span className='font-medium text-base'>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* CV Button */}
      <NavLink
        to="/cv"
        target="_blank"
        className='flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all font-semibold hover:scale-102 active:scale-95'
      >
        <span>Download CV</span>
        <ImFolderDownload className="text-xl" />
      </NavLink>
    </motion.div>
  );
};

export default Sidebar;