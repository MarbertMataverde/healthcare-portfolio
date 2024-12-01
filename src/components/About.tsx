import { useState } from 'react';
import CertificatesModal from './CertificatesModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    { text: 'EHR Expert', color: 'coral' },
    { text: 'Medical Records Management', color: 'green' },
    { text: 'Authorizations', color: 'blue' },
    { text: 'HIPAA Compliance', color: 'coral' },
    { text: 'Patient-Focused Communication', color: 'purple' },
    { text: 'Eligibility', color: 'green' },
    { text: 'Insurance Verification', color: 'blue' },
    { text: 'Scheduling Appointments', color: 'coral' },
    { text: 'Non-Clinical Quality Assurance', color: 'purple' }
  ];

  return (
    <>
      <div className="section-separator" aria-hidden="true" />
      <section id="about" className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.8)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,.8)_0.5px,transparent_0.5px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_60%)]"></div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 mb-4">
                  ABOUT ME
                </h2>
                <p className="text-lg text-gray-600/90 max-w-3xl mx-auto">
                  Dedicated healthcare professional with a passion for patient care and medical documentation.
                </p>
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Image */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="optimized/about-me-image.webp"
                    alt="Quezelle Torres"
                    className="w-full h-[450px] md:h-[600px] lg:h-[700px] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6 lg:pt-4">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600/90">
                      I am a dedicated and detail-oriented Home Health Specialist with two years of experience managing medical records, prior authorizations, intake processes, and diverted service reports. My expertise lies in streamlining documentation using advanced Electronic Health Record (EHR) systems.
                    </p>
                    <p className="text-lg text-gray-600/90">
                      Skilled in effective communication, I excel at collaborating with healthcare professionals, addressing patient needs with empathy, and ensuring clear and reliable interactions.
                    </p>
                    <p className="text-lg text-gray-600/90">
                      Adept at prioritizing and organizing multiple tasks in fast-paced environments, I have been recognized for my contributions to developing and maintaining quality standards, delivering exceptional performance across organizations, and ensuring compliance with HIPAA regulations.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 py-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-${skill.color}-500/10 text-${skill.color}-600/90 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-${skill.color}-500/20`}
                      >
                        {skill.text}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-coral-500 to-coral-600 text-white font-medium shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-1px]"
                    >
                      <span className="flex items-center text-base">
                        Contact Me
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </a>
                    
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-50 text-gray-900 font-medium border border-gray-200 transition-all duration-200 hover:bg-gray-100 hover:translate-y-[-1px]"
                    >
                      <span className="flex items-center text-base">
                        View Certificates
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <CertificatesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
