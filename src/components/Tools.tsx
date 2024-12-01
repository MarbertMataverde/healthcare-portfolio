import { memo, useMemo } from 'react';
import { FaPhone, FaFax, FaNotesMedical, FaCheckCircle, FaComments } from 'react-icons/fa';

interface Tool {
  name: string;
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
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Reliable communication",
          "Cost-effective",
          "Scalable"
        ]
      },
      { 
        name: "Ring Central", 
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Cloud-based",
          "Scalable",
          "Reliable"
        ]
      },
      { 
        name: "One Talk", 
        icon: <FaPhone className="w-6 h-6" />,
        features: [
          "Integrated",
          "Scalable",
          "Reliable"
        ]
      },
      { 
        name: "Vonage", 
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
        icon: <FaFax className="w-6 h-6" />,
        features: [
          "Electronic signature",
          "Document management",
          "Secure"
        ]
      },
      { 
        name: "SRFax", 
        icon: <FaFax className="w-6 h-6" />,
        features: [
          "Secure",
          "Cloud-based",
          "Scalable"
        ]
      },
      { 
        name: "Foxit", 
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
        icon: <FaNotesMedical className="w-6 h-6" />,
        features: [
          "Comprehensive",
          "Healthcare software",
          "Scalable"
        ]
      },
      { 
        name: "Forcura", 
        icon: <FaNotesMedical className="w-6 h-6" />,
        features: [
          "Healthcare workflow",
          "Documentation platform",
          "Scalable"
        ]
      },
      { 
        name: "Data Soft Logic", 
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
        icon: <FaCheckCircle className="w-6 h-6" />,
        features: [
          "Healthcare data analytics",
          "Scalable",
          "Reliable"
        ]
      },
      { 
        name: "Health Trio Connect", 
        icon: <FaCheckCircle className="w-6 h-6" />,
        features: [
          "Healthcare eligibility",
          "Verification system",
          "Scalable"
        ]
      },
      { 
        name: "Medi-Cal Providers", 
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
  const firstThreeCategories = useMemo(() => toolCategories.slice(0, 3), []);
  const lastTwoCategories = useMemo(() => toolCategories.slice(3), []);

  const renderToolItem = (tool: Tool, category: ToolCategory) => (
    <div key={tool.name} className="flex items-center space-x-2.5 py-1.5 px-2 rounded-lg hover:bg-gray-50">
      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`} />
      <span className="text-base text-gray-600">
        {tool.name}
      </span>
    </div>
  );

  const renderCategory = (category: ToolCategory, index?: number) => (
    <div
      key={category.id}
      className={`group relative flex ${
        index === 2 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0' : ''
      }`}
    >
      <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className={`h-0.5 rounded-t-xl bg-gradient-to-r ${category.color}`} />
        
        <div className="p-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-bl from-black/10 via-transparent to-transparent" />
              <div className="relative text-lg">
                {category.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-serif font-bold text-gray-800">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500">
                {category.tools.length} tools
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {category.tools.map(tool => renderToolItem(tool, category))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="tools" className="relative min-h-screen py-20 flex items-center">
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-3">
                Tools That I Use
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging modern healthcare tools for efficient patient care
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
                {firstThreeCategories.map((category, index) => renderCategory(category, index))}
              </div>

              <div className="w-full sm:max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {lastTwoCategories.map(category => renderCategory(category))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Tools.displayName = 'Tools';

export default Tools;
