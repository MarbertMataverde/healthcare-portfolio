import { memo, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_name: 'Quezelle',  // Your name
        user_name: formData.name,  // Sender's name
        user_email: formData.email,  // Sender's email
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleCopyEmail = useCallback(async () => {
    const email = 'Quezelle.torres@outlook.com';
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }, []);

  return (
    <section
      ref={elementRef}
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative flex items-center py-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-500/20 to-purple-500/20 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,136,115,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text inline-block mb-4 font-display">
              Need a Virtual Healthcare Assistant?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Remote EHR management and administrative support to keep your healthcare operations running smoothly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-purple-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-6">Connect With Me</h3>
                  
                  <div className="relative group flex items-center space-x-4 text-gray-400 hover:text-coral-500 transition-colors duration-300 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-coral-500/10 transition-colors duration-300">
                      <FaEnvelope className="text-xl group-hover:text-coral-500 transition-colors duration-300" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium bg-gradient-to-r from-coral-500 to-purple-500 bg-clip-text text-transparent mb-1">Email</p>
                      <p className="text-sm">Quezelle.torres@outlook.com</p>
                    </div>
                    <motion.button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-coral-500/10 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Copy email address"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isCopied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <FaCheck className="text-green-500" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <FaCopy />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  <div className="space-y-4">
                    <p className="text-white/90 text-sm uppercase tracking-wider font-medium">Social Profiles</p>
                    <div className="flex items-center gap-4">
                      <motion.a
                        href="https://linkedin.com/in/quezelle-torres"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 px-4 py-2.5 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaLinkedin className="text-xl text-[#0A66C2] group-hover:text-[#0A66C2]" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                      </motion.a>
                      
                      <motion.a
                        href="https://www.instagram.com/imquezellevtm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 px-4 py-2.5 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaInstagram className="text-xl text-[#E4405F] group-hover:text-[#E4405F]" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-6">Let's Talk</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-coral-500 to-purple-500 text-white font-medium hover:from-coral-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </div>
                  
                  {/* Success/Error Messages */}
                  <AnimatePresence mode="wait">
                    {(submitStatus === 'success' || submitStatus === 'error') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`text-center p-3 rounded-lg ${submitStatus === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}
                      >
                        {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
