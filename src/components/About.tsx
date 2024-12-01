import { useState } from 'react';
import CertificatesModal from './CertificatesModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="relative min-h-screen py-20 flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.9)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,.9)_0.5px,transparent_0.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 mb-4">
              ABOUT ME
            </h2>
            <p className="text-lg text-gray-600/90 max-w-3xl mx-auto">
              Dedicated healthcare professional with a passion for patient care and medical documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <img
                    src="optimized/about-me-image.webp"
                    alt="Quezelle Torres"
                    className="w-full h-[450px] md:h-[600px] lg:h-[700px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600/90 mb-4">
                I am a dedicated and detail-oriented Home Health Specialist with two years of experience managing medical records, prior authorizations, intake processes, and diverted service reports. My expertise lies in streamlining documentation using advanced Electronic Health Record (EHR) systems.
              </p>

              <p className="text-lg text-gray-600/90 mb-4">
                Skilled in effective communication, I excel at collaborating with healthcare professionals, addressing patient needs with empathy, and ensuring clear and reliable interactions.
              </p>

              <p className="text-lg text-gray-600/90">
                Adept at prioritizing and organizing multiple tasks in fast-paced environments, I have been recognized for my contributions to developing and maintaining quality standards, delivering exceptional performance across organizations, and ensuring compliance with HIPAA regulations.
              </p>

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

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-coral-500 text-white/90 font-medium shadow-lg"
                >
                  <span className="relative flex items-center text-base">
                    Contact Me
                    <svg 
                      className="ml-2.5 h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </a>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white font-medium"
                >
                  <span className="relative flex items-center text-base">
                    View Certificates
                    <svg 
                      className="ml-2.5 h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
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
