import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiPostman, SiFramer } from 'react-icons/si';

const SkillCard = ({ name, icon, percentage, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-bg-secondary p-6 rounded-2xl border border-glass-border shadow-sm hover:shadow-xl transition-all group"
    >
        <div className="flex items-center gap-4 mb-4">
            <div className="text-3xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold font-outfit">{name}</h3>
        </div>
        <div className="relative h-2 bg-bg-accent rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
        </div>
        <div className="mt-2 text-right text-xs font-semibold text-text-secondary">
            {percentage}%
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: <FaHtml5 />, percentage: 95 },
                { name: "CSS3", icon: <FaCss3Alt />, percentage: 90 },
                { name: "JavaScript", icon: <FaJs />, percentage: 85 },
                { name: "React", icon: <FaReact />, percentage: 80 },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 90 },
                { name: "Framer Motion", icon: <SiFramer />, percentage: 70 },
            ]
        },
        {
            title: "Backend & Tools",
            skills: [
                { name: "Python", icon: <FaPython />, percentage: 75 },
                { name: "Node.js", icon: <FaNodeJs />, percentage: 65 },
                { name: "Database", icon: <FaDatabase />, percentage: 70 },
                { name: "Git", icon: <FaGitAlt />, percentage: 85 },
                { name: "Vite", icon: <SiVite />, percentage: 80 },
                { name: "Postman", icon: <SiPostman />, percentage: 75 },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 font-outfit"
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary max-w-2xl mx-auto"
                    >
                        I've built a strong foundation in modern web technologies and continuously expanding my toolbox.
                    </motion.p>
                </div>

                <div className="grid md:grid-gap-12 gap-16">
                    {categories.map((cat, catIndex) => (
                        <div key={cat.title}>
                            <h3 className="text-2xl font-bold mb-8 font-outfit border-l-4 border-blue-500 pl-4">{cat.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.skills.map((skill, index) => (
                                    <SkillCard
                                        key={skill.name}
                                        {...skill}
                                        index={index + (catIndex * 6)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
