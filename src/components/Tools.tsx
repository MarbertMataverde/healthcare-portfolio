import { memo } from 'react';
import { FaPhone, FaFax, FaNotesMedical, FaCheckCircle, FaComments } from 'react-icons/fa';
import { useState } from 'react';

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
      }
    ]
  }
];

const Tools = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="tools" className="relative py-20 bg-[linear-gradient(rgba(255,255,255,.9)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,.9)_0.5px,transparent_0.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.05)_70%,rgba(255,255,255,0.1)_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-display mb-4">
              <span className="bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Tools & Technologies
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging modern healthcare technology for efficient administration and seamless patient care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {toolCategories.map((category) => (
              <div key={category.id} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-[2rem] blur-2xl opacity-30" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-gray-100/20 shadow-xl">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg mb-6`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>

                  <div className="space-y-4">
                    {category.tools.map((tool) => (
                      <div 
                        key={tool.name}
                        className="p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors duration-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md`}>
                            {tool.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{tool.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                            {tool.features && (
                              <ul className="mt-2 space-y-1">
                                {tool.features.map((feature, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} mr-2`} />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Tools;
