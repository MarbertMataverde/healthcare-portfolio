import { memo, useState } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

const styles = {
  bgGridPattern: `
    .bg-grid-pattern {
      background-image: linear-gradient(to right, #000 1px, transparent 1px),
                       linear-gradient(to bottom, #000 1px, transparent 1px);
      background-size: 60px 60px;
    }

    @keyframes sphere-float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(20px, -20px) rotate(5deg); }
      50% { transform: translate(0, -40px) rotate(0deg); }
      75% { transform: translate(-20px, -20px) rotate(-5deg); }
    }

    @keyframes sphere-float-delayed {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(-20px, 20px) rotate(-5deg); }
      50% { transform: translate(0, 40px) rotate(0deg); }
      75% { transform: translate(20px, 20px) rotate(5deg); }
    }

    @keyframes grid-shift {
      0%, 100% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(30px) translateY(30px); }
    }

    .animate-sphere-float {
      animation: sphere-float 20s ease-in-out infinite;
    }

    .animate-sphere-float-delayed {
      animation: sphere-float-delayed 25s ease-in-out infinite;
    }

    .animate-grid-shift {
      animation: grid-shift 30s ease-in-out infinite;
    }

    .animate-pulse-slow {
      animation: pulse 4s ease-in-out infinite;
    }

    .animate-pulse-slow-delayed {
      animation: pulse 4s ease-in-out infinite;
      animation-delay: 2s;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-sphere-float,
      .animate-sphere-float-delayed,
      .animate-grid-shift,
      .animate-pulse-slow,
      .animate-pulse-slow-delayed {
        animation: none;
      }
    }
  `,
};

const Contact = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

      emailjs.send(
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyEmail = () => {
    const email = 'Quezelle.torres@outlook.com';
    try {
      navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 flex items-center bg-[linear-gradient(rgba(255,255,255,.9)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,.9)_0.5px,transparent_0.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.05)_70%,rgba(255,255,255,0.1)_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-display mb-4">
              <span className="bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your healthcare administration? Let's discuss how I can contribute to your organization's success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-[2rem] blur-2xl opacity-30" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-gray-100/20 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                      Get in Touch
                    </span>
                  </h3>
                  
                  <div className="group relative mb-8">
                    <button
                      onClick={handleCopyEmail}
                      className="w-full flex items-center p-4 rounded-xl hover:bg-gray-50/80 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-coral-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                        <FaEnvelope className="w-5 h-5" />
                      </div>
                      <div className="ml-4 text-left">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-700 font-medium">Quezelle.torres@outlook.com</p>
                      </div>
                      <div className="ml-auto">
                        {isCopied ? (
                          <FaCheck className="w-5 h-5 text-green-500" />
                        ) : (
                          <FaCopy className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                        )}
                      </div>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-700 mb-4">Connect with Me</h4>
                    
                    <div className="flex items-center justify-start gap-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#0077B5] flex items-center justify-center text-white shadow-lg">
                          <FaLinkedin className="w-5 h-5" />
                        </div>
                      </a>

                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                          <FaInstagram className="w-5 h-5" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-[2rem] blur-2xl opacity-30" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-gray-100/20 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                    Send a Message
                  </span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-colors duration-300 bg-white/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-colors duration-300 bg-white/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-colors duration-300 bg-white/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative w-full group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`relative w-full py-4 px-6 rounded-xl font-medium shadow-lg
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-coral-500 to-purple-500 hover:from-coral-600 hover:to-purple-600'
                      } text-white transition-all duration-300`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </div>
                  </button>

                  <div>
                    {submitStatus === 'success' && (
                      <div className="text-green-600 text-center mt-4">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="text-red-600 text-center mt-4">
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
