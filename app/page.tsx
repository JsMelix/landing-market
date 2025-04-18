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
              NEW
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
                  icon: <Zap className="w-10 h-10 text-orange-500" />,
                  title: "Fast & Secure",
                  description:
                    "Lightning-fast transactions with industry-leading security protocols to protect your assets.",
                },
                {
                  icon: <Globe className="w-10 h-10 text-purple-500" />,
                  title: "Interoperable",
                  description: "Seamlessly connect and transact across multiple blockchains in the Cosmos ecosystem.",
                },
                {
                  icon: <Shield className="w-10 h-10 text-blue-500" />,
                  title: "Sovereign",
                  description:
                    "Each blockchain maintains its sovereignty while benefiting from interchain connectivity.",
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
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Cosmos Ecosystem</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a thriving ecosystem of interconnected blockchains built for the future of decentralized
                applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex items-center justify-center aspect-square"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center text-2xl font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Button variant="cosmos" size="lg" className="group" asChild>
                <Link href="#explore">
                  Explore Ecosystem{" "}
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
                  FEATURED
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">IBC Eureka Bridge</h2>
                <p className="text-xl text-gray-300 mb-6">
                  The next generation of interchain technology connecting Cosmos to Ethereum and beyond.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Fast and affordable bridging",
                    "Seamless one-click transfers",
                    "Enhanced security protocols",
                    "Support for multiple assets",
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
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
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
                  <div className="absolute inset-10 border-2 border-gray-700/50 rounded-full"></div>
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
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center z-10">
                      <span className="text-2xl font-bold">IBC</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the Cosmos ecosystem today and experience the future of interchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cosmos" size="lg" asChild>
                  <Link href="#transfer">Make a Transfer</Link>
                </Button>
                <Button variant="cosmosOutline" size="lg" asChild>
                  <Link href="#docs">Read the Docs</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
