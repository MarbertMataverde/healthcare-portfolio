import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const loadingMessages = [
    "Optimizing Healthcare Solutions",
    "Preparing Virtual Assistance",
    "Loading Digital Excellence",
    "Creating Seamless Experience"
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="relative">
        {/* Main circle with gradient border */}
        <div className="w-24 h-24 rounded-full border-t-2 border-b-2 border-coral-500 animate-spin"></div>
        
        {/* Inner pulsing circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 rounded-full blur-sm"
        />
        
        {/* Loading text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center w-64"
        >
          <motion.span
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="block text-lg font-medium bg-gradient-to-r from-coral-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
          >
            {loadingMessages[messageIndex]}
          </motion.span>
          <motion.div 
            animate={{
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center gap-1 mt-2"
          >
            <span className="w-2 h-2 bg-coral-500 rounded-full"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
