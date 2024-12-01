const experiences = [
  {
    id: 1,
    title: "Home Assist Home Health",
    period: "Jul 2024 - Present",
    responsibilities: [
      "Patient eligibility verification & appointment scheduling",
      "Provider verification & physician order management",
      "Comprehensive administrative operations",
      "Non-Clinical Quality Assurance oversight",
      "Multi-channel communication management (calls, email, fax)",
      "Eligibility processing oversight"
    ],
    color: 'from-coral-500 to-purple-500'
  },
  {
    id: 2,
    title: "OnMyCare Home Health",
    period: "Jan 2024 - Jul 2024",
    responsibilities: [
      "Authorization processing and approval",
      "DSR (Diverted Service Report) management"
    ],
    color: 'from-purple-500 to-coral-500'
  },
  {
    id: 3,
    title: "Advance Home Health",
    period: "Nov 2022 - Dec 2023",
    responsibilities: [
      "Inbound/outbound provider verification calls",
      "Physician order follow-up",
      "Document management & administrative support"
    ],
    color: 'from-coral-500 to-purple-500'
  },
  {
    id: 4,
    title: "Home Assist Home Health",
    period: "Nov 2022 - Dec 2023",
    responsibilities: [
      "Core administrative operations",
      "Multi-channel communication management"
    ],
    color: 'from-purple-500 to-coral-500'
  },
  {
    id: 5,
    title: "HealthFlex Home Health",
    period: "Nov 2022 - Dec 2023",
    responsibilities: [
      "Document management",
      "Fax system administration"
    ],
    color: 'from-coral-500 to-purple-500'
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-16 lg:py-20 flex items-center"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.8)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,.8)_0.5px,transparent_0.5px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600/90 max-w-2xl mx-auto">
              A timeline of my healthcare administration journey
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="transform transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-gradient-to-b ${experience.color}`} />
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800/90 mb-2">
                          {experience.title}
                        </h3>
                        <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm">
                          {experience.period}
                        </span>
                      </div>
                      
                      {/* Responsibilities */}
                      <ul className="space-y-2.5">
                        {experience.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${experience.color}`} />
                            <span className="text-gray-600/90 leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
