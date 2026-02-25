import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload, FaFacebook, FaCalendar, FaFlag, FaUser, FaVenusMars } from 'react-icons/fa';
import profileImage from '../assets/image/cv_profile.jpg';

const CV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen py-10 flex justify-center items-start print:py-0 print:block">
            <style>
                {`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background: white;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .print-container {
                        width: 210mm;
                        height: 297mm;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: hidden;
                        box-shadow: none !important;
                    }
                    /* Scale content slightly if it's still too long */
                    .cv-scale {
                        transform: scale(0.98);
                        transform-origin: top center;
                    }
                }
                `}
            </style>

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
                className="w-[210mm] min-h-[297mm] bg-white text-slate-800 shadow-2xl overflow-hidden relative print:shadow-none print:w-[210mm] print:h-[297mm] print:m-0 print:rounded-none print-container"
            >
                <div className="cv-scale">
                    {/* Header / Top Section */}
                    <div className="bg-slate-900 text-white p-6 flex justify-between items-center print:bg-slate-900 print:p-6">
                        <div className="flex items-center gap-6">
                            <div>
                                <h1 className="text-4xl font-bold uppercase tracking-wider">Abishek <span className="text-blue-500">Adhikari</span></h1>
                                <h2 className="text-xl mt-1 text-blue-200 font-medium">Frontend Developer</h2>
                            </div>
                        </div>
                        <div className="text-right text-sm space-y-1 text-slate-300">
                            <p className="flex items-center justify-end gap-2"><FaEnvelope /> abishekadhikari056@gmail.com</p>
                            <p className="flex items-center justify-end gap-2"><FaPhone /> +977 9767377096</p>
                            <p className="flex items-center justify-end gap-2"><FaMapMarkerAlt /> Okhaldhunga-03, Nepal</p>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-12 min-h-[250mm]">

                        {/* Left Column (Sidebar) */}
                        <div className="col-span-4 bg-slate-50 p-6 border-r border-slate-200 print:bg-slate-50">

                            {/* Profile Image */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-200 shadow-md">
                                    <img src={profileImage} alt="Abishek Adhikari" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Personal Details */}
                            <div className="mb-6">
                                <h3 className="text-md font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Personal Details</h3>
                                <ul className="space-y-2 text-xs text-slate-700">
                                    <li className="flex items-center gap-2"><FaCalendar className="text-blue-500" /> <span className="font-semibold">DOB:</span> 2005-12-13</li>
                                    <li className="flex items-center gap-2"><FaFlag className="text-blue-500" /> <span className="font-semibold">Nationality:</span> Nepali</li>
                                    <li className="flex items-center gap-2"><FaUser className="text-blue-500" /> <span className="font-semibold">Marital Status:</span> Single</li>
                                    <li className="flex items-center gap-2"><FaVenusMars className="text-blue-500" /> <span className="font-semibold">Sex:</span> Male</li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className="mb-6">
                                <h3 className="text-md font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Skills</h3>
                                <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                                    <li>Frontend Developer</li>
                                    <li>Python</li>
                                    <li>Github</li>
                                    <li>Graphic Designing</li>
                                    <li>Office Package</li>
                                </ul>
                            </div>

                            {/* Education */}
                            <div className="mb-6">
                                <h3 className="text-md font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Education</h3>
                                <div className="mb-3">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase">Primary Education</span>
                                    <h4 className="font-bold text-xs text-slate-800">Horizon Academy</h4>
                                    <p className="text-[10px] text-slate-600">SEE / 3 GPA | 2022</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-blue-600 uppercase">Secondary Education</span>
                                    <h4 className="font-bold text-xs text-slate-800 text-wrap leading-tight">Purwanchal Boarding Secondary School</h4>
                                    <p className="text-[10px] text-slate-600">SEE / 3.03 GPA | 2024</p>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="mb-4">
                                <h3 className="text-md font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Links</h3>
                                <ul className="space-y-1 text-[10px] text-slate-700">
                                    <li className="flex items-center gap-2"><FaGithub className="flex-shrink-0" /> github.com/abishek056</li>
                                    <li className="flex items-center gap-2"><FaFacebook className="text-blue-600 flex-shrink-0" /> facebook.com</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-span-8 p-8">
                            {/* Objective */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Objective</h3>
                                <p className="text-sm text-slate-600 leading-snug">
                                    I seek challenging opportunities where I can fully use my skills for the success of the organization.
                                </p>
                            </div>

                            {/* Experience */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Experience</h3>
                                <div className="mb-4">
                                    <h4 className="font-bold text-md text-slate-800">Freelance Web Developer</h4>
                                    <p className="text-xs text-blue-600 font-medium mb-1">Self-Employed | 2023 - Present</p>
                                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                        <li>Designed and developed responsive landing pages.</li>
                                        <li>Customized WordPress themes and frontend features.</li>
                                        <li>Ensured cross-browser compatibility and responsiveness.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Key Projects */}
                            <div>
                                <h3 className="text-lg font-bold uppercase border-b-2 border-blue-500 pb-1 mb-3 text-slate-900">Key Projects</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Portfolio Website</h4>
                                        <p className="text-[10px] text-slate-500 mb-0.5">React, Tailwind, Framer Motion</p>
                                        <p className="text-xs text-slate-600">A responsive portfolio featuring dynamic animations and a printable CV component.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">E-commerce Frontend Clone</h4>
                                        <p className="text-[10px] text-slate-500 mb-0.5">React, Redux Toolkit, FakeStore API</p>
                                        <p className="text-xs text-slate-600">Built a functional shopping cart with product filtering and checkout simulation.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Weather Dashboard</h4>
                                        <p className="text-[10px] text-slate-500 mb-0.5">JavaScript, OpenWeatherMap API</p>
                                        <p className="text-xs text-slate-600">Real-time weather application with search and 5-day forecast visualization.</p>
                                    </div>
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
