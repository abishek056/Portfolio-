import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import profile from '../assets/image/image.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left z-10"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full"
                    >
                        Available for hire in Nepal
                    </motion.span>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Hi, I'm <span className="text-gradient">Abishek Adhikari</span>
                    </h1>

                    <div className="h-12 md:h-16 mb-8">
                        <h2 className="text-2xl md:text-4xl font-semibold text-text-secondary">
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
                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/25 transition-all text-lg"
                            >
                                Hire Me
                            </motion.button>
                        </Link>
                        <Link to="/cv">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-bg-secondary hover:bg-bg-accent text-text-primary border border-glass-border rounded-2xl font-bold transition-all text-lg"
                            >
                                Download CV
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Enhanced Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="md:w-1/2 flex justify-center relative z-10"
                >
                    <div className="relative group p-4">
                        {/* Decorative Frames */}
                        <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-purple-600 rounded-[3rem] -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-700"></div>

                        <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/20 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src={profile}
                                alt="Abishek Adhikari"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
