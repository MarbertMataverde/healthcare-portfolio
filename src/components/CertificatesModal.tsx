import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FiAward, FiCalendar, FiBookOpen } from 'react-icons/fi';
import { useState } from 'react';
import CertificateDetailsModal from './CertificateDetailsModal';

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const certificates = [
  {
    id: 1,
    title: "Healthcare Data Analytics Certification",
    issuer: "Google & Coursera",
    date: "December 2023",
    description: "Advanced certification in healthcare data analytics, focusing on using data-driven insights to improve patient care and operational efficiency in healthcare settings. Comprehensive training in healthcare data interpretation, visualization, and statistical analysis.",
    skills: [
      "Healthcare Data Analysis",
      "Statistical Methods",
      "Data Visualization",
      "Healthcare Metrics",
      "Quality Improvement",
      "Patient Outcome Analysis"
    ]
  },
  {
    id: 2,
    title: "Electronic Health Records Specialist",
    issuer: "National Healthtech Association",
    date: "October 2023",
    description: "Specialized certification in Electronic Health Records (EHR) management and implementation. Covers comprehensive aspects of digital health record systems, including data security, interoperability, and workflow optimization.",
    skills: [
      "EHR Systems",
      "Healthcare Interoperability",
      "Clinical Documentation",
      "Data Security",
      "Workflow Optimization",
      "Patient Portal Management"
    ]
  },
  {
    id: 3,
    title: "Healthcare Project Management Professional",
    issuer: "Project Management Institute - Healthcare Extension",
    date: "September 2023",
    description: "Advanced certification in healthcare-specific project management methodologies. Focuses on implementing technology solutions in healthcare settings while ensuring compliance with medical regulations and patient care standards.",
    skills: [
      "Healthcare Project Planning",
      "Risk Management",
      "Stakeholder Communication",
      "Quality Assurance",
      "Regulatory Compliance",
      "Change Management"
    ]
  },
  {
    id: 4,
    title: "Healthcare AI and Machine Learning Specialist",
    issuer: "MIT Professional Education",
    date: "November 2023",
    description: "Advanced certification in applying artificial intelligence and machine learning technologies to healthcare challenges. Focus on predictive analytics, medical imaging analysis, and patient care optimization through AI-driven solutions.",
    skills: [
      "Healthcare AI Applications",
      "Medical Image Processing",
      "Predictive Analytics",
      "Clinical Decision Support",
      "Deep Learning in Healthcare",
      "Medical Data Mining"
    ]
  },
  {
    id: 5,
    title: "Healthcare Cybersecurity Professional",
    issuer: "HIMSS",
    date: "August 2023",
    description: "Comprehensive certification in healthcare-specific cybersecurity practices and protocols. Focuses on protecting patient data, ensuring HIPAA compliance, and implementing secure healthcare technology systems.",
    skills: [
      "Healthcare Data Protection",
      "HIPAA Security",
      "Threat Assessment",
      "Security Architecture",
      "Incident Response",
      "Access Control Management"
    ]
  },
  {
    id: 6,
    title: "Digital Health Innovation Specialist",
    issuer: "Stanford Online",
    date: "July 2023",
    description: "Advanced certification in digital health innovation and transformation. Covers emerging technologies in healthcare, digital health startups, and implementing innovative solutions in healthcare organizations.",
    skills: [
      "Digital Health Strategy",
      "Healthcare Innovation",
      "Telemedicine",
      "Health Tech Assessment",
      "Digital Transformation",
      "Patient Experience Design"
    ]
  }
];

const CertificatesModal = ({ isOpen, onClose }: CertificatesModalProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center px-4 py-6 sm:p-8 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl max-h-[90vh] bg-gradient-to-br from-white via-white to-coral-50/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cert-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cert-grid)" />
                </svg>
              </div>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-0 px-6 py-5 border-b border-gray-200/50 bg-white/80 backdrop-blur-md z-10"
              >
                <div className="relative flex items-center justify-center">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800/90">
                    Professional Certifications
                  </h2>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100/80 transition-colors"
                    aria-label="Close modal"
                  >
                    <IoClose className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-5rem)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCertificate(cert)}
                      className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 transform-gpu hover:-translate-y-1 cursor-pointer"
                    >
                      {/* Certificate Image */}
                      <div className="mb-5 relative overflow-hidden rounded-xl group-hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-white">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="w-full h-full relative"
                          >
                            <img
                              src="/hipaa-certificate.jpg"
                              alt={cert.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </motion.div>
                        </div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out pointer-events-none" />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800/90 mb-3 line-clamp-2">
                        {cert.title}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <FiBookOpen className="w-4 h-4 mr-2 text-coral-500/70" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FiCalendar className="w-4 h-4 mr-2 text-coral-500/70" />
                          <span>{cert.date}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200/50">
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {cert.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Certificate Details Modal */}
      <CertificateDetailsModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate!}
      />
    </>
  );
};

export default CertificatesModal;
