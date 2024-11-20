import { useEffect, useCallback, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = useCallback(() => {
    const show = window.scrollY > 100;
    if (show !== isVisible) setIsVisible(show);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-coral-300 origin-left z-50 transform"
      style={{ 
        scaleX,
        willChange: 'transform',
        contain: 'strict'
      }}
    />
  );
};

export default ScrollProgress;
