"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800/50" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image 
              src="/market3-logo.png" 
              alt="Market3" 
              width={120} 
              height={32} 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products dropdown removed */}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition">
                Desarrolladores <ChevronDown className="ml-1 h-4 w-4" /> {/* Changed text */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900/90 backdrop-blur-md border-gray-800">
                {/* Documentation link removed */}
                {/* Tutorials link removed */}
                {/* GitHub link removed */}
                <DropdownMenuItem className="hover:bg-gray-800"> {/* Added Emprendimientos */}
                  <Link href="#emprendimientos" className="flex w-full">
                    Emprendimientos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800"> {/* Added Comunidad */}
                  <Link href="#community" className="flex w-full">
                    Comunidad
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#resources" className="hover:text-gray-300 transition">
              Recursos {/* Changed text */}
            </Link>

            <Link href="#contact" className="hover:text-gray-300 transition">
              Contacto {/* Changed text */}
            </Link>

            {/* Removed "New to Cosmos: Bridge with IBC Eureka" link */}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Products section removed */}

            <div className="border-b border-gray-800 pb-2">
              <button className="flex items-center justify-between w-full py-2" onClick={() => {}}>
                Desarrolladores <ChevronDown className="h-4 w-4" /> {/* Changed text */}
              </button>
              <div className="pl-4 space-y-2 mt-2">
                {/* Documentation link removed */}
                {/* Tutorials link removed */}
                {/* GitHub link removed */}
                <Link href="#emprendimientos" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> {/* Added Emprendimientos */}
                  Emprendimientos
                </Link>
                <Link href="#community" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> {/* Added Comunidad */}
                  Comunidad
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-800 pb-2">
              <Link href="#resources" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Recursos {/* Changed text */}
              </Link>
            </div>

            <div className="border-b border-gray-800 pb-2">
              <Link href="#contact" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contacto {/* Changed text */}
              </Link>
            </div>

            {/* Removed "Bridge with IBC Eureka" link section */}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
