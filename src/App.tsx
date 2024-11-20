import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';

// Lazy load components that aren't immediately visible
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Services = lazy(() => import('./components/Services'));
const Tools = lazy(() => import('./components/Tools'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced to 1 second

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

          {/* Optimized Animated Gradient Circles */}
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
                ease: "linear",
                repeatType: "reverse"
              }}
              className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-coral-200/40 to-coral-300/40 blur-3xl will-change-transform"
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
                ease: "linear",
                repeatType: "reverse"
              }}
              className="absolute bottom-[-20%] left-[-10%] w-[48rem] h-[48rem] rounded-full bg-gradient-to-br from-coral-100/30 to-coral-200/30 blur-3xl will-change-transform"
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
                ease: "linear",
                repeatType: "reverse"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-coral-50/30 to-coral-100/30 blur-3xl will-change-transform"
            />
          </div>

          <main className="relative">
            <Navbar />
            <Hero />
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
              <About />
              <Experience />
              <Services />
              <Tools />
              <Contact />
            </Suspense>
          </main>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
