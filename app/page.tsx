"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, ExternalLink, Globe, Layers, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FloatingPlanets } from "@/components/floating-planets"
import { ParticleBackground } from "@/components/particle-background"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function Home() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background */}
      <ParticleBackground />

      {/* Floating planets/logos */}
      <FloatingPlanets />

      {/* Main content container */}
      <div className="relative z-20">
        {/* Navigation */}
        <NavBar />

        {/* Hero Section */}
        <motion.section
          style={{ opacity: heroOpacity, y: heroTranslateY }}
          className="container mx-auto px-4 pt-20 pb-32 text-center relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 bg-gray-800/80 rounded-full text-sm font-medium mb-6"
            >
              {/* Removing the "NEW" text */}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              El futuro de la web 3 se construye desde web 2
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl md:text-4xl font-medium mb-8"
            >
              
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Innovación esencial para los emprededores Mypes y pequeños negocios
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="cosmos" size="lg" className="group relative overflow-hidden" asChild>
                <Link href="#transfer">
                  <span className="relative z-10">Make a Transfer</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="cosmosOutline" size="lg" className="group" asChild>
                <Link href="#expert">
                  <span>Speak to an Expert</span>
                  <span className="absolute inset-0 bg-gray-700/0 group-hover:bg-gray-700/30 transition-colors duration-300 rounded-md"></span>
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Interchain Technology</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The Internet of Blockchains is powered by IBC, the Inter-Blockchain Communication protocol.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/ods.png"
                },
                {
                  image: "/ods1.jpg"
                },
                {
                  image: "/img.png"
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex justify-center">
                    <div className="w-64 h-64 relative">
                      <img 
                        src={feature.image} 
                        alt="ODS Icon" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">MembresIAs Disponibles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seleccione el plan que mejor se adapte a sus necesidades de desarrollo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Silver */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-teal-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-teal-600/80 backdrop-blur-sm p-4 text-center border-b border-teal-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Silver</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-32 relative">
                      <img 
                        src="/rocket.jpg" 
                        alt="Rocket" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">Para quienes están iniciando en el ecosistema digital y desean explorar oportunidades.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span>Desarrollo básico</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span>Soporte inicial</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span>Personalización limitada</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Freeze */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-cyan-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-cyan-600/80 backdrop-blur-sm p-4 text-center border-b border-cyan-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Freeze</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-32 relative">
                      <img 
                        src="/rocket.jpg" 
                        alt="Rocket" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">Para negocios que buscan ampliar su presencia, conectar con desarrolladores y fortalecer estrategias digitales.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Desarrollo intermedio</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Soporte extendido</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span>Personalización avanzada</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Fire */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-blue-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-blue-600/80 backdrop-blur-sm p-4 text-center border-b border-blue-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Fire</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-32 relative">
                      <img 
                        src="/rocket.jpg" 
                        alt="Rocket" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">Dirigido a emprendimientos mypes que quieren innovar con blockchain, herramientas avanzadas.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Desarrollo avanzado</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Soporte premium</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Integración blockchain</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Crack */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-indigo-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-indigo-600/80 backdrop-blur-sm p-4 text-center border-b border-indigo-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Crack</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-32 relative">
                      <img 
                        src="/rocket.jpg" 
                        alt="Rocket" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">La membresía más completa, diseñada para acelerar el crecimiento digital y maximizar la integración tecnológica.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      <span>Desarrollo completo</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      <span>Soporte 24/7</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      <span>Integración total</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Button variant="cosmos" size="lg" className="group" asChild>
                <Link href="#contact">
                  Solicitar Presupuesto{" "}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* IBC Eureka Section */}
        <section id="ibc-eureka" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-4 py-1 bg-gray-800/80 rounded-full text-sm font-medium mb-6">
                  DESTACADO
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Agentes de IA</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Transformando la experiencia de usuario en blockchain y tiendas web 2 con inteligencia artificial avanzada.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Asistentes virtuales personalizados",
                    "Automatización de procesos comerciales",
                    "Análisis predictivo de comportamiento",
                    "Integración con sistemas blockchain",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-500 mr-3 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Button variant="cosmos" size="lg" asChild>
                  <Link href="#learn-more">
                    Conocer Más <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute inset-10 border-2 border-gray-700/50 rounded-full overflow-hidden">
                    <img 
                      src="/ods3.jpg" 
                      alt="ODS 3" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 120,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-full h-full absolute"
                    >
                      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center">
                        <Layers className="w-6 h-6" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 90,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-3/4 h-3/4 absolute border border-gray-700/30 rounded-full"
                    >
                      <div className="absolute top-0 right-10 w-10 h-10 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                        <img 
                          src="/dev.jpg" 
                          alt="Dev JPH" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    {/* IBC circle removed */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ODS, Blockchain and AI Section */}
        <section id="sustainability" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Impacto Sostenible</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Combinamos blockchain e inteligencia artificial para impulsar los Objetivos de Desarrollo Sostenible
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-green-800 hover:border-green-700 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">ODS</h3>
                <p className="text-gray-400">
                  Contribuimos a los Objetivos de Desarrollo Sostenible mediante soluciones tecnológicas que promueven la transparencia, reducen la desigualdad y fomentan alianzas estratégicas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-800 hover:border-blue-700 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Blockchain</h3>
                <p className="text-gray-400">
                  Nuestra tecnología blockchain garantiza trazabilidad, seguridad y transparencia en cada transacción, permitiendo a las mypes participar en ecosistemas digitales confiables.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800 hover:border-purple-700 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Inteligencia Artificial</h3>
                <p className="text-gray-400">
                  Potenciamos a los emprendimientos pequeños negocios con herramientas de IA que optimizan procesos, personalizan experiencias y generan insights valiosos para la toma de decisiones estratégicas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Presentation Cards Section */}
        <section id="terminal" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Terminal#22-64</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluciones tecnológicas para cada etapa de tu negocio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-emerald-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-emerald-600/80 backdrop-blur-sm p-4 text-center border-b border-emerald-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Desarrollo Web</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">Creamos sitios web modernos y responsivos que representan la identidad de tu negocio y conectan con tus clientes.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      <span>Diseño UX/UI personalizado</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      <span>Optimización SEO</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                      <span>Integración con APIs</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-amber-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-amber-600/80 backdrop-blur-sm p-4 text-center border-b border-amber-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Aplicaciones Móviles</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">Desarrollamos aplicaciones nativas y multiplataforma que llevan tu negocio al bolsillo de tus clientes.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                      <span>iOS y Android</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                      <span>Notificaciones push</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                      <span>Integración con pagos</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="relative bg-black rounded-xl overflow-hidden border border-rose-400"
              >
                <div className="absolute inset-0 bg-[url('/rocket-bg.png')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
                <div className="bg-rose-600/80 backdrop-blur-sm p-4 text-center border-b border-rose-400 relative z-10">
                  <h3 className="text-xl font-bold text-white">Blockchain & Web3</h3>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <div className="absolute inset-0 bg-rose-500/20 rounded-lg blur-md -z-10"></div>
                    </div>
                  </div>
                  <p className="text-sm mb-4 font-medium text-white">Implementamos soluciones blockchain que transforman tu modelo de negocio con transparencia y seguridad.</p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                      <span>Smart contracts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                      <span>Tokenización de activos</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                      <span>DApps personalizadas</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
