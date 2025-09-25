import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titleText = "Mejorando el Clima Institucional";
  const subtitleText = "Comunicación, trabajo en equipo y resolución de conflictos para crecer juntos";

  // Efecto máquina de escribir
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < titleText.length) {
        setDisplayText(titleText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(titleText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === titleText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, titleText]);

  // Generar partículas
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10
  }));

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
      {/* Gradiente animado de fondo */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #3B82F6, #10B981)",
            "linear-gradient(135deg, #1E40AF, #059669)", 
            "linear-gradient(225deg, #2563EB, #047857)",
            "linear-gradient(315deg, #3B82F6, #10B981)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white/20 rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Ondas decorativas */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-300 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Título con efecto máquina de escribir */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight text-glow">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-yellow-300"
              >
                |
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="glassmorphism rounded-3xl p-8 mb-12"
          >
            <p className="text-xl md:text-3xl font-medium leading-relaxed text-blue-50">
              {subtitleText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 hover:opacity-10"
                whileHover={{ opacity: 0.1 }}
              />
              Conocé más sobre el clima institucional
            </motion.button>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
            <p className="text-white/70 text-sm mt-2 font-medium">Scroll para explorar</p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;