import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight, FaTimes } from 'react-icons/fa';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        {
            id: 1,
            title: "My Journey into Web Development",
            excerpt: "From writing my first 'Hello World' to building complex web applications with React. Here's what I've learned so far.",
            content: "My web development journey started with curiosity. I remember the first time I changed a background color using CSS—it felt like magic. Over the years, I've moved from basic HTML/CSS to mastering modern frameworks like React and Next.js. The road wasn't always smooth; debugging asynchronous logic and learning state management took time and patience. However, the feeling of creating something that others can use is unparalleled. Today, I focus on building accessible, high-performance web solutions and continuously learning new technologies.",
            date: "Feb 15, 2026",
            readTime: "5 min read",
            category: "Personal",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS for Modern UI",
            excerpt: "Why utility-first CSS is changing the way we think about design and how you can leverage it for faster development.",
            content: "Tailwind CSS has completely shifted the paradigm of web styling. Instead of writing separate CSS files, we use utility classes directly in our markup. This approach might feel strange at first, but it dramatically increases development speed and ensures design consistency. With Tailwind, you can build custom designs without ever leaving your HTML. It handles responsive design, hover states, and dark mode with ease. In this post, we explore best practices for using Tailwind efficiently, including custom configurations and the new JIT engine optimizations.",
            date: "Feb 10, 2026",
            readTime: "8 min read",
            category: "Development",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "React 19: What's New and Why it Matters",
            excerpt: "Exploring the latest features in React 19, including the new compiler, actions, and improved server components.",
            content: "React 19 introduces groundbreaking features that simplify state management and improve performance. The most anticipated addition is the React Compiler (React Forget), which automatically memoizes values and functions, reducing the need for useMemo and useCallback. Additionally, new 'Actions' provide a standard way to handle data mutations and form submissions, while improved Server Components offer better integration with SSR architectures. Understanding these updates is crucial for any modern web developer looking to streamline their workflow.",
            date: "Feb 5, 2026",
            readTime: "6 min read",
            category: "React",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Tips for Beginners in Programming",
            excerpt: "Starting out can be overwhelming. Here are my top 5 tips to stay motivated and learn effectively in the tech industry.",
            content: "Programming is a marathon, not a sprint. 1. Build projects: Theory is good, but building real things is how you learn. 2. Master the basics: Don't rush into frameworks before you understand core JavaScript. 3. Read documentation: It's the best source of truth. 4. Consistency: Code every day, even if it's just for 30 minutes. 5. Ask for help: The developer community is vast and helpful—don't be afraid to use StackOverflow or Discord groups. You've got this!",
            date: "Jan 28, 2026",
            readTime: "4 min read",
            category: "Learning",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="section-padding">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-4 font-outfit"
                    >
                        Latest <span className="text-gradient">Insights</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary max-w-2xl mx-auto"
                    >
                        Sharing my thoughts, tutorials, and experiences in the world of software development.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-bg-secondary rounded-[2.5rem] overflow-hidden border border-glass-border hover:shadow-2xl hover:shadow-blue-500/5 transition-all cursor-pointer"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="flex flex-col lg:flex-row h-full">
                                <div className="lg:w-2/5 relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                                            <span className="flex items-center gap-1.5"><FaCalendarAlt /> {post.date}</span>
                                            <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-outfit leading-tight text-text-primary group-hover:text-blue-500 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-secondary line-clamp-3 mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all duration-300">
                                        Read More <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Post Detail Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg-primary/80 backdrop-blur-xl"
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative max-w-4xl w-full bg-bg-secondary rounded-[3rem] overflow-hidden shadow-2xl border border-glass-border"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-bg-primary/50 hover:bg-red-500 hover:text-white rounded-2xl transition-all"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="overflow-y-auto max-h-[85vh]">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                                        <span className="px-4 py-1.5 bg-blue-600/10 text-blue-500 font-bold rounded-full">
                                            {selectedPost.category}
                                        </span>
                                        <span className="flex items-center gap-1.5"><FaCalendarAlt /> {selectedPost.date}</span>
                                        <span className="flex items-center gap-1.5"><FaClock /> {selectedPost.readTime}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-outfit text-text-primary leading-tight">
                                        {selectedPost.title}
                                    </h2>
                                    <div className="prose prose-invert max-w-none text-text-secondary text-lg leading-relaxed">
                                        {selectedPost.content}
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-glass-border">
                                        <button
                                            onClick={() => setSelectedPost(null)}
                                            className="px-8 py-4 bg-bg-accent hover:bg-bg-primary text-text-primary rounded-2xl font-bold transition-all border border-glass-border"
                                        >
                                            Close Article
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Blog;
