import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { lazy, Suspense } from 'react';
import { usePerformanceMonitoring } from './utils/performance';
import Background from './components/Background';

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

  return (
    <div className="min-h-screen w-full relative scroll-smooth bg-white overflow-x-hidden">
      {/* Global Background Color */}
      <div className="fixed inset-0 bg-white/50" />
      <Background />
      
      <Navbar />
      
      <main className="relative pt-20">
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-coral-500 border-t-transparent rounded-full animate-spin" />
        </div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-coral-500 border-t-transparent rounded-full animate-spin" />
        </div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-coral-500 border-t-transparent rounded-full animate-spin" />
        </div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-coral-500 border-t-transparent rounded-full animate-spin" />
        </div>}>
          <Tools />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-coral-500 border-t-transparent rounded-full animate-spin" />
        </div>}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
