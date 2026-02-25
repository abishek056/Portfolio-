import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = ({ className = "" }) => {
    const socialLinks = [
        { icon: <FaFacebook />, url: "https://www.facebook.com/", name: "Facebook" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/", name: "Instagram" },
        { icon: <FaGithub />, url: "https://github.com/abishek056", name: "GitHub" },
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/service" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <footer className={`bg-bg-secondary border-t border-glass-border pt-16 pb-8 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <NavLink to="/" className="text-2xl font-bold tracking-tighter mb-6 block">
                            <span className="font-outfit text-text-primary">Abishek Adhikari</span>
                        </NavLink>
                        <p className="text-text-secondary max-w-sm mb-6 leading-relaxed">
                            Building modern digital experiences with a focus on clean design and exceptional user experience. Let's create something amazing together.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-bg-accent flex items-center justify-center text-text-secondary hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-outfit text-text-primary">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className="text-text-secondary hover:text-blue-500 transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter/Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-outfit text-text-primary">Get in Touch</h4>
                        <p className="text-text-secondary mb-4 flex items-center gap-2">
                            <FaEnvelope className="text-blue-500" /> abishekaa056@gmail.com
                        </p>
                        <div className="mt-6">
                            <NavLink
                                to="/contact"
                                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
                            >
                                Let's Talk
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-secondary text-sm">
                        © {new Date().getFullYear()} Abishek Adhikari. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-text-secondary">
                        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
