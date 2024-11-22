import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Home Assist Home Health",
    duration: "Jul 2024 - Present",
    responsibilities: [
      "Patient eligibility verification & appointment scheduling",
      "Provider verification & physician order management",
      "Comprehensive administrative operations",
      "Non-Clinical Quality Assurance oversight",
      "Multi-channel communication management (calls, email, fax)",
      "Eligibility processing oversight"
    ]
  },
  {
    id: 2,
    title: "OnMyCare Home Health",
    duration: "Jan 2024 - Jul 2024",
    responsibilities: [
      "Authorization processing and approval",
      "DSR (Diverted Service Report) management"
    ]
  },
  {
    id: 3,
    title: "Advance Home Health",
    duration: "Nov 2022 - Dec 2023",
    responsibilities: [
      "Inbound/outbound provider verification calls",
      "Physician order follow-up",
      "Document management & administrative support"
    ]
  },
  {
    id: 4,
    title: "Home Assist Home Health",
    duration: "Nov 2022 - Dec 2023",
    responsibilities: [
      "Core administrative operations",
      "Multi-channel communication management"
    ]
  },
  {
    id: 5,
    title: "HealthFlex Home Health",
    duration: "Nov 2022 - Dec 2023",
    responsibilities: [
      "Document management",
      "Fax system administration"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-coral-50/20 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="experience-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#experience-dots)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[25%] -right-[25%] w-[50%] h-[50%] rounded-full bg-coral-500/10 mix-blend-multiply blur-[120px] animate-blob"></div>
        <div className="absolute -bottom-[25%] -left-[25%] w-[50%] h-[50%] rounded-full bg-purple-500/10 mix-blend-multiply blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-blue-500/10 mix-blend-multiply blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 transition-colors duration-300 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-700 transition-colors duration-300 max-w-3xl mx-auto">
            A timeline of my healthcare administration journey
          </p>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative max-w-4xl mx-auto">
              <div className="grid gap-8 md:gap-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="absolute -inset-px bg-gradient-to-r from-coral-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-coral-600 font-medium group-hover:text-coral-700 transition-colors duration-300">
                              {exp.duration}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                            >
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coral-500/80 group-hover:bg-coral-500 transition-colors duration-300"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
