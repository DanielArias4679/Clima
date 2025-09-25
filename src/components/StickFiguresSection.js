import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { MessageCircle, Users, HandHeart } from 'lucide-react';
import StickFigureAnimation from './StickFigureAnimation';

const StickFiguresSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  const shouldReduceMotion = useReducedMotion();

  const concepts = [
    {
      id: 1,
      title: "Comunicación Efectiva",
      description: "Dialogar con respeto, escuchar activamente y expresar ideas de manera clara para construir puentes de entendimiento.",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50/80 to-blue-100/80",
      animationType: "comunicacion",
      ariaLabel: "Animación de dos figuras comunicándose con bocadillos de diálogo"
    },
    {
      id: 2,
      title: "Trabajo en Equipo",
      description: "Unir fuerzas, compartir objetivos y complementar habilidades para lograr metas que individualmente serían imposibles.",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgGradient: "from-green-50/80 to-green-100/80",
      animationType: "equipo",
      ariaLabel: "Animación de tres figuras trabajando juntas empujando un engranaje"
    },
    {
      id: 3,
      title: "Resolución de Conflictos",
      description: "Transformar diferencias en oportunidades de crecimiento mediante el diálogo constructivo y acuerdos mutuos.",
      icon: HandHeart,
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50/80 to-purple-100/80",
      animationType: "acuerdos",
      ariaLabel: "Animación de dos figuras resolviendo un conflicto y llegando a un acuerdo"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50 relative overflow-hidden"
    >
      {/* Efectos de fondo discretos */}
      <div className="absolute inset-0">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ 
                x: [0, -25, 0],
                y: [0, 25, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 w-24 h-24 bg-green-200/20 rounded-full blur-2xl"
            />
          </>
        )}

        {/* Partículas discretas */}
        {!shouldReduceMotion && Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -30]
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
        {/* Header animado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Conceptos en Acción
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Visualiza cómo estos pilares cobran vida en el día a día institucional
          </motion.p>
        </motion.div>

        {/* Grid de tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {concepts.map((concept, index) => {
            const IconComponent = concept.icon;
            return (
              <ConceptCard
                key={concept.id}
                concept={concept}
                index={index}
                isInView={isInView}
                shouldReduceMotion={shouldReduceMotion}
                IconComponent={IconComponent}
              />
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Ver recursos para mejorar el clima</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Componente individual de tarjeta
const ConceptCard = ({ concept, index, isInView, shouldReduceMotion, IconComponent }) => {
  const [cardInView, setCardInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCardInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: -10 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 100
      }}
      whileHover={!shouldReduceMotion ? { 
        rotateX: 3,
        rotateY: 3,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      } : {}}
      className="h-full perspective-1000"
    >
      <div className={`glassmorphism bg-gradient-to-br ${concept.bgGradient} rounded-3xl p-8 h-full border border-white/40 relative overflow-hidden group cursor-pointer`}>
        {/* Efecto de resplandor sutil */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10"
          whileHover={{ opacity: 0.1 }}
          style={{
            background: `linear-gradient(135deg, ${concept.color.split(' ')[1]}, ${concept.color.split(' ')[3]})`
          }}
        />

        {/* Icono animado */}
        <motion.div
          whileHover={!shouldReduceMotion ? { scale: 1.1, rotate: 5 } : {}}
          className={`inline-flex p-4 bg-gradient-to-r ${concept.color} rounded-2xl mb-6 shadow-lg`}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {/* Contenido */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {concept.title}
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {concept.description}
        </p>

        {/* Animación de stick figure */}
        <div 
          className="flex justify-center items-center h-40"
          aria-label={concept.ariaLabel}
        >
          <StickFigureAnimation 
            type={concept.animationType}
            isVisible={cardInView}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StickFiguresSection;