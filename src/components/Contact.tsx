import { memo, useState } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

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
        message: formData.message,
        reply_to: formData.email,
        to_name: "Quezelle",
        user_email: formData.email,
      };

      emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      ).then(() => {
        setSubmitStatus('success');
      }).catch(() => {
        setSubmitStatus('error');
      });
    } catch (error) {
      setSubmitStatus('error');
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
    <section id="contact" className="relative min-h-screen py-20 flex items-center bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-display mb-4 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your healthcare administration? Let's discuss how I can contribute to your organization's success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h3>
                
                <div className="mb-8">
                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center p-4 rounded-xl bg-gray-50"
                  >
                    <FaEnvelope className="w-6 h-6 text-coral-500" />
                    <div className="ml-4 text-left">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-700 font-medium">Quezelle.torres@outlook.com</p>
                    </div>
                    <div className="ml-auto">
                      {isCopied ? (
                        <FaCheck className="w-5 h-5 text-green-500" />
                      ) : (
                        <FaCopy className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-700 mb-4">Connect with Me</h4>
                  
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send Me a Message
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
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200"
                    required
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
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200"
                    required
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
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-xl bg-coral-500 text-white font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center">
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
