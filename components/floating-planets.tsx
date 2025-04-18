"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FloatingPlanets() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* dYdX Planet */}
      <motion.div
        initial={{ x: "80vw", y: "20vh" }}
        animate={{
          x: ["80vw", "75vw", "85vw", "80vw"],
          y: ["20vh", "25vh", "15vh", "20vh"],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-24 h-24 rounded-full bg-purple-900/80 backdrop-blur-sm flex items-center justify-center"
      >
        <span className="text-2xl font-bold">dYdX</span>
      </motion.div>

      {/* M Planet */}
      <motion.div
        initial={{ x: "70vw", y: "40vh" }}
        animate={{
          x: ["70vw", "65vw", "75vw", "70vw"],
          y: ["40vh", "45vh", "35vh", "40vh"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-16 h-16 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center"
      >
        <span className="text-orange-500 text-2xl">M</span>
      </motion.div>

      {/* Babylon Planet */}
      <motion.div
        initial={{ x: "20vw", y: "70vh" }}
        animate={{
          x: ["20vw", "25vw", "15vw", "20vw"],
          y: ["70vh", "75vh", "65vh", "70vh"],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-28 h-28 flex items-center justify-center"
      >
        <img 
          src="/cps.jpg" 
          alt="CPS" 
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      {/* Ethereum Planet */}
      <motion.div
        initial={{ x: "60vw", y: "60vh" }}
        animate={{
          x: ["60vw", "65vw", "55vw", "60vw"],
          y: ["60vh", "55vh", "65vh", "60vh"],
        }}
        transition={{
          duration: 28,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-20 h-20 rounded-full bg-blue-900/80 backdrop-blur-sm flex items-center justify-center"
      >
        <span className="text-blue-500 text-2xl">Ξ</span>
      </motion.div>
    </div>
  )
}
