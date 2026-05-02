import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = React.useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _captcha: 'false'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/15267aa934c1904a5637089f52b90ecf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', _captcha: 'false' });
      } else {
        const errorData = await response.json();
        console.error("FormSubmit error details:", errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission network error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 font-outfit"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
          >
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-secondary p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-glass-border shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 font-outfit">Contact Information</h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold">abishekaa056@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold">Itahari, Nepal</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-bold">9804304889</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold mb-6 font-outfit">Follow Me</h4>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, link: "https://www.facebook.com/", color: "hover:bg-blue-600" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/", color: "hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600" },
                { icon: <FaGithub />, link: "https://github.com/abishek056", color: "hover:bg-slate-800" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-bg-accent flex items-center justify-center text-xl text-text-secondary ${social.color} hover:text-white transition-all transform hover:-translate-y-1 shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-secondary p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-glass-border shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-text-secondary uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Abishek Adhikari"
                    className="w-full px-6 py-4 bg-bg-accent border border-glass-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-text-primary placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-text-secondary uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abishek@example.com"
                    className="w-full px-6 py-4 bg-bg-accent border border-glass-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-text-primary placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-text-secondary uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-bg-accent border border-glass-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-text-primary placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-text-secondary uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  className="w-full px-6 py-4 bg-bg-accent border border-glass-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-text-primary placeholder-gray-500 dark:placeholder-gray-400 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-500/20 text-green-500 rounded-xl font-bold text-center">
                  Message sent successfully! Please check your Gmail (and Spam folder) if this is your first time to activate FormSubmit.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/20 text-red-500 rounded-xl font-bold text-center">
                  Oops! Something went wrong. Please try again or email me directly at abishekaa056@gmail.com
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className={`w-full ${status === 'sending' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 transition-all text-base sm:text-lg`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

