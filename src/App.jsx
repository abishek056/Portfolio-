import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import CV from './Pages/CV'
import Blog from './Pages/Blog'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-20">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none -z-10 dark:from-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

