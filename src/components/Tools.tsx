import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaFax, FaNotesMedical, FaCheckCircle, FaComments } from 'react-icons/fa';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Tool {
  name: string;
  description: string;
  link?: string;
  icon: JSX.Element;
  features?: string[];
}

interface ToolCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  tools: Tool[];
  color: string;
}

const toolCategories: ToolCategory[] = [
  {
    id: 1,
    title: "FOR CALLS",
    icon: <FaPhone className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    tools: [
      { 
        name: "VoIP", 
        description: "Voice over Internet Protocol for reliable communication", 
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Reliable communication",
          "Cost-effective",
          "Scalable"
        ]
      },
      { 
        name: "Ring Central", 
        description: "Cloud-based communications platform", 
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Cloud-based",
          "Scalable",
          "Reliable"
        ]
      },
      { 
        name: "One Talk", 
        description: "Verizon's integrated business communication solution", 
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Integrated",
          "Scalable",
          "Reliable"
        ]
      },
      { 
        name: "Vonage", 
        description: "Cloud communications for seamless connectivity", 
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Cloud-based",
          "Scalable",
          "Reliable"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "FOR FAXING",
    icon: <FaFax className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
    tools: [
      { 
        name: "DocuSign", 
        description: "Electronic signature and document management", 
        icon: <FaFax className="w-6 h-6" />,
        features: [
          "Electronic signature",
          "Document management",
          "Secure"
        ]
      },
      { 
        name: "SRFax", 
        description: "Secure cloud-based faxing solution", 
        icon: <FaFax className="w-6 h-6" />,
        features: [
          "Secure",
          "Cloud-based",
          "Scalable"
        ]
      },
      { 
        name: "Foxit", 
        description: "PDF document management and editing", 
        icon: <FaFax className="w-6 h-6" />,
        features: [
          "PDF management",
          "Editing",
          "Secure"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "FOR ELECTRONIC MEDICAL RECORD (EMR)",
    icon: <FaNotesMedical className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    tools: [
      { 
        name: "Wellsky", 
        description: "Comprehensive healthcare software solutions", 
        icon: <FaNotesMedical className="w-6 h-6" />,
        features: [
          "Comprehensive",
          "Healthcare software",
          "Scalable"
        ]
      },
      { 
        name: "Forcura", 
        description: "Healthcare workflow and documentation platform", 
        icon: <FaNotesMedical className="w-6 h-6" />,
        features: [
          "Healthcare workflow",
          "Documentation platform",
          "Scalable"
        ]
      },
      { 
        name: "Data Soft Logic", 
        description: "Integrated healthcare management system", 
        icon: <FaNotesMedical className="w-6 h-6" />,
        features: [
          "Integrated",
          "Healthcare management",
          "Scalable"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "FOR RUNNING ELIGIBILITY",
    icon: <FaCheckCircle className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    tools: [
      { 
        name: "Inovalon", 
        description: "Healthcare data analytics platform", 
        icon: <FaCheckCircle className="w-6 h-6" />,
        features: [
          "Healthcare data analytics",
          "Scalable",
          "Reliable"
        ]
      },
      { 
        name: "Health Trio Connect", 
        description: "Healthcare eligibility verification system", 
        icon: <FaCheckCircle className="w-6 h-6" />,
        features: [
          "Healthcare eligibility",
          "Verification system",
          "Scalable"
        ]
      },
      { 
        name: "Medi-Cal Providers", 
        description: "California Medicaid program portal", 
        icon: <FaCheckCircle className="w-6 h-6" />,
        features: [
          "California Medicaid",
          "Program portal",
          "Scalable"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "FOR COMMUNICATION AND OTHER CONCERNS",
    icon: <FaComments className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
    tools: [
      { 
        name: "Google Workspace", 
        description: "Integrated suite including Docs, Sheets, Chat, and Meet", 
        icon: <FaComments className="w-6 h-6" />,
        features: [
          "Integrated suite",
          "Docs, Sheets, Chat, and Meet",
          "Scalable"
        ]
      },
      { 
        name: "Microsoft Outlook", 
        description: "Email and calendar management", 
        icon: <FaComments className="w-6 h-6" />,
        features: [
          "Email management",
          "Calendar management",
          "Scalable"
        ]
      },
      { 
        name: "Microsoft Teams", 
        description: "Collaborative communication platform", 
        icon: <FaComments className="w-6 h-6" />,
        features: [
          "Collaborative communication",
          "Platform",
          "Scalable"
        ]
      },
      { 
        name: "Zoom", 
        description: "Video conferencing and virtual meetings", 
        icon: <FaComments className="w-6 h-6" />,
        features: [
          "Video conferencing",
          "Virtual meetings",
          "Scalable"
        ]
      }
    ]
  }
];

const Tools = memo(() => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <section
      id="tools"
      ref={elementRef}
      className="relative min-h-screen py-20 flex items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 hover:text-gray-900 transition-colors duration-300 mb-3">
                Tools That I Use
              </h2>
              <p className="text-lg text-gray-600/90 hover:text-gray-700 transition-colors duration-300 max-w-2xl mx-auto">
                Leveraging modern healthcare tools for efficient patient care
              </p>
            </motion.div>

            <div className="flex flex-col items-center">
              {/* First Row - 3 cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
                {toolCategories.slice(0, 3).map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative flex ${
                      index === 2 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0' : ''
                    }`}
                  >
                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100/50">
                      <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="p-5">
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg relative overflow-hidden group-hover:shadow-xl transition-all duration-300`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-bl from-black/10 via-transparent to-transparent" />
                            <div className="relative text-lg transform group-hover:-translate-y-0.5 transition-transform duration-300">
                              {category.icon}
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-lg font-serif font-bold text-gray-800/95 group-hover:text-gray-900 transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-500/90 group-hover:text-gray-600 transition-colors duration-300">
                              {category.tools.length} tools
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {category.tools.map((tool) => (
                            <motion.div
                              key={tool.name}
                              onHoverStart={() => setHoveredTool(tool.name)}
                              onHoverEnd={() => setHoveredTool(null)}
                              className="relative"
                            >
                              <div className="flex items-center space-x-2.5 py-1.5 px-2 rounded-lg hover:bg-gray-50/80 transition-all duration-200">
                                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`} />
                                <span className="text-base text-gray-600/90 group-hover:text-gray-700 transition-colors duration-300">
                                  {tool.name}
                                </span>
                              </div>

                              {hoveredTool === tool.name && (
                                <motion.div
                                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute z-10 left-0 right-0 mt-2 p-3 bg-white/95 rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-sm"
                                >
                                  <div className="relative">
                                    <div className="absolute -top-[9px] left-4 w-3 h-3 bg-white/95 border-t border-l border-gray-100/50 transform rotate-45" />
                                    <div className="text-sm text-gray-600/90 group-hover:text-gray-700 transition-colors duration-300">
                                      {tool.description}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Second Row - 2 cards */}
              <div className="w-full sm:max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {toolCategories.slice(3).map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                    className="group relative flex"
                  >
                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100/50">
                      <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="p-5">
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg relative overflow-hidden group-hover:shadow-xl transition-all duration-300`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-bl from-black/10 via-transparent to-transparent" />
                            <div className="relative text-lg transform group-hover:-translate-y-0.5 transition-transform duration-300">
                              {category.icon}
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-lg font-serif font-bold text-gray-800/95 group-hover:text-gray-900 transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-500/90 group-hover:text-gray-600 transition-colors duration-300">
                              {category.tools.length} tools
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {category.tools.map((tool) => (
                            <motion.div
                              key={tool.name}
                              onHoverStart={() => setHoveredTool(tool.name)}
                              onHoverEnd={() => setHoveredTool(null)}
                              className="relative"
                            >
                              <div className="flex items-center space-x-2.5 py-1.5 px-2 rounded-lg hover:bg-gray-50/80 transition-all duration-200">
                                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`} />
                                <span className="text-base text-gray-600/90 group-hover:text-gray-700 transition-colors duration-300">
                                  {tool.name}
                                </span>
                              </div>

                              {hoveredTool === tool.name && (
                                <motion.div
                                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute z-10 left-0 right-0 mt-2 p-3 bg-white/95 rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-sm"
                                >
                                  <div className="relative">
                                    <div className="absolute -top-[9px] left-4 w-3 h-3 bg-white/95 border-t border-l border-gray-100/50 transform rotate-45" />
                                    <div className="text-sm text-gray-600/90 group-hover:text-gray-700 transition-colors duration-300">
                                      {tool.description}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Tools.displayName = 'Tools';

export default Tools;
