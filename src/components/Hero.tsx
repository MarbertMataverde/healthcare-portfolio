import { memo } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const GradientText = memo(({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={`bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ${className}`}
  >
    {children}
  </motion.span>
));

GradientText.displayName = 'GradientText';

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-12 lg:py-20 overflow-hidden"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50/20 via-purple-50/15 to-blue-50/20" />
        
        {/* Simplified decorative elements */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-200/20 via-blue-200/15 to-coral-200/20 blur-[80px]" />
        <div className="absolute left-1/4 top-1/4 w-24 h-24 rounded-full bg-coral-200/15 blur-xl" />
        <div className="absolute right-1/3 bottom-1/4 w-16 h-16 rounded-full bg-blue-200/15 blur-lg" />
        
        {/* Optimized flowing lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-50"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 600Q360 550 720 600T1440 550"
            stroke="url(#flow-gradient-1)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: [
                "M0 600Q360 550 720 600T1440 550",
                "M0 580Q360 630 720 580T1440 630",
                "M0 600Q360 550 720 600T1440 550"
              ]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5 },
              d: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <motion.path
            d="M0 700Q360 650 720 700T1440 650"
            stroke="url(#flow-gradient-2)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: [
                "M0 700Q360 650 720 700T1440 650",
                "M0 680Q360 730 720 680T1440 730",
                "M0 700Q360 650 720 700T1440 650"
              ]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5 },
              d: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
          />
          <defs>
            <linearGradient id="flow-gradient-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="flow-gradient-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Full width on small screens */}
          <div className="text-center lg:text-left order-2 lg:order-1 col-span-1 lg:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.2em] text-coral-500 mb-3 font-medium"
            >
              Healthcare Specialist
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4"
            >
              Hi, I'm <GradientText>Quezelle Torres</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
            >
              Dedicated healthcare specialist with expertise in delivering quality patient care, supporting healthcare operations, and ensuring optimal outcomes for patients and organizations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-coral-500 to-purple-500 text-white font-medium shadow-md transition-all duration-200 hover:shadow-lg hover:translate-y-[-1px]"
              >
                <span className="flex items-center text-base">
                  Let's Work Together
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-50 text-gray-900 font-medium border border-gray-200 transition-all duration-200 hover:bg-gray-100 hover:translate-y-[-1px]"
              >
                <span className="flex items-center text-base">
                  More About Me
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Image - Hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 hidden lg:block"
          >
            <OptimizedImage
              src="/optimized/hero-image.webp"
              alt="Quezelle Torres"
              width={800}
              height={800}
              className="w-full max-w-[800px] h-auto mx-auto"
              sizes="800px"
              loading="eager"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
