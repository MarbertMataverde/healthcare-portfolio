import React from 'react';
import { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
      
      {/* Mesh gradient pattern - simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: isMobile ? `
            radial-gradient(at 40% 20%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(147,51,234,0.03) 0px, transparent 50%)
          ` : `
            radial-gradient(at 40% 20%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(147,51,234,0.03) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(147,51,234,0.03) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(147,51,234,0.03) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: 'center center',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}>
      </div>
      
      {/* Soft glow effects - disabled on mobile */}
      {!isMobile && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-coral-200/3 to-purple-200/3 rounded-full blur-3xl"></div>
      )}

      {/* Subtle grid overlay - simplified for mobile */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.95) 0.5px,transparent 0.5px), linear-gradient(90deg,rgba(255,255,255,.95) 0.5px,transparent 0.5px)',
          backgroundSize: isMobile ? '80px 80px' : '40px 40px',
          maskImage: 'radial-gradient(ellipse at center,transparent 20%,black 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center,transparent 20%,black 70%)',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}>
      </div>
    </div>
  );
};

export default Background;
