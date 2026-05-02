import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineColorSwatch,
  HiOutlinePhotograph,
  HiOutlineChartBar,
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineCursorClick,
  HiOutlineGlobeAlt
} from "react-icons/hi";

const Service = () => {
  const services = [
    {
      icon: <HiOutlineColorSwatch />,
      name: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with seamless user experiences that convert.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <HiOutlineDesktopComputer />,
      name: "Web Development",
      description: "Building fast, responsive, and scalable websites tailored to your unique business requirements.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <HiOutlineDeviceMobile />,
      name: "App Development",
      description: "Developing user-friendly mobile applications for both iOS and Android platforms using modern tech.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <HiOutlineGlobeAlt />,
      name: "Digital Marketing",
      description: "Driving growth through targeted digital strategies and effective social media campaigns.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <HiOutlineSearch />,
      name: "SEO Optimization",
      description: "Improving search engine rankings to increase visibility and attract high-quality organic traffic.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <HiOutlinePencilAlt />,
      name: "Content Strategy",
      description: "Crafting engaging, informative, and SEO-friendly content that resonates with your target audience.",
      color: "from-red-500 to-orange-500"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  };

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 -left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">What I Offer</span>
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Premium <span className="text-gradient">Services</span></h2>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          I provide a comprehensive range of digital services to help your brand grow and succeed in today's competitive landscape.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.name}
            variants={item}
            className="h-full"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2500} className="h-full">
              <div className="group h-full relative bg-bg-secondary p-10 rounded-[2.5rem] border border-glass-border hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500`}></div>

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {service.icon}
            </div>

                <h3 className="text-2xl font-bold mb-4 font-outfit text-text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all">{service.name}</h3>
                <p className="text-text-secondary leading-relaxed text-base group-hover:text-text-primary transition-colors">
                  {service.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default Service;
