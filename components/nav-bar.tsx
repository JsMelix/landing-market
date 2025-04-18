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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900/90 backdrop-blur-md border-gray-800">
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="#ibc" className="flex w-full">
                    IBC Protocol
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="#hub" className="flex w-full">
                    Cosmos Hub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="#sdk" className="flex w-full">
                    Cosmos SDK
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition">
                Developers <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900/90 backdrop-blur-md border-gray-800">
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="#docs" className="flex w-full">
                    Documentation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="#tutorials" className="flex w-full">
                    Tutorials
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="#github" className="flex w-full">
                    GitHub
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#resources" className="hover:text-gray-300 transition">
              Resources
            </Link>

            <Link href="#contact" className="hover:text-gray-300 transition">
              Contact
            </Link>

            <Link href="#bridge" className="text-sm flex items-center gap-1 text-gray-300 hover:text-white transition">
              New to Cosmos: Bridge with IBC Eureka <ArrowRight className="h-3 w-3" />
            </Link>
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
            <div className="border-b border-gray-800 pb-2">
              <button className="flex items-center justify-between w-full py-2" onClick={() => {}}>
                Products <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-2 mt-2">
                <Link href="#ibc" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  IBC Protocol
                </Link>
                <Link href="#hub" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Cosmos Hub
                </Link>
                <Link href="#sdk" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Cosmos SDK
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-800 pb-2">
              <button className="flex items-center justify-between w-full py-2" onClick={() => {}}>
                Developers <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-2 mt-2">
                <Link href="#docs" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Documentation
                </Link>
                <Link href="#tutorials" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Tutorials
                </Link>
                <Link href="#github" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  GitHub
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-800 pb-2">
              <Link href="#resources" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
            </div>

            <div className="border-b border-gray-800 pb-2">
              <Link href="#contact" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="#bridge"
                className="flex items-center gap-1 text-orange-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bridge with IBC Eureka <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
