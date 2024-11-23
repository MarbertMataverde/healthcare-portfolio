import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    number: "01",
    title: "Medical Records",
    description: "Comprehensive management of patient medical records, ensuring accurate documentation and efficient retrieval while maintaining strict HIPAA compliance.",
    link: "#medical-records",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    features: [
      "Electronic Health Records (EHRs)",
      "Paper-based records management",
      "Record scanning and digitization",
      "HIPAA compliance and security"
    ]
  },
  {
    number: "02",
    title: "Authorization",
    description: "Streamlined processing of medical authorizations, coordinating with insurance providers and healthcare facilities to ensure timely approval of services.",
    link: "#authorization",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    features: [
      "Pre-certification and pre-authorization",
      "Insurance verification and benefits checking",
      "Authorization tracking and follow-up",
      "Denial management and appeals"
    ]
  },
  {
    number: "03",
    title: "Intake",
    description: "Thorough patient intake process, gathering essential information and documentation to facilitate smooth onboarding and care coordination.",
    link: "#intake",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    features: [
      "Patient registration and demographics",
      "Insurance verification and benefits checking",
      "Medical history and allergy documentation",
      "Consent forms and HIPAA authorization"
    ]
  },
  {
    number: "04",
    title: "Eligibility",
    description: "Detailed verification of patient eligibility for healthcare services, ensuring coverage requirements are met and benefits are maximized.",
    link: "#eligibility",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    features: [
      "Insurance verification and benefits checking",
      "Coverage determination and notification",
      "Eligibility tracking and follow-up",
      "Denial management and appeals"
    ]
  },
  {
    number: "05",
    title: "Scheduling",
    description: "Efficient management of patient appointments and provider schedules, optimizing healthcare delivery and patient satisfaction.",
    link: "#scheduling",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    features: [
      "Appointment scheduling and reminders",
      "Provider schedule management",
      "Waitlist management and notification",
      "Patient engagement and communication"
    ]
  }
];

const Services = () => {
  const [, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 flex items-center"
    >
      {/* Content Container */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 hover:text-gray-900 transition-colors duration-300 mb-4">
                Services I Offer
              </h2>
              <p className="text-lg text-gray-600/90 hover:text-gray-700 transition-colors duration-300 max-w-2xl mx-auto">
                Specialized administrative support ensuring efficient healthcare operations and exceptional patient care
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  variants={itemVariants}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="block bg-white/95 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden border border-gray-100/50"
                  >
                    <div className="flex items-start relative z-10">
                      <div className="flex items-baseline space-x-6">
                        <span className="text-3xl font-serif text-coral-500/90 group-hover:text-coral-500 transition-colors duration-300">
                          {service.number}
                        </span>
                        <div>
                          <h3 className="text-2xl font-serif text-gray-800/95 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-700/95 group-hover:text-gray-800 transition-colors duration-300 max-w-2xl">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/80 to-gray-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
