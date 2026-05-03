import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import uiUxImage from '../assets/image/service/ui-ux.png';
import webDevImage from '../assets/image/service/webdev.png';
import appDevImage from '../assets/image/service/appdev.png';
import digitalMarketingImage from '../assets/image/service/digitalmarket.png';

const Service = () => {
  const [expandedPricing, setExpandedPricing] = useState(null);

  const togglePricing = (serviceName) => {
    if (expandedPricing === serviceName) {
      setExpandedPricing(null);
    } else {
      setExpandedPricing(serviceName);
    }
  };

  const services = [
    {
      name: "UI/UX Design",
      description: "We have been providing premium UI/UX design services from the beginning. It includes wireframing, prototyping, and user testing to create seamless user experiences that convert.",
      image: uiUxImage,
      price: "$499",
      pricingTiers: [
        { name: "Basic", price: "$499", desc: "Wireframes & basic prototype" },
        { name: "Pro", price: "$999", desc: "High-fidelity UI design" },
        { name: "Enterprise", price: "$1,999", desc: "Complete design system" }
      ]
    },
    {
      name: "Web Development",
      description: "Building fast, responsive, and scalable websites tailored to your unique business requirements. We specialize in modern frameworks to deliver robust digital solutions.",
      image: webDevImage,
      price: "$999",
      pricingTiers: [
        { name: "Basic", price: "$999", desc: "Landing page (up to 5 sections)" },
        { name: "Pro", price: "$2,499", desc: "Full website (up to 10 pages)" },
        { name: "E-Commerce", price: "$3,999", desc: "Full online store with payment" }
      ]
    },
    {
      name: "App Development",
      description: "Developing user-friendly mobile applications for both iOS and Android platforms using modern cross-platform technologies to reach your audience everywhere.",
      image: appDevImage,
      price: "$1,499",
      pricingTiers: [
        { name: "Basic", price: "$1,499", desc: "Simple utility app (1 OS)" },
        { name: "Pro", price: "$3,499", desc: "Standard app (iOS & Android)" },
        { name: "Enterprise", price: "$6,999", desc: "Complex app with backend" }
      ]
    },
    {
      name: "Digital Marketing",
      description: "Driving growth through targeted digital strategies, SEO optimization, and effective social media campaigns to increase your brand's online visibility and attract organic traffic.",
      image: digitalMarketingImage,
      price: "$799",
      pricingTiers: [
        { name: "Basic", price: "$799/mo", desc: "Social media management" },
        { name: "Pro", price: "$1,499/mo", desc: "SEO + Social + Content" },
        { name: "Premium", price: "$2,999/mo", desc: "Full digital strategy & ads" }
      ]
    }
  ];

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 -left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
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

        <div className="flex flex-col gap-24 mt-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <h3 className="text-3xl md:text-4xl font-bold font-outfit text-text-primary mb-6">{service.name}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="w-full min-h-[100px]">
                    <AnimatePresence mode="wait">
                      {expandedPricing === service.name ? (
                        <motion.div 
                          key="pricing-tiers"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col w-full bg-bg-secondary/50 rounded-2xl p-6 border border-glass-border"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-text-primary text-lg">Select a Plan</h4>
                            <button 
                              onClick={() => togglePricing(service.name)} 
                              className="text-text-secondary hover:text-white bg-glass-border/30 px-3 py-1 rounded-full text-xs transition-colors"
                            >
                              Close
                            </button>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {service.pricingTiers.map(tier => (
                              <div key={tier.name} className="bg-bg-primary p-4 rounded-xl border border-glass-border hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer group">
                                <p className="text-sm text-text-secondary font-semibold group-hover:text-blue-400 transition-colors">{tier.name}</p>
                                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mt-1 mb-2">{tier.price}</p>
                                <p className="text-xs text-text-secondary leading-tight">{tier.desc}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="get-started"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2"
                        >
                          <motion.button 
                            onClick={() => togglePricing(service.name)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border border-blue-500 text-text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                          >
                            View Plans
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border border-glass-border"
                  >
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent pointer-events-none"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
