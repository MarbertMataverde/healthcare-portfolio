import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import { useState } from 'react';
import CertificatesModal from './CertificatesModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 flex items-center"
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 mb-4">
                ABOUT ME
              </h2>
              <p className="text-lg text-gray-600/90 max-w-3xl mx-auto">
                Dedicated healthcare professional with a passion for patient care and medical documentation.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right" delay={0.2}>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  {/* Background shapes with overlap effect */}
                  <div className="absolute -inset-4 z-0">
                    {/* Large background shape */}
                    <div className="absolute right-0 -bottom-20 w-[110%] h-[110%] rounded-[3rem] 
                      bg-gradient-to-br from-purple-200/25 via-blue-100/20 to-coral-200/25 
                      blur-[70px] transform translate-x-12 translate-y-12 rotate-3" />
                    
                    {/* Overlapping shape */}
                    <div className="absolute -left-10 -top-20 w-[90%] h-[90%] rounded-[3rem] 
                      bg-gradient-to-tr from-coral-200/25 via-purple-100/20 to-blue-200/25 
                      blur-[50px] transform -translate-x-12 -translate-y-12 -rotate-6" />
                    
                    {/* Accent shape */}
                    <div className="absolute right-1/4 top-1/4 w-[60%] h-[60%] rounded-[2rem] 
                      bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-coral-200/20 
                      blur-[40px] rotate-12 animate-float" />
                  </div>
                  
                  {/* Modern border design with overlap */}
                  <div className="relative z-10 -rotate-2 transform hover:rotate-0 transition-transform duration-500">
                    {/* Outer container with gradient border */}
                    <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-coral-200/30 via-purple-200/30 to-blue-200/30 
                      shadow-2xl backdrop-blur-sm animate-gradient-x">
                      
                      {/* Inner container with glass effect */}
                      <div className="relative rounded-3xl bg-white/5 p-3 backdrop-blur-sm">
                        {/* Double border effect */}
                        <div className="absolute inset-0 rounded-3xl border border-white/10" />
                        <div className="absolute inset-[2px] rounded-2xl border border-white/5" />
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden">
                          <img
                            src="optimized/about-me-image.webp"
                            alt="Quezelle Torres"
                            className="w-full h-[450px] md:h-[600px] lg:h-[700px] object-cover transform rotate-2"
                          />
                          
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t 
                            from-gray-900/30 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="left" delay={0.3}>
                <p className="text-lg text-gray-600/90 mb-4">
                  I am a dedicated and detail-oriented Home Health Specialist with two years of experience managing medical records, prior authorizations, intake processes, and diverted service reports. My expertise lies in streamlining documentation using advanced Electronic Health Record (EHR) systems.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.4}>
                <p className="text-lg text-gray-600/90 mb-4">
                  Skilled in effective communication, I excel at collaborating with healthcare professionals, addressing patient needs with empathy, and ensuring clear and reliable interactions.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.5}>
                <p className="text-lg text-gray-600/90">
                  Adept at prioritizing and organizing multiple tasks in fast-paced environments, I have been recognized for my contributions to developing and maintaining quality standards, delivering exceptional performance across organizations, and ensuring compliance with HIPAA regulations.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.6}>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-coral-500/10 text-coral-600/90 rounded-full text-sm">
                    EHR Expert
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 text-green-600/90 rounded-full text-sm">
                    Medical Records Management
                  </span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-600/90 rounded-full text-sm">
                    Authorizations
                  </span>
                  <span className="px-4 py-2 bg-coral-500/10 text-coral-600/90 rounded-full text-sm">
                    HIPAA Compliance
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-600/90 rounded-full text-sm">
                    Patient-Focused Communication
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 text-green-600/90 rounded-full text-sm">
                    Eligibility
                  </span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-600/90 rounded-full text-sm">
                    Insurance Verification
                  </span>
                  <span className="px-4 py-2 bg-coral-500/10 text-coral-600/90 rounded-full text-sm">
                    Scheduling Appointments
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-600/90 rounded-full text-sm">
                    Non-Clinical Quality Assurance
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <motion.a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-coral-500 text-white/90 font-medium shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative flex items-center text-base">
                      Contact Me
                      <svg 
                        className="ml-2.5 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </motion.a>
                  
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative flex items-center text-base">
                      View Certificates
                      <svg 
                        className="ml-2.5 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Modal */}
      <CertificatesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
