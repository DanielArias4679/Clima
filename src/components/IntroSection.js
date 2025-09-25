import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Zap } from 'lucide-react';
import { PulsingHeart, BouncingUsers } from './AnimatedIcons';

const IntroSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"
        />

        {/* Partículas brillantes */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -50, -100]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              className="inline-flex items-center gap-6 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 20 }}
                className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl"
              >
                <PulsingHeart className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl"
              >
                ✨
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-2xl"
              >
                <BouncingUsers className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold gradient-text mb-8"
              style={{
                textShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
              }}
            >
              ¿Qué es el Clima Institucional?
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              type: "spring"
            }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.2)"
            }}
            className="glassmorphism rounded-3xl p-12 border-2 border-white/40 relative overflow-hidden group"
          >
            {/* Efecto de resplandor en hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            {/* Efectos decorativos internos */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60"
            />

            <motion.p 
              className="text-xl md:text-2xl leading-relaxed text-gray-700 text-center font-medium mb-8 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              El clima institucional es el <motion.span 
                className="text-blue-600 font-bold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                ambiente emocional y social
              </motion.span> que se vive en una organización. 
              Es la suma de las <motion.span 
                className="text-green-600 font-bold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                percepciones, actitudes y sentimientos
              </motion.span> que comparten las personas 
              sobre su lugar de trabajo, estudios o convivencia. Un buen clima institucional favorece el 
              <motion.span 
                className="text-blue-600 font-bold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              > 
                crecimiento personal y colectivo
              </motion.span>, mejora la productividad 
              y genera espacios donde todos pueden <motion.span 
                className="text-green-600 font-bold highlight-animation cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                desarrollar su potencial
              </motion.span> de manera plena y satisfactoria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-8 rounded-2xl border border-blue-200/50 relative overflow-hidden group"
            >
              {/* Efectos brillantes internos */}
              <motion.div
                animate={{ 
                  x: [-100, 100],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-4 right-4 text-2xl"
              >
                💡
              </motion.div>

              <motion.p 
                className="text-center text-blue-700 font-bold text-xl relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Un ambiente positivo transforma vidas y potencia resultados
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Botón de acción adicional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mt-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Explorar más conceptos</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;