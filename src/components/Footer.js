import React from 'react';
import { motion } from 'framer-motion';
import { Heart, User, Star, Sparkles } from 'lucide-react';
import { PulsingHeart, SpinningStar } from './AnimatedIcons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white py-20 relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.5, 1, 1.5]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />

        {/* Constelación de estrellas */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <motion.div
                whileHover={{ rotate: 20, scale: 1.2 }}
                className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-2xl"
              >
                <PulsingHeart className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                }}
              >
                Clima Institucional
              </motion.h3>
              
              <motion.div
                whileHover={{ rotate: -20, scale: 1.2 }}
                className="p-4 bg-gradient-to-r from-green-500 to-purple-500 rounded-full shadow-2xl"
              >
                <SpinningStar className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 leading-relaxed text-lg mb-10 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              Construyendo ambientes más <motion.span 
                className="text-blue-300 font-semibold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                positivos
              </motion.span>, <motion.span 
                className="text-green-300 font-semibold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                colaborativos
              </motion.span> y <motion.span 
                className="text-purple-300 font-semibold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                productivos
              </motion.span> para toda la comunidad educativa e institucional.
            </motion.p>

            <motion.div 
              className="flex justify-center gap-6 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: "🎯", color: "from-red-500 to-pink-500" },
                { icon: "🚀", color: "from-blue-500 to-cyan-500" },
                { icon: "⭐", color: "from-yellow-500 to-orange-500" },
                { icon: "💡", color: "from-green-500 to-emerald-500" },
                { icon: "🎨", color: "from-purple-500 to-violet-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.5,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 15,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center cursor-pointer shadow-lg text-2xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism p-8 rounded-3xl border border-white/20 mb-8"
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-xl"
              >
                <User className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-center">
                <motion.p 
                  className="text-white font-bold text-2xl mb-1"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                  }}
                >
                  Desarrollado por Daniel Arias
                </motion.p>
                <motion.p 
                  className="text-blue-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  Proyecto de Clima Institucional 2025
                </motion.p>
              </div>
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="text-2xl"
              >
                🌟
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              {["D", "a", "n", "i", "e", "l", " ", "A", "r", "i", "a", "s"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.3,
                    color: "#60A5FA",
                    textShadow: "0 0 10px rgba(96, 165, 250, 0.5)"
                  }}
                  className="text-white font-bold text-lg cursor-pointer"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-gray-700/50 pt-8"
          >
            <motion.p 
              className="text-gray-400 mb-3"
              whileHover={{ scale: 1.02 }}
            >
              © 2025 - Construido con <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block text-red-400"
              >
                ❤️
              </motion.span> para mejorar ambientes de trabajo y estudio
            </motion.p>
            
            <motion.p 
              className="text-gray-500 text-lg"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
              }}
            >
              <motion.span
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "Juntos creamos espacios donde todos pueden brillar"
              </motion.span> <motion.span
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                ✨
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;