import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Bell, Star, Settings } from 'lucide-react';

export const PulsingHeart = ({ className = "w-6 h-6" }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Heart className={`${className} text-red-500 icon-pulse`} />
  </motion.div>
);

export const SwingingBalance = ({ className = "w-6 h-6" }) => (
  <motion.div
    animate={{ rotate: [-15, 15, -15] }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{ transformOrigin: "50% 20%" }}
  >
    <Shield className={`${className} text-purple-500`} />
  </motion.div>
);

export const BouncingUsers = ({ className = "w-6 h-6" }) => (
  <motion.div
    animate={{ 
      y: [0, -8, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeOut"
    }}
  >
    <Users className={`${className} text-green-500`} />
  </motion.div>
);

export const RingingBell = ({ className = "w-6 h-6" }) => (
  <motion.div
    animate={{ 
      rotate: [-10, 10, -10, 10, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }}
  >
    <Bell className={`${className} text-blue-500`} />
  </motion.div>
);

export const SpinningStar = ({ className = "w-6 h-6" }) => (
  <motion.div
    animate={{ 
      rotate: 360,
      scale: [1, 1.2, 1]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <Star className={`${className} text-yellow-500`} />
  </motion.div>
);

export const FloatingSettings = ({ className = "w-6 h-6" }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 180, 360]
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Settings className={`${className} text-gray-500`} />
  </motion.div>
);