import { memo } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import OptimizedImage from './OptimizedImage';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

const GradientText = memo(({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ${className}`}>
    {children}
  </span>
));

GradientText.displayName = 'GradientText';

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen py-20 flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Modern Abstract Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50/30 via-purple-50/20 to-blue-50/30" />
        
        {/* Abstract elements container */}
        <div className="absolute inset-0">
          {/* Large gradient sphere */}
          <div className="absolute right-0 top-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-200/30 via-blue-200/25 to-coral-200/30 blur-[100px] transform -translate-x-1/4" />
          
          {/* Floating circles */}
          <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-coral-200/20 blur-xl animate-float-slow" />
          <div className="absolute right-1/3 bottom-1/4 w-24 h-24 rounded-full bg-blue-200/20 blur-lg animate-float-slower" />
          <div className="absolute left-1/3 bottom-1/3 w-16 h-16 rounded-full bg-purple-200/20 blur-md animate-float" />

          {/* Abstract flowing lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="flow-gradient-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="flow-gradient-2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="flow-gradient-3" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#FF6B6B" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* Flowing line 1 - Coral to Purple to Blue */}
            <path
              d="M0 600Q360 550 720 600T1440 550"
              stroke="url(#flow-gradient-1)"
              strokeWidth="3"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M0 600Q360 550 720 600T1440 550;
                  M0 600Q360 600 720 550T1440 600;
                  M0 600Q360 550 720 600T1440 550"
              />
            </path>

            {/* Flowing line 2 - Purple to Blue to Coral */}
            <path
              d="M0 700Q360 650 720 700T1440 650"
              stroke="url(#flow-gradient-2)"
              strokeWidth="3"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="25s"
                repeatCount="indefinite"
                values="
                  M0 700Q360 650 720 700T1440 650;
                  M0 700Q360 700 720 650T1440 700;
                  M0 700Q360 650 720 700T1440 650"
              />
            </path>

            {/* Flowing line 3 - Blue to Coral to Purple */}
            <path
              d="M0 650Q360 600 720 650T1440 600"
              stroke="url(#flow-gradient-3)"
              strokeWidth="3"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="22s"
                repeatCount="indefinite"
                values="
                  M0 650Q360 600 720 650T1440 600;
                  M0 650Q360 650 720 600T1440 650;
                  M0 650Q360 600 720 650T1440 600"
              />
            </path>

            {/* Additional decorative elements */}
            <circle cx="25%" cy="85%" r="4" fill="#FF6B6B" opacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;0.2;0.4"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="75%" cy="90%" r="3" fill="#A78BFA" opacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;0.2;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="40%" cy="95%" r="2" fill="#60A5FA" opacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;0.2;0.4"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left relative order-2 lg:order-1">
            <ScrollAnimation direction="up" delay={0.2}>
              <motion.h2 
                variants={itemVariants}
                className="text-xs sm:text-sm uppercase tracking-[0.2em] text-coral-500 mb-2 sm:mb-3 font-medium"
              >
                Healthcare Specialist
              </motion.h2>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.4}>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3 sm:mb-4"
              >
                Hi, I'm <GradientText>Quezelle Torres</GradientText>
              </motion.h1>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.6}>
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-6"
              >
                Dedicated healthcare specialist with expertise in delivering quality patient care, supporting healthcare operations, and ensuring optimal outcomes for patients and organizations.
              </motion.p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.8}>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-xl bg-gradient-to-r from-coral-500 to-purple-500 text-white font-medium shadow-lg transition-transform duration-200 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: 'transform' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-coral-500/0 via-white/25 to-coral-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center text-sm sm:text-base">
                    Let's Work Together
                    <svg 
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </motion.a>

                <motion.a
                  href="#about"
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-xl bg-gray-50 text-gray-900 font-medium border border-gray-200 transition-all duration-300 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center text-sm sm:text-base">
                    More About Me
                    <svg 
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>
            </ScrollAnimation>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <ScrollAnimation direction="left" delay={0.4}>
              <motion.div className="relative">
                <OptimizedImage
                  src="/optimized/hero-image.webp"
                  alt="Quezelle Torres"
                  width={1000}
                  height={1000}
                  className="w-full max-w-[900px] h-auto relative z-10 mx-auto"
                  loading="eager"
                />
              </motion.div>
            </ScrollAnimation>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
