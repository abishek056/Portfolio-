import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload, FaFacebook, FaCalendar, FaFlag, FaUser, FaVenusMars } from 'react-icons/fa';
import profileImage from '../assets/image/cv_profile.jpg';

const CV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen py-10 flex justify-center items-start">
            {/* Print Button (Hidden when printing) */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 print:hidden hover:bg-blue-700 transition-colors"
            >
                <FaDownload />
                <span className="font-bold">Download / Print CV</span>
            </motion.button>

            {/* CV Container - A4 Size equivalent aspect ratio */}
            <div
                id="cv-content"
                className="w-[210mm] min-h-[297mm] bg-white text-slate-800 shadow-2xl overflow-hidden relative print:shadow-none print:w-full print:h-full print:m-0 print:rounded-none"
            >
                {/* Header / Top Section */}
                <div className="bg-slate-900 text-white p-8 flex justify-between items-center print:bg-slate-900 print:-webkit-print-color-adjust-exact">
                    <div className="flex items-center gap-6">
                        {/* Photo for Mobile/Header view if needed, but primarily in sidebar as per design request. 
                             However, standard CV headers often have it. Let's put it in Sidebar as per plan, 
                             or if layout demands, in header. The previous design didn't have it.
                             I will place it in the Left Column (Sidebar) as per standard Bio-data format.
                         */}
                        <div>
                            <h1 className="text-4xl font-bold uppercase tracking-wider">Abishek <span className="text-blue-500">Adhikari</span></h1>
                            <h2 className="text-xl mt-2 text-blue-200 font-medium">Frontend Developer</h2>
                        </div>
                    </div>
                    <div className="text-right text-sm space-y-2 text-slate-300">
                        <p className="flex items-center justify-end gap-2"><FaEnvelope /> abishekadhikari056@gmail.com</p>
                        <p className="flex items-center justify-end gap-2"><FaPhone /> +977 9767377096</p>
                        <p className="flex items-center justify-end gap-2"><FaMapMarkerAlt /> Okhaldhunga-03, Manebhanjyang, Nepal</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-12 h-full">

                    {/* Left Column (Sidebar) */}
                    <div className="col-span-4 bg-slate-100 p-6 border-r border-slate-200 print:bg-slate-100 print:-webkit-print-color-adjust-exact">

                        {/* Profile Image */}
                        <div className="mb-6 flex justify-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-300 shadow-md">
                                <img src={profileImage} alt="Abishek Adhikari" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Personal Details (From Image) */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Personal Details</h3>
                            <ul className="space-y-3 text-sm text-slate-700">
                                <li className="flex items-center gap-2"><FaCalendar className="text-blue-500" /> <span className="font-semibold">DOB:</span> 2005-12-13</li>
                                <li className="flex items-center gap-2"><FaFlag className="text-blue-500" /> <span className="font-semibold">Nationality:</span> Nepali</li>
                                <li className="flex items-center gap-2"><FaUser className="text-blue-500" /> <span className="font-semibold">Marital Status:</span> Single</li>
                                <li className="flex items-center gap-2"><FaVenusMars className="text-blue-500" /> <span className="font-semibold">Sex:</span> Male</li>
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Skills</h3>
                            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
                                <li>Frontend Developer</li>
                                <li>Python</li>
                                <li>Github</li>
                                <li>Graphic Designing</li>
                                <li>Office Package</li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Education</h3>

                            <div className="mb-4">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Primary Education</span>
                                <h4 className="font-bold text-slate-800 mt-1">Horizon Academy</h4>
                                <p className="text-xs text-slate-600">SEE / 3 GPA</p>
                                <p className="text-xs text-slate-500">Sept, 2022</p>
                            </div>

                            <div>
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Secondary Education</span>
                                <h4 className="font-bold text-slate-800 mt-1">Purwanchal Boarding Secondary School</h4>
                                <p className="text-xs text-slate-600">SEE / 3.03 GPA</p>
                                <p className="text-xs text-slate-500">Year: 2024</p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Links</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex items-center gap-2 overflow-hidden text-ellipsis"><FaGithub className="text-slate-800 flex-shrink-0" /> <a href="https://github.com/abishek056" className="hover:text-blue-600">github.com/abishek056</a></li>
                                <li className="flex items-center gap-2 overflow-hidden text-ellipsis"><FaFacebook className="text-blue-600 flex-shrink-0" /> <a href="https://www.facebook.com/" className="hover:text-blue-600">facebook.com</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-8 p-8">
                        {/* Objective */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Objective</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                I seek challenging opportunities where I can fully use my skills for the success of the organization.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Experience</h3>

                            <div className="mb-6">
                                <h4 className="font-bold text-lg text-slate-800">Freelance Web Developer</h4>
                                <p className="text-sm text-blue-600 font-medium mb-2">Self-Employed | 2023 - Present</p>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                    <li>Designed and developed responsive landing pages for local businesses.</li>
                                    <li>Customized WordPress themes and implemented frontend features.</li>
                                    <li>Ensured cross-browser compatibility and mobile responsiveness.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Key Projects */}
                        <div>
                            <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-4 text-slate-900">Key Projects</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <h4 className="font-bold text-slate-800">Portfolio Website</h4>
                                    <p className="text-xs text-slate-500 mb-1">React, Tailwind, Framer Motion</p>
                                    <p className="text-sm text-slate-600">A responsive portfolio website featuring dynamic animations, dark mode, and a printable CV component.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">E-commerce Frontend Clone</h4>
                                    <p className="text-xs text-slate-500 mb-1">React, Redux Toolkit, FakeStore API</p>
                                    <p className="text-sm text-slate-600">Built a fully functional shopping cart with product filtering, cart management, and checkout simulation.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Weather Dashboard</h4>
                                    <p className="text-xs text-slate-500 mb-1">JavaScript, OpenWeatherMap API</p>
                                    <p className="text-sm text-slate-600">Real-time weather application with search functionality and 5-day forecast visualization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;
