import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';

import profile1 from '../assets/image/home/profile1.jpg';
import profile2 from '../assets/image/home/profile2.jpg';
import profile3 from '../assets/image/home/profile3.jpg';
import profile4 from '../assets/image/home/profile4.jpg';
import profile5 from '../assets/image/home/profile5.jpg';

const AnimatedBackground = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <Sparkles count={300} scale={12} size={2} speed={0.4} opacity={0.6} color="#3b82f6" />
            <Sparkles count={200} scale={10} size={1.5} speed={0.2} opacity={0.4} color="#8b5cf6" />
        </Canvas>
    </div>
);

const Hero = () => {
    const profiles = [profile1, profile2, profile3, profile4, profile5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProfile = () => {
        setCurrentIndex((prev) => (prev + 1) % profiles.length);
    };

    return (
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden">
            <AnimatedBackground />
            
            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="flex-1 text-center md:text-left z-10"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full"
                    >
                        Available for hire in Nepal
                    </motion.span>

                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                        Hi, I'm <span className="text-gradient">Abishek Adhikari</span>
                    </h1>

                    <div className="h-10 md:h-16 mb-6 md:mb-8">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-text-secondary">
                            A <span className="text-blue-500">
                                <Typewriter
                                    words={["Frontend Developer", "Python Developer", "UI/UX Artist", "Innovator"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
                        I build modern, high-performance web applications from <span className="text-blue-500 font-bold">Itahari, Nepal</span>. Currently pursuing BIT and exploring new frontiers in tech.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/25 transition-all text-base md:text-lg"
                            >
                                Hire Me
                            </motion.button>
                        </Link>
                        <Link to="/cv">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-bg-secondary hover:bg-bg-accent text-text-primary border border-glass-border rounded-2xl font-bold transition-all text-base md:text-lg"
                            >
                                Download CV
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Enhanced Interactive Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="md:w-1/2 flex justify-center relative z-10"
                >
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="relative group p-4 cursor-pointer">
                        <div onClick={nextProfile} className="relative z-10 w-full h-full">
                            {/* Complex Glowing Aura */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-spin-slow group-hover:opacity-75 transition-all duration-500 -z-20"></div>
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-[spin_4s_linear_infinite_reverse] group-hover:opacity-60 transition-all duration-500 -z-20"></div>
                            
                            {/* Tech-inspired orbiting rings */}
                            <div className="absolute -inset-6 border border-blue-500/30 rounded-[3.5rem] animate-[spin_10s_linear_infinite] -z-10 group-hover:border-blue-400/60 transition-all duration-700 group-hover:scale-105"></div>
                            <div className="absolute -inset-10 border border-dashed border-purple-500/30 rounded-[4rem] animate-[spin_15s_linear_infinite_reverse] -z-10 group-hover:border-purple-400/60 transition-all duration-700 group-hover:scale-105"></div>
                            
                            {/* Decorative Background Frames */}
                            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 opacity-20 group-hover:rotate-12 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-purple-600 rounded-[2.5rem] -rotate-6 opacity-20 group-hover:-rotate-12 group-hover:scale-105 transition-transform duration-700"></div>

                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/20 backdrop-blur-sm transition-transform duration-700">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={profiles[currentIndex]}
                                    alt="Abishek Adhikari"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        ease: "easeOut"
                                    }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
