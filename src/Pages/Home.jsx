import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div id="skills">
          <Skills />
        </div>
      </motion.div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
