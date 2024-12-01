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
      
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Tools />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
