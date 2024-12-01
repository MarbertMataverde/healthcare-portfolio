import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

const ScrollAnimation = ({ children, className = '' }: ScrollAnimationProps) => {
  return <div className={className}>{children}</div>;
};

export default ScrollAnimation;
