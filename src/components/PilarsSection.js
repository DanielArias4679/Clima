import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Settings, CheckCircle2, Heart, Shield, Smile, Bell } from 'lucide-react';
import { PulsingHeart, SwingingBalance, BouncingUsers, RingingBell, SpinningStar } from './AnimatedIcons';
import WaveSeparator from './WaveSeparator';

const PilarsSection = () => {
  const pilars = [
    {
      id: 1,
      title: "Comunicación",
      subtitle: "La base de toda relación saludable",
      icon: RingingBell,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      items: [
        {
          type: "Comunicación Pasiva",
          description: "Evita expresar opiniones, no defiende sus derechos",
          icon: "💬",
          color: "text-gray-600",
          number: "01"
        },
        {
          type: "Comunicación Agresiva", 
          description: "Impone su punto de vista sin considerar a otros",
          icon: "📢",
          color: "text-red-600",
          number: "02"
        },
        {
          type: "Comunicación Asertiva",
          description: "Expresa ideas con respeto, escucha y dialoga",
          icon: "😊",
          color: "text-green-600",
          number: "03"
        }
      ]
    },
    {
      id: 2,
      title: "Trabajo en Equipo",
      subtitle: "Las 5 C que transforman grupos en equipos",
      icon: BouncingUsers,
      color: "from-green-500 to-green-600", 
      bgColor: "from-green-50 to-green-100",
      items: [
        {
          type: "Comunicación",
          description: "Intercambio claro y constante de información",
          icon: "💬",
          color: "text-blue-600",
          number: "01"
        },
        {
          type: "Confianza",
          description: "Base sólida para colaborar sin temores",
          icon: "🤝",
          color: "text-green-600",
          number: "02"
        },
        {
          type: "Compromiso",
          description: "Responsabilidad compartida hacia objetivos comunes",
          icon: "⚡",
          color: "text-purple-600",
          number: "03"
        },
        {
          type: "Coordinación",
          description: "Organización eficiente de tareas y recursos",
          icon: "🎯",
          color: "text-orange-600",
          number: "04"
        },
        {
          type: "Complementariedad",
          description: "Aprovechamiento de fortalezas individuales",
          icon: "🌟",
          color: "text-yellow-600",
          number: "05"
        }
      ]
    },
    {
      id: 3,
      title: "Resolución de Conflictos",
      subtitle: "Transformar diferencias en oportunidades",
      icon: SwingingBalance,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100", 
      items: [
        {
          type: "Fuentes de Conflicto",
          description: "Diferencias de valores, objetivos o métodos",
          icon: "⚡",
          color: "text-red-600",
          number: "01"
        },
        {
          type: "Actitud de Diálogo",
          description: "Escuchar activamente y buscar entendimiento",
          icon: "💭",
          color: "text-blue-600",
          number: "02"
        },
        {
          type: "Soluciones Ganar-Ganar",
          description: "Encontrar alternativas que beneficien a todas las partes",
          icon: "⚖️", 
          color: "text-green-600",
          number: "03"
        }
      ]
    }
  ];

  return (
    <>
      <WaveSeparator />
      
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center gap-4 mb-8"
            >
              <SpinningStar className="w-12 h-12" />
              <PulsingHeart className="w-12 h-12" />
              <SpinningStar className="w-12 h-12" />
            </motion.div>

            <h2 className="text-3xl md:text-6xl font-bold gradient-text mb-6 text-glow">
              Los 3 Pilares Fundamentales
            </h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto highlight-animation"
              whileHover={{ scale: 1.02 }}
            >
              Construye un <span className="font-bold text-blue-600">ambiente institucional sólido</span> con estos elementos clave
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {pilars.map((pilar, index) => {
              const IconComponent = pilar.icon;
              return (
                <motion.div
                  key={pilar.id}
                  initial={{ opacity: 0, y: 100, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="card-3d"
                >
                  <div className={`glassmorphism rounded-3xl p-8 h-full border-2 border-white/30 relative overflow-hidden`}>
                    {/* Efecto de resplandor en hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      whileHover={{ opacity: 0.1 }}
                      style={{
                        background: `linear-gradient(45deg, ${pilar.color.split(' ')[1]}, ${pilar.color.split(' ')[3]})`
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="inline-flex p-6 rounded-3xl mb-8 relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${pilar.color.split(' ')[1]}, ${pilar.color.split(' ')[3]})`
                      }}
                    >
                      <IconComponent className="w-12 h-12" />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-gray-800 mb-4 text-glow">
                      {pilar.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-10 text-lg">
                      {pilar.subtitle}
                    </p>

                    <div className="space-y-6">
                      {pilar.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.3 + itemIndex * 0.2 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                          }}
                          className="glassmorphism rounded-2xl p-6 border border-white/20 relative overflow-hidden cursor-pointer"
                        >
                          {/* Numeración animada */}
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.3 + itemIndex * 0.2 + 0.3,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          >
                            {item.number}
                          </motion.div>

                          <div className="flex items-start gap-4">
                            <motion.span 
                              className="text-3xl"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 15
                              }}
                            >
                              {item.icon}
                            </motion.span>
                            <div>
                              <motion.h4 
                                className={`font-bold text-lg mb-2 ${item.color} highlight-animation`}
                                whileHover={{ scale: 1.05 }}
                              >
                                {item.type}
                              </motion.h4>
                              <p className="text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveSeparator inverted />
    </>
  );
};

export default PilarsSection;