import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LottiePlayer = ({ 
  src, 
  fallbackSVG, 
  autoplay = true, 
  loop = true, 
  className = "",
  ariaLabel = "Animated illustration"
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [lottieError, setLottieError] = useState(false);

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // IntersectionObserver para controlar animaciones
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simulamos error de Lottie para usar fallback SVG
  useEffect(() => {
    // En un proyecto real, aquí cargarías la librería Lottie
    // Por ahora usamos el fallback SVG siempre
    setLottieError(true);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`lottie-container ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.6 }}
      role="img"
      aria-label={ariaLabel}
    >
      {lottieError || prefersReducedMotion ? (
        <div className="fallback-svg">
          {fallbackSVG}
        </div>
      ) : (
        <div className="lottie-placeholder">
          {/* Aquí se cargaría el componente Lottie real */}
          <div className="fallback-svg">
            {fallbackSVG}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LottiePlayer;