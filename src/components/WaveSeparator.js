import React from 'react';
import { motion } from 'framer-motion';

const WaveSeparator = ({ inverted = false, color1 = "#3B82F6", color2 = "#10B981" }) => {
  return (
    <div className={`relative h-24 ${inverted ? 'transform rotate-180' : ''}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, ${color1}, ${color2})`
        }}
        animate={{
          background: [
            `linear-gradient(45deg, ${color1}, ${color2})`,
            `linear-gradient(135deg, ${color2}, ${color1})`,
            `linear-gradient(225deg, ${color1}, ${color2})`,
            `linear-gradient(315deg, ${color2}, ${color1})`
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <svg
        className="absolute bottom-0 w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,0V60c0,0,200,40,600,0s600,40,600,0V0Z"
          fill="white"
          animate={{
            d: [
              "M0,0V60c0,0,200,40,600,0s600,40,600,0V0Z",
              "M0,0V80c0,0,300,20,600,0s300,60,600,0V0Z", 
              "M0,0V40c0,0,100,60,600,0s500,20,600,0V0Z",
              "M0,0V60c0,0,200,40,600,0s600,40,600,0V0Z"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;