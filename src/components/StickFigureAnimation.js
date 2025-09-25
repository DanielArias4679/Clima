import React from 'react';
import { motion } from 'framer-motion';

const StickFigureAnimation = ({ type, isVisible, shouldReduceMotion }) => {
  if (shouldReduceMotion) {
    return <StaticStickFigure type={type} />;
  }

  switch (type) {
    case 'comunicacion':
      return <ComunicacionAnimation isVisible={isVisible} />;
    case 'equipo':
      return <EquipoAnimation isVisible={isVisible} />;
    case 'acuerdos':
      return <AcuerdosAnimation isVisible={isVisible} />;
    default:
      return <div className="text-gray-400">Animación no encontrada</div>;
  }
};

// Animación de Comunicación
const ComunicacionAnimation = ({ isVisible }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        className="stick-anim"
      >
        {/* Figura 1 */}
        <g>
          {/* Cabeza */}
          <motion.circle
            cx="50"
            cy="25"
            r="8"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            animate={isVisible ? {
              scale: [1, 1.1, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Cuerpo */}
          <motion.line
            x1="50"
            y1="33"
            x2="50"
            y2="70"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Brazos */}
          <motion.line
            x1="50"
            y1="45"
            x2="35"
            y2="55"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isVisible ? {
              rotate: [0, -10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "50px 45px" }}
          />
          <motion.line
            x1="50"
            y1="45"
            x2="65"
            y2="55"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isVisible ? {
              rotate: [0, 10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "50px 45px" }}
          />
          {/* Piernas */}
          <motion.line
            x1="50"
            y1="70"
            x2="40"
            y2="95"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.line
            x1="50"
            y1="70"
            x2="60"
            y2="95"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Figura 2 */}
        <g>
          {/* Cabeza */}
          <motion.circle
            cx="150"
            cy="25"
            r="8"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            animate={isVisible ? {
              scale: [1, 1.1, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          {/* Cuerpo */}
          <motion.line
            x1="150"
            y1="33"
            x2="150"
            y2="70"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Brazos */}
          <motion.line
            x1="150"
            y1="45"
            x2="135"
            y2="55"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isVisible ? {
              rotate: [0, 10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{ transformOrigin: "150px 45px" }}
          />
          <motion.line
            x1="150"
            y1="45"
            x2="165"
            y2="55"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isVisible ? {
              rotate: [0, -10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{ transformOrigin: "150px 45px" }}
          />
          {/* Piernas */}
          <motion.line
            x1="150"
            y1="70"
            x2="140"
            y2="95"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.line
            x1="150"
            y1="70"
            x2="160"
            y2="95"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Bocadillos de diálogo */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? {
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut"
          }}
        >
          {/* Bocadillo 1 */}
          <ellipse cx="30" cy="10" rx="15" ry="8" fill="white" stroke="#3B82F6" strokeWidth="1"/>
          <polygon points="35,18 40,25 30,20" fill="white" stroke="#3B82F6" strokeWidth="1"/>
          <text x="30" y="13" textAnchor="middle" fontSize="8" fill="#3B82F6">¡Hola!</text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? {
            opacity: [0, 0, 1, 1, 0],
            scale: [0, 0, 1, 1, 0]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: "easeInOut"
          }}
        >
          {/* Bocadillo 2 */}
          <ellipse cx="170" cy="10" rx="18" ry="8" fill="white" stroke="#10B981" strokeWidth="1"/>
          <polygon points="165,18 160,25 170,20" fill="white" stroke="#10B981" strokeWidth="1"/>
          <text x="170" y="13" textAnchor="middle" fontSize="7" fill="#10B981">¿Cómo estás?</text>
        </motion.g>
      </svg>
    </div>
  );
};

// Animación de Trabajo en Equipo
const EquipoAnimation = ({ isVisible }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="220"
        height="120"
        viewBox="0 0 220 120"
        className="stick-anim"
      >
        {/* Engranaje central */}
        <motion.g
          animate={isVisible ? {
            rotate: 360
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "110px 60px" }}
        >
          <circle cx="110" cy="60" r="20" fill="none" stroke="#6B7280" strokeWidth="2"/>
          {/* Dientes del engranaje */}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x1 = 110 + Math.cos(angle) * 20;
            const y1 = 60 + Math.sin(angle) * 20;
            const x2 = 110 + Math.cos(angle) * 25;
            const y2 = 60 + Math.sin(angle) * 25;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
        </motion.g>

        {/* Figura 1 - Izquierda */}
        <motion.g
          animate={isVisible ? {
            x: [0, 5, 0, -5, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="40" cy="40" r="6" fill="none" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="40" y1="46" x2="40" y2="70" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="40" y1="55" x2="55" y2="65" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="40" y1="55" x2="25" y2="50" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="40" y1="70" x2="35" y2="85" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="40" y1="70" x2="45" y2="85" stroke="#3B82F6" strokeWidth="2"/>
        </motion.g>

        {/* Figura 2 - Centro */}
        <motion.g
          animate={isVisible ? {
            y: [0, -3, 0, 3, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          <circle cx="110" cy="30" r="6" fill="none" stroke="#10B981" strokeWidth="2"/>
          <line x1="110" y1="36" x2="110" y2="60" stroke="#10B981" strokeWidth="2"/>
          <line x1="110" y1="45" x2="95" y2="40" stroke="#10B981" strokeWidth="2"/>
          <line x1="110" y1="45" x2="125" y2="40" stroke="#10B981" strokeWidth="2"/>
          <line x1="110" y1="60" x2="105" y2="75" stroke="#10B981" strokeWidth="2"/>
          <line x1="110" y1="60" x2="115" y2="75" stroke="#10B981" strokeWidth="2"/>
        </motion.g>

        {/* Figura 3 - Derecha */}
        <motion.g
          animate={isVisible ? {
            x: [0, -5, 0, 5, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        >
          <circle cx="180" cy="40" r="6" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="180" y1="46" x2="180" y2="70" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="180" y1="55" x2="165" y2="65" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="180" y1="55" x2="195" y2="50" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="180" y1="70" x2="175" y2="85" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="180" y1="70" x2="185" y2="85" stroke="#8B5CF6" strokeWidth="2"/>
        </motion.g>

        {/* Líneas de esfuerzo */}
        <motion.g
          animate={isVisible ? {
            opacity: [0.3, 1, 0.3]
          } : {}}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <line x1="55" y1="65" x2="85" y2="70" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,2"/>
          <line x1="95" y1="40" x2="90" y2="50" stroke="#10B981" strokeWidth="2" strokeDasharray="3,2"/>
          <line x1="165" y1="65" x2="135" y2="70" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3,2"/>
        </motion.g>
      </svg>
    </div>
  );
};

// Animación de Resolución de Conflictos
const AcuerdosAnimation = ({ isVisible }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        className="stick-anim"
      >
        {/* Figura 1 */}
        <motion.g
          initial={{ x: -20 }}
          animate={isVisible ? {
            x: 0
          } : { x: -20 }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          <circle cx="60" cy="30" r="8" fill="none" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="60" y1="38" x2="60" y2="70" stroke="#3B82F6" strokeWidth="2"/>
          <motion.line
            x1="60"
            y1="50"
            x2="45"
            y2="55"
            stroke="#3B82F6"
            strokeWidth="2"
            animate={isVisible ? {
              x2: [45, 85, 85],
              y2: [55, 50, 50]
            } : {}}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: "easeInOut"
            }}
          />
          <line x1="60" y1="50" x2="75" y2="45" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="60" y1="70" x2="50" y2="90" stroke="#3B82F6" strokeWidth="2"/>
          <line x1="60" y1="70" x2="70" y2="90" stroke="#3B82F6" strokeWidth="2"/>
        </motion.g>

        {/* Figura 2 */}
        <motion.g
          initial={{ x: 20 }}
          animate={isVisible ? {
            x: 0
          } : { x: 20 }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          <circle cx="140" cy="30" r="8" fill="none" stroke="#10B981" strokeWidth="2"/>
          <line x1="140" y1="38" x2="140" y2="70" stroke="#10B981" strokeWidth="2"/>
          <motion.line
            x1="140"
            y1="50"
            x2="155"
            y2="55"
            stroke="#10B981"
            strokeWidth="2"
            animate={isVisible ? {
              x2: [155, 115, 115],
              y2: [55, 50, 50]
            } : {}}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: "easeInOut"
            }}
          />
          <line x1="140" y1="50" x2="125" y2="45" stroke="#10B981" strokeWidth="2"/>
          <line x1="140" y1="70" x2="130" y2="90" stroke="#10B981" strokeWidth="2"/>
          <line x1="140" y1="70" x2="150" y2="90" stroke="#10B981" strokeWidth="2"/>
        </motion.g>

        {/* Apretón de manos */}
        <motion.ellipse
          cx="100"
          cy="50"
          rx="15"
          ry="8"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? {
            opacity: [0, 0, 1],
            scale: [0, 0, 1]
          } : {}}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeOut"
          }}
        />

        {/* Check de acuerdo */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? {
            opacity: [0, 0, 0, 1],
            scale: [0, 0, 0, 1.2, 1],
            rotate: [0, 0, 0, 360]
          } : {}}
          transition={{
            duration: 3,
            delay: 3,
            ease: "easeOut"
          }}
        >
          <circle cx="100" cy="15" r="12" fill="#22C55E" stroke="#16A34A" strokeWidth="2"/>
          <path
            d="M95 15 L98 18 L105 11"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Líneas de tensión inicial */}
        <motion.g
          animate={isVisible ? {
            opacity: [1, 1, 0]
          } : {}}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <motion.line
              key={i}
              x1="85"
              y1={40 + i * 5}
              x2="115"
              y2={40 + i * 5}
              stroke="#EF4444"
              strokeWidth="1"
              strokeDasharray="2,2"
              animate={isVisible ? {
                opacity: [0.8, 0.3, 0.8]
              } : {}}
              transition={{
                duration: 0.5,
                repeat: 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

// Componente estático para accesibilidad
const StaticStickFigure = ({ type }) => {
  const figures = {
    comunicacion: "👥💬",
    equipo: "👥⚙️",
    acuerdos: "🤝✅"
  };

  return (
    <div className="text-6xl opacity-80 flex items-center justify-center h-full">
      {figures[type] || "🎭"}
    </div>
  );
};

export default StickFigureAnimation;