import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Tools from './components/Tools';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div className="min-h-screen w-full relative scroll-smooth bg-white">
          <ScrollProgress />
          
          {/* Global Background Color */}
          <div className="fixed inset-0 bg-white/50" />

          {/* Global Animated Gradient Circles */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-coral-200/40 to-coral-300/40 blur-3xl"
            />
            
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -30, 0],
                y: [0, 50, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-[-20%] left-[-10%] w-[48rem] h-[48rem] rounded-full bg-gradient-to-br from-coral-100/30 to-coral-200/30 blur-3xl"
            />
            
            <motion.div
              animate={{
                scale: [1.1, 0.9, 1.1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-coral-50/30 to-coral-100/30 blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Services />
              <Tools />
              <Contact />
            </main>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
