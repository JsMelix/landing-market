import Link from "next/link"
import { ArrowUpRight, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Marketw</h3>
            <p className="text-gray-400 mb-6">The Internet of Blockchains</p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/cosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/cosmos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#ibc" className="text-gray-400 hover:text-white transition flex items-center">
                  IBC Protocol <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#hub" className="text-gray-400 hover:text-white transition flex items-center">
                  Market3w Hub <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#sdk" className="text-gray-400 hover:text-white transition flex items-center">
                  Market3w SDK <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#tendermint" className="text-gray-400 hover:text-white transition flex items-center">
                  Tendermint <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#docs" className="text-gray-400 hover:text-white transition flex items-center">
                  Documentation <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#tutorials" className="text-gray-400 hover:text-white transition flex items-center">
                  Tutorials <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#github" className="text-gray-400 hover:text-white transition flex items-center">
                  GitHub <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-white transition flex items-center">
                  Community <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-white transition flex items-center">
                  Blog <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition flex items-center">
                  Events <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" className="text-gray-400 hover:text-white transition flex items-center">
                  Ecosystem <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition flex items-center">
                  Contact <ArrowUpRight className="ml-1 h-3 w-3" />
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
