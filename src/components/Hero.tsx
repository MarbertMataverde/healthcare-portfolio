import { memo } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import OptimizedImage from './OptimizedImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
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
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-[25%] -right-[25%] w-[50%] h-[50%] rounded-full bg-coral-500/10 mix-blend-multiply blur-[120px] animate-blob"></div>
        <div className="absolute -bottom-[25%] -left-[25%] w-[50%] h-[50%] rounded-full bg-purple-500/10 mix-blend-multiply blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-blue-500/10 mix-blend-multiply blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles - Only show on larger screens */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-coral-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left relative order-2 lg:order-1">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-20 -left-20 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl hidden lg:block"
            />
            
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
                className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 sm:mb-4"
              >
                Hi, I'm <GradientText>Quezelle Torres</GradientText>
              </motion.h1>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.6}>
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-6"
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
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-xl bg-gradient-to-r from-coral-500 to-purple-500 text-white font-medium shadow-2xl transition-transform duration-200 hover:scale-105 hover:shadow-coral-500/25 hover:text-white/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: 'transform' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-coral-500/0 via-white/25 to-coral-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center group-hover:text-white text-sm sm:text-base">
                    Hire Me
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
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-xl bg-white/10 text-white font-medium border border-white/20 transition-all duration-300 hover:bg-white/20"
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
            className="relative order-1 lg:order-2 max-w-md mx-auto w-full hidden md:block"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-[2rem] sm:rounded-[3rem] blur-2xl opacity-30"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <ScrollAnimation direction="left" delay={0.4}>
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="relative"
              >
                <OptimizedImage
                  src="/hero-image.jpg"
                  alt="Quezelle Torres"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-[2rem] sm:rounded-[3rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                  loading="eager"
                />
                
                {/* Decorative elements */}
                <div className="absolute -right-4 sm:-right-8 top-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-coral-500/20 rounded-full blur-xl" />
                <div className="absolute -left-4 sm:-left-8 bottom-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-purple-500/20 rounded-full blur-xl" />
              </motion.div>
            </ScrollAnimation>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
