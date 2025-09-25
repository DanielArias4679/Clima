import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import PilarsSection from './components/PilarsSection';
import StickFiguresSection from './components/StickFiguresSection';
import QuotesCarousel from './components/QuotesCarousel';
import Footer from './components/Footer';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Función auxiliar para verificar si un elemento tiene una clase específica
      const hasClass = (element, className) => {
        return element && element.classList && element.classList.contains(className);
      };

      // Función auxiliar para buscar ancestros con clase específica
      const findAncestorWithClass = (element, className) => {
        let current = element;
        while (current && current !== document.body) {
          if (hasClass(current, className)) {
            return current;
          }
          current = current.parentElement;
        }
        return null;
      };

      // Verificar si es un elemento interactivo
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        hasClass(target, 'card-3d') ||
        hasClass(target, 'highlight-animation') ||
        hasClass(target, 'interactive-hover') ||
        findAncestorWithClass(target, 'card-3d') ||
        findAncestorWithClass(target, 'highlight-animation') ||
        findAncestorWithClass(target, 'interactive-hover') ||
        target.getAttribute('role') === 'button' ||
        target.style.cursor === 'pointer';
      
      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      
      // Función auxiliar para verificar si un elemento tiene una clase específica
      const hasClass = (element, className) => {
        return element && element.classList && element.classList.contains(className);
      };

      // Función auxiliar para buscar ancestros con clase específica
      const findAncestorWithClass = (element, className) => {
        let current = element;
        while (current && current !== document.body) {
          if (hasClass(current, className)) {
            return current;
          }
          current = current.parentElement;
        }
        return null;
      };

      // Verificar si estamos saliendo de un elemento interactivo
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        hasClass(target, 'card-3d') ||
        hasClass(target, 'highlight-animation') ||
        hasClass(target, 'interactive-hover') ||
        findAncestorWithClass(target, 'card-3d') ||
        findAncestorWithClass(target, 'highlight-animation') ||
        findAncestorWithClass(target, 'interactive-hover') ||
        target.getAttribute('role') === 'button' ||
        target.style.cursor === 'pointer';
      
      if (isInteractive) {
        setIsHovering(false);
      }
    };

    // Event listeners principales
    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Cursor personalizado mejorado */}
      <motion.div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 800, 
          damping: 35,
          mass: 0.5
        }}
      />

      {/* Animación de carga inicial mejorada */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="fixed inset-0 bg-gradient-to-br from-blue-600 to-green-600 z-50 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 150,
            damping: 12 
          }}
          className="text-white text-8xl font-bold"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 0px rgba(255, 255, 255, 0)",
                "0 0 30px rgba(255, 255, 255, 0.8)",
                "0 0 0px rgba(255, 255, 255, 0)"
              ]
            }}
            transition={{
              duration: 1,
              repeat: 2,
              ease: "easeInOut"
            }}
          >
            🏢
          </motion.span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-32 text-white/80 text-xl font-medium"
        >
          Cargando experiencia...
        </motion.p>
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Header />
        <IntroSection />
        <PilarsSection />
        <StickFiguresSection />
        <QuotesCarousel />
        <Footer />
      </motion.div>

      {/* Botón de scroll to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 interactive-hover"
        aria-label="Volver al inicio"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Indicador de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 z-50 origin-left"
        style={{
          scaleX: 0
        }}
        animate={{
          scaleX: typeof window !== 'undefined' ? 
            (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Efectos adicionales de interactividad */}
      <style jsx>{`
        .interactive-hover {
          cursor: pointer;
        }
        
        button, a, [role="button"] {
          cursor: pointer;
        }
        
        .card-3d, .highlight-animation {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default App;