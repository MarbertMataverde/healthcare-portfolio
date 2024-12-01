import { memo } from 'react';

const services = [
  {
    number: "01",
    title: "Medical Records",
    description: "Comprehensive management of patient medical records, ensuring accurate documentation and efficient retrieval while maintaining strict HIPAA compliance.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    features: [
      "Appointment scheduling and reminders",
      "Provider schedule management",
      "Waitlist management and notification",
      "Patient engagement and communication"
    ]
  }
];

const Services = memo(() => {
  return (
    <>
      <div className="section-separator" aria-hidden="true" />
      <section id="services" className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800/90 mb-4">
                Services I Offer
              </h2>
              <p className="text-lg text-gray-600/90 max-w-2xl mx-auto">
                Specialized administrative support ensuring efficient healthcare operations and exceptional patient care
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-4 sm:space-y-6">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group transform transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-gradient-to-b from-coral-500 to-purple-500" />
                    
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Service number and icon */}
                        <div className="flex sm:flex-col items-center sm:items-start gap-4">
                          <span className="text-3xl sm:text-4xl font-serif text-coral-500 font-semibold">
                            {service.number}
                          </span>
                          <div className="p-2.5 rounded-xl bg-coral-50 text-coral-500">
                            {service.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800/90 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600/90 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-600/90">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-coral-500 to-purple-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Services.displayName = 'Services';

export default Services;
