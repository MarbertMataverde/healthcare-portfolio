import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FiCalendar, FiBookOpen, FiCheck, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { useState } from 'react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills?: string[];
}

interface CertificateDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate;
}

const CertificateDetailsModal = ({ isOpen, onClose, certificate }: CertificateDetailsModalProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Full Screen Image View */}
          <AnimatePresence>
            {isFullScreen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
              >
                <button
                  onClick={toggleFullScreen}
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[80]"
                >
                  <FiMinimize2 className="w-6 h-6 text-white" />
                </button>
                <motion.img
                  src="/hipaa-certificate.jpg"
                  alt={certificate.title}
                  className="max-w-full max-h-[90vh] object-contain"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative w-full max-w-5xl bg-gradient-to-br from-white via-white to-coral-50/30 rounded-2xl shadow-2xl overflow-hidden ${isFullScreen ? 'invisible' : 'visible'}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
              <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M0 32V.5H32" fill="none" stroke="currentColor" strokeWidth="1"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pattern)"></rect>
              </svg>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors z-10"
            >
              <IoClose className="w-6 h-6 text-gray-600" />
            </button>

            {/* Content */}
            <div className="relative p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Certificate Image */}
                <div className="space-y-6">
                  <div className="relative group">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 shadow-lg cursor-pointer"
                      onClick={toggleFullScreen}
                    >
                      <img
                        src="/hipaa-certificate.jpg"
                        alt={certificate.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <FiMaximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
                      </div>
                    </motion.div>
                    <div className="absolute bottom-3 right-3">
                      <button
                        onClick={toggleFullScreen}
                        className="p-2 rounded-lg bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                      >
                        <FiMaximize2 className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Certificate Information */}
                <div className="space-y-6">
                  {/* Header Information */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-bold text-gray-900 mb-2"
                    >
                      {certificate.title}
                    </motion.h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <FiBookOpen className="w-5 h-5 mr-2" />
                        <span>{certificate.issuer}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiCalendar className="w-5 h-5 mr-2" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-gray max-w-none">
                    <div className="p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {certificate.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  {certificate.skills && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills & Competencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center px-3 py-1.5 rounded-lg bg-coral-50 text-coral-600 text-sm"
                          >
                            <FiCheck className="w-4 h-4 mr-1.5" />
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateDetailsModal;
