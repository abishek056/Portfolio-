import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaSearch } from 'react-icons/fa';
import img1 from '../assets/image/pflo1.webp';
import img2 from '../assets/image/pflo2.webp';
import img3 from '../assets/image/pflo3.webp';
import img4 from '../assets/image/pflo4.webp';
import img5 from '../assets/image/pflo5.webp';
import img6 from '../assets/image/pflo6.webp';
import img7 from '../assets/image/pflo7.webp';
import img8 from '../assets/image/pflo8.webp';
import img9 from '../assets/image/pflo9.webp';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'Marketing'];

  const projects = [
    {
      id: 1,
      src: img1,
      title: "E-Commerce Platform",
      category: "Web App",
      description: "A full-featured e-commerce solution with cart functionality, secure payments, and admin dashboard.",
      tech: ["React", "Node.js", "TailwindCSS"],
      live: "#",
      github: "#"
    },
    {
      id: 2,
      src: img2,
      title: "Finance Dashboard",
      category: "UI/UX",
      description: "Modern financial analytics dashboard with real-time data visualization and budget tracking.",
      tech: ["React", "Chart.js", "Framer Motion"],
      live: "#",
      github: "#"
    },
    {
      id: 3,
      src: img3,
      title: "Travel App",
      category: "Mobile",
      description: "Mobile-first travel booking application with destination guides and itinerary planning.",
      tech: ["React Native", "Firebase", "Redux"],
      live: "#",
      github: "#"
    },
    {
      id: 4,
      src: img4,
      title: "Product Landing",
      category: "Marketing",
      description: "High-conversion landing page for a SaaS product with smooth animations and SEO optimization.",
      tech: ["React", "Vite", "TailwindCSS"],
      live: "#",
      github: "#"
    },
    {
      id: 5,
      src: img5,
      title: "Social Media App",
      category: "Web App",
      description: "Real-time social networking platform with messaging, post sharing, and user profiles.",
      tech: ["Next.js", "Supabase", "TailwindCSS"],
      live: "#",
      github: "#"
    },
    {
      id: 6,
      src: img6,
      title: "Corporate Website",
      category: "Web App",
      description: "Professional corporate presence with service listings, blog, and contact integration.",
      tech: ["React", "Framer Motion", "EmailJS"],
      live: "#",
      github: "#"
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-outfit">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-text-secondary max-w-xl">
              Exploring the intersection of design and technology through practical applications.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-bg-secondary text-text-secondary hover:bg-bg-accent border border-glass-border'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-bg-secondary rounded-[2rem] overflow-hidden border border-glass-border hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white shadow-xl">
                      <FaSearch size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-outfit text-text-primary">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-medium text-text-secondary bg-bg-accent px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-bg-primary/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative max-w-5xl w-full bg-bg-secondary rounded-[2.5rem] overflow-hidden shadow-2xl border border-glass-border"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-3 bg-bg-primary/50 hover:bg-red-500 hover:text-white rounded-2xl transition-all"
                >
                  <FaTimes size={20} />
                </button>

                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-3/5">
                    <img
                      src={selectedProject.src}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <span className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4 block">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl font-bold mb-6 font-outfit">{selectedProject.title}</h2>
                      <p className="text-text-secondary mb-8 leading-relaxed">
                        {selectedProject.description}
                      </p>
                      <div className="mb-8">
                        <h4 className="text-sm font-bold mb-3 uppercase tracking-wider text-text-primary">Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map((t) => (
                            <span key={t} className="px-3 py-1 bg-bg-accent text-text-secondary text-xs font-semibold rounded-lg border border-glass-border">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.live}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20"
                      >
                        Live Demo <FaExternalLinkAlt size={14} />
                      </a>
                      <a
                        href={selectedProject.github}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-bg-accent hover:bg-bg-primary text-text-primary rounded-2xl font-bold transition-all border border-glass-border"
                      >
                        GitHub <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;