import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
      
      {/* Mesh gradient pattern */}
      <div className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(147,51,234,0.03) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(147,51,234,0.03) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(251,113,133,0.03) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(147,51,234,0.03) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}>
      </div>
      
      {/* Soft glow effects - centered */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-coral-200/3 to-purple-200/3 rounded-full blur-3xl"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.95)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(255,255,255,.95)_0.5px,transparent_0.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
    </div>
  );
};

export default Background;
