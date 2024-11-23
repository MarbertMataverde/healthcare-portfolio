import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react';
import { usePerformanceMonitoring } from './utils/performance';

// Lazy load components that aren't immediately visible
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Services = lazy(() => import('./components/Services'));
const Tools = lazy(() => import('./components/Tools'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  usePerformanceMonitoring((metrics) => {
    // You can send metrics to your analytics service here
    console.log('Performance metrics:', metrics);
  });

  useEffect(() => {
    // Preload components after initial render
    const preloadComponents = async () => {
      const components = [
        () => import('./components/About'),
        () => import('./components/Experience'),
        () => import('./components/Services'),
        () => import('./components/Tools'),
        () => import('./components/Contact')
      ];

      await Promise.all(components.map(component => component()));
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preloadComponents);
    } else {
      setTimeout(preloadComponents, 1000);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen w-full relative scroll-smooth bg-white overflow-x-hidden">
        <ScrollProgress />
        <ScrollToTop />
        
        {/* Global Background Color */}
        <div className="fixed inset-0 bg-white/50" />

        {/* Optimized Animated Gradient Circles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
              x: [0, 30, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
            className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-coral-200/30 to-coral-300/30 blur-3xl will-change-transform"
            style={{
              translateZ: 0,
              backfaceVisibility: "hidden"
            }}
          />
          
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.3, 0.2],
              x: [-20, 0, -20],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
            className="absolute bottom-[-20%] left-[-10%] w-[48rem] h-[48rem] rounded-full bg-gradient-to-br from-coral-100/20 to-coral-200/20 blur-3xl will-change-transform"
            style={{
              translateZ: 0,
              backfaceVisibility: "hidden"
            }}
          />
          
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{
              scale: [1.05, 0.95, 1.05],
              opacity: [0.2, 0.3, 0.2],
              x: [0, -10, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-coral-50/20 to-coral-100/20 blur-3xl will-change-transform"
            style={{
              translateZ: 0,
              backfaceVisibility: "hidden"
            }}
          />
        </div>

        <main className="relative">
          <Navbar />
          <Hero />
          <Suspense>
            <About />
            <Experience />
            <Services />
            <Tools />
            <Contact />
          </Suspense>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
