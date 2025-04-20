import Link from "next/link"
import { ArrowUpRight, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"; // Import motion

// Define animation variants
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1 // Adjust stagger timing as needed
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function Footer() {
  const line = "Conecta Digitaliza crece"; // Your text

  return (
    <footer className="border-t border-gray-800 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Updated grid columns */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Market3w</h3>
            {/* Updated paragraph with motion */}
            <motion.p
              className="text-gray-400 mb-6" // Keep existing text styles
              variants={sentence}
              initial="hidden"
              animate="visible"
              style={{ lineHeight: '1.5' }} // Optional: Adjust line height for spacing
            >
              {line.split(" ").map((word, index) => ( // Split into words
                // Wrap each word in a block element for new line
                <span key={word + "-" + index} style={{ display: 'block', marginBottom: '0.2em' }}> {/* Changed to display: block */}
                  {word.split("").map((char, charIndex) => ( // Split word into letters
                    <motion.span key={char + "-" + charIndex} variants={letter} style={{ display: 'inline-block' }}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products section removed */}

          <div>
            <h4 className="font-bold text-lg mb-4">Desarrolladores</h4> {/* Changed heading to Spanish */}
            <ul className="space-y-2">
              {/* Documentation link removed */}
              {/* Tutorials link removed */}
              {/* GitHub link removed */}
              <li> {/* Kept Emprendimientos item */}
                <Link href="#emprendimientos" className="text-gray-400 hover:text-white transition flex items-center">
                  Emprendimientos <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li> {/* Added Comunidad item */}
                <Link href="#community" className="text-gray-400 hover:text-white transition flex items-center">
                  Comunidad <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Recursos</h4> {/* Changed heading to Spanish */}
            <ul className="space-y-2">
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-white transition flex items-center">
                  Blog <ArrowUpRight className="ml-1 h-3 w-3" /> {/* Kept as Blog */}
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition flex items-center">
                  Eventos <ArrowUpRight className="ml-1 h-3 w-3" /> {/* Changed Events to Eventos */}
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" className="text-gray-400 hover:text-white transition flex items-center">
                  Ecosistema <ArrowUpRight className="ml-1 h-3 w-3" /> {/* Changed Ecosystem to Ecosistema */}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition flex items-center">
                  Contacto <ArrowUpRight className="ml-1 h-3 w-3" /> {/* Changed Contact to Contacto */}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Market3w. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#privacy" className="text-gray-500 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-gray-500 hover:text-white text-sm transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
