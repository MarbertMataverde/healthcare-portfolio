import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50,
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' || direction === 'down' ? directionOffset[direction] : 0,
        x: direction === 'left' || direction === 'right' ? directionOffset[direction] : 0,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : (direction === 'up' || direction === 'down' ? directionOffset[direction] : 0),
        x: isInView ? 0 : (direction === 'left' || direction === 'right' ? directionOffset[direction] : 0),
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
