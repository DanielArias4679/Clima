import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Users } from 'lucide-react';

const QuotesCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "La comunicación asertiva construye puentes",
      author: "Camino hacia el entendimiento",
      icon: Star,
      color: "from-blue-500 to-blue-600"
    },
    {
      text: "El trabajo en equipo multiplica resultados",
      author: "Fuerza de la colaboración",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      text: "Cada conflicto es una oportunidad de aprendizaje",
      author: "Sabiduría del crecimiento",
      icon: Heart,
      color: "from-purple-500 to-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Efectos de fondo parallax */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Partículas brillantes */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -100]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow"
            whileHover={{ scale: 1.05 }}
          >
            Frases que Inspiran
          </motion.h2>
          <motion.p 
            className="text-blue-200 text-xl highlight-animation"
            style={{ color: 'white' }}
          >
            Reflexiones para construir un mejor ambiente institucional
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ 
                  opacity: 0, 
                  x: 100, 
                  scale: 0.8,
                  filter: "blur(10px)"
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  x: -100, 
                  scale: 0.8,
                  filter: "blur(10px)"
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-center absolute inset-0 flex flex-col justify-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  className={`inline-flex p-6 bg-gradient-to-r ${quotes[currentQuote].color} rounded-full mb-8 mx-auto`}
                  style={{
                    boxShadow: `0 0 60px ${quotes[currentQuote].color.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : 
                                            quotes[currentQuote].color.includes('green') ? 'rgba(16, 185, 129, 0.5)' :
                                            'rgba(168, 85, 247, 0.5)'}`
                  }}
                >
                  {React.createElement(quotes[currentQuote].icon, {
                    className: "w-12 h-12 text-white"
                  })}
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight px-4"
                  style={{
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
                  }}
                >
                  "{quotes[currentQuote].text}"
                </motion.blockquote>

                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-blue-200 text-xl font-medium"
                >
                  — {quotes[currentQuote].author}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores mejorados */}
          <div className="flex justify-center gap-6 mt-12">
            {quotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    currentQuote === index 
                      ? 'bg-white' 
                      : 'bg-white/30'
                  }`}
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                  }}
                />
                {currentQuote === index && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progreso automático */}
          <div className="flex justify-center mt-8">
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                key={currentQuote}
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;