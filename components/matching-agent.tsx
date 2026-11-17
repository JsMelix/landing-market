"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, User, Bot, Briefcase, Users, Rocket, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Role = "talento" | "emprendimiento" | "proyecto" | null

interface Message {
  id: number
  from: "user" | "agent"
  text: string
  matches?: Match[]
}

interface Match {
  name: string
  type: "talento" | "emprendimiento" | "proyecto"
  tags: string[]
  score: number
  description: string
}

// --- Simulated knowledge base ---
const TALENTOS = [
  { name: "Ana Ruiz", tags: ["diseño UX", "branding", "web3", "figma"], description: "Diseñadora 40+ con 15 años en branding digital y experiencia en proyectos Web3." },
  { name: "Carlos Medina", tags: ["desarrollo", "React", "blockchain", "smart contracts"], description: "Desarrollador full-stack especializado en dApps y contratos inteligentes en Ethereum." },
  { name: "María Flores", tags: ["marketing digital", "community manager", "redes sociales", "contenido"], description: "Community manager con enfoque en emprendimientos sostenibles y audiencias latinas." },
  { name: "Jorge Quispe", tags: ["finanzas", "tokenomics", "DeFi", "análisis"], description: "Analista financiero con experiencia en modelos tokenómicos para startups Web3." },
  { name: "Lucía Paredes", tags: ["inteligencia artificial", "data science", "Python", "automatización"], description: "Data scientist enfocada en IA aplicada a pequeños negocios y microempresas." },
]

const EMPRENDIMIENTOS = [
  { name: "EcoChain Perú", tags: ["sostenibilidad", "blockchain", "reciclaje", "impacto social"], description: "Plataforma blockchain que recompensa el reciclaje con tokens canjeables en comercios locales." },
  { name: "AgriTokens", tags: ["agricultura", "tokenización", "finanzas", "mype"], description: "Conecta agricultores con inversores mediante tokenización de cosechas en blockchain." },
  { name: "TuTienda Web3", tags: ["ecommerce", "web3", "pago crypto", "mype"], description: "Solución de tienda online para Mypes con integración de pagos cripto y fidelización NFT." },
  { name: "SaludDAO", tags: ["salud", "DAO", "comunidad", "impacto social"], description: "DAO comunitaria para financiar servicios de salud preventiva en zonas rurales." },
]

const PROYECTOS = [
  { name: "Marketplace Creadores Latam", tags: ["marketplace", "NFT", "arte", "creadores"], description: "Plataforma de venta de arte digital y NFTs para creadores latinoamericanos emergentes." },
  { name: "Red Talento 40+", tags: ["talento senior", "inclusión", "mentoring", "comunidad"], description: "Red de profesionales mayores de 40 años que ofrecen mentoring a emprendedores digitales." },
  { name: "CryptoRemesas", tags: ["remesas", "finanzas", "blockchain", "inclusión financiera"], description: "Sistema de remesas con tarifas mínimas usando stablecoins para familias latinoamericanas." },
  { name: "GreenNFT", tags: ["sostenibilidad", "NFT", "carbono", "impacto"], description: "Proyecto de tokenización de créditos de carbono para empresas que quieren compensar su huella." },
]

function cosineSimilarity(tagsA: string[], tagsB: string[]): number {
  const allTags = Array.from(new Set([...tagsA, ...tagsB]))
  const vecA = allTags.map(t => tagsA.includes(t) ? 1 : 0)
  const vecB = allTags.map(t => tagsB.includes(t) ? 1 : 0)
  const dot = vecA.reduce((acc, v, i) => acc + v * vecB[i], 0)
  const magA = Math.sqrt(vecA.reduce((acc, v) => acc + v * v, 0))
  const magB = Math.sqrt(vecB.reduce((acc, v) => acc + v * v, 0))
  return magA && magB ? dot / (magA * magB) : 0
}

function extractTags(text: string): string[] {
  const keywords = [
    "diseño", "ux", "branding", "web3", "figma", "desarrollo", "react", "blockchain",
    "smart contracts", "marketing", "community", "redes sociales", "contenido", "finanzas",
    "tokenomics", "defi", "análisis", "inteligencia artificial", "ia", "data", "python",
    "automatización", "sostenibilidad", "reciclaje", "impacto social", "agricultura",
    "tokenización", "mype", "ecommerce", "pago crypto", "salud", "dao", "comunidad",
    "marketplace", "nft", "arte", "creadores", "talento", "mentoring", "remesas",
    "inclusión financiera", "carbono", "emprendimiento", "proyecto", "senior", "40+",
    "startup", "pequeño negocio", "tecnología", "innovación",
  ]
  const lower = text.toLowerCase()
  return keywords.filter(k => lower.includes(k))
}

function findMatches(userTags: string[], role: Role): Match[] {
  const pools: { name: string; tags: string[]; description: string; type: Match["type"] }[] = []

  if (role === "talento") {
    // Talento busca emprendimientos y proyectos
    pools.push(...EMPRENDIMIENTOS.map(e => ({ ...e, type: "emprendimiento" as const })))
    pools.push(...PROYECTOS.map(p => ({ ...p, type: "proyecto" as const })))
  } else if (role === "emprendimiento") {
    // Emprendimiento busca talento y proyectos
    pools.push(...TALENTOS.map(t => ({ ...t, type: "talento" as const })))
    pools.push(...PROYECTOS.map(p => ({ ...p, type: "proyecto" as const })))
  } else {
    // Proyecto busca talento y emprendimientos
    pools.push(...TALENTOS.map(t => ({ ...t, type: "talento" as const })))
    pools.push(...EMPRENDIMIENTOS.map(e => ({ ...e, type: "emprendimiento" as const })))
  }

  return pools
    .map(item => ({
      name: item.name,
      type: item.type,
      tags: item.tags,
      score: cosineSimilarity(userTags, item.tags),
      description: item.description,
    }))
    .filter(m => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

// Simple rule-based agent responses
function agentReply(
  messages: Message[],
  userInput: string,
  role: Role,
  setRole: (r: Role) => void
): { text: string; matches?: Match[] } {
  const lower = userInput.toLowerCase()
  const msgCount = messages.filter(m => m.from === "user").length

  // First message: ask for role if not set
  if (!role) {
    if (lower.includes("talento") || lower.includes("profesional") || lower.includes("trabajo") || lower.includes("habilidad")) {
      setRole("talento")
      return { text: "¡Perfecto! Veo que eres talento. Cuéntame un poco más: ¿en qué áreas te especializas? Por ejemplo: diseño, desarrollo, marketing, finanzas, IA..." }
    }
    if (lower.includes("emprendimiento") || lower.includes("negocio") || lower.includes("empresa") || lower.includes("mype")) {
      setRole("emprendimiento")
      return { text: "¡Genial! Cuéntame sobre tu emprendimiento. ¿En qué sector operas? ¿Qué tecnologías usas o te interesan? Por ejemplo: sostenibilidad, blockchain, ecommerce..." }
    }
    if (lower.includes("proyecto") || lower.includes("idea") || lower.includes("startup")) {
      setRole("proyecto")
      return { text: "¡Interesante! Cuéntame sobre tu proyecto. ¿Cuál es el enfoque principal? ¿Qué tipo de colaboradores necesitas? Por ejemplo: NFT, remesas, salud, impacto social..." }
    }
    return { text: "Para conectarte con las mejores oportunidades, dime: ¿eres **talento** (profesional/freelancer), tienes un **emprendimiento** o tienes un **proyecto** en mente?" }
  }

  // If role is set and we have enough info, run matching
  const userTags = messages
    .filter(m => m.from === "user")
    .flatMap(m => extractTags(m.text))
  const currentTags = [...userTags, ...extractTags(userInput)]

  if (currentTags.length >= 2 || msgCount >= 2) {
    const matches = findMatches(currentTags, role)
    if (matches.length > 0) {
      const roleLabel = role === "talento" ? "oportunidades" : role === "emprendimiento" ? "colaboradores y proyectos" : "talentos y emprendimientos"
      return {
        text: `Basándome en tu perfil, encontré estos ${roleLabel} que hacen match contigo en Market3w:`,
        matches,
      }
    }
    return { text: "Interesante perfil. ¿Puedes contarme más sobre tus habilidades o el sector en que te mueves? Eso me ayuda a encontrar mejores conexiones." }
  }

  // Keep asking for more info
  const followUps: Record<NonNullable<Role>, string[]> = {
    talento: [
      "¿Cuántos años de experiencia tienes y en qué tecnologías o áreas trabajas principalmente?",
      "¿Buscas proyectos de impacto social, blockchain, marketing digital o algún otro enfoque?",
    ],
    emprendimiento: [
      "¿Qué tipo de talento necesitas ahora mismo? ¿Desarrollo, diseño, marketing, finanzas?",
      "¿Tu emprendimiento tiene componente blockchain, IA o es más de e-commerce tradicional?",
    ],
    proyecto: [
      "¿Tu proyecto está en fase de idea, MVP o ya tiene tracción?",
      "¿Qué recursos necesitas para avanzar? ¿Equipo técnico, inversión, comunidad?",
    ],
  }
  const idx = Math.min(msgCount - 1, followUps[role].length - 1)
  return { text: followUps[role][Math.max(0, idx)] }
}

const QUICK_STARTS = [
  { label: "Soy Talento", icon: <User className="w-4 h-4" />, text: "Soy talento, tengo habilidades en desarrollo y blockchain" },
  { label: "Tengo un Emprendimiento", icon: <Briefcase className="w-4 h-4" />, text: "Tengo un emprendimiento de sostenibilidad y busco talento" },
  { label: "Tengo un Proyecto", icon: <Rocket className="w-4 h-4" />, text: "Tengo un proyecto de impacto social y necesito equipo" },
]

const typeColors: Record<Match["type"], string> = {
  talento: "text-teal-400 bg-teal-900/30 border-teal-700",
  emprendimiento: "text-orange-400 bg-orange-900/30 border-orange-700",
  proyecto: "text-indigo-400 bg-indigo-900/30 border-indigo-700",
}

const typeIcons: Record<Match["type"], React.ReactNode> = {
  talento: <Users className="w-3.5 h-3.5" />,
  emprendimiento: <Briefcase className="w-3.5 h-3.5" />,
  proyecto: <Rocket className="w-3.5 h-3.5" />,
}

export function MatchingAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "agent",
      text: "¡Hola! Soy el agente de matching de Market3w 🚀 Estoy aquí para conectarte con talento, emprendimientos y proyectos que se alineen con tu perfil. ¿Cómo puedo ayudarte hoy?",
    },
  ])
  const [input, setInput] = useState("")
  const [role, setRole] = useState<Role>(null)
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(1)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const send = (text: string) => {
    if (!text.trim()) return

    const userMsg: Message = { id: idRef.current++, from: "user", text }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      let currentRole = role
      const tempSetRole = (r: Role) => { currentRole = r; setRole(r) }
      const reply = agentReply([...messages, userMsg], text, currentRole, tempSetRole)
      setIsTyping(false)
      setMessages(prev => [...prev, { id: idRef.current++, from: "agent", ...reply }])
    }, 900 + Math.random() * 400)
  }

  return (
    <div className="flex flex-col h-[560px] bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-800 bg-gray-900/80">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-sm text-white">Agente de Matching Market3w</p>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" /> En línea
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
        {messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "agent" && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className={`max-w-[80%] space-y-2`}>
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-tr-sm"
                    : "bg-gray-800 text-gray-100 rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
              {/* Match cards */}
              {msg.matches && msg.matches.length > 0 && (
                <div className="space-y-2 mt-1">
                  {msg.matches.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.12 }}
                      className={`rounded-xl border px-4 py-3 text-xs ${typeColors[m.type]}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5 font-semibold">
                          {typeIcons[m.type]}
                          <span>{m.name}</span>
                        </div>
                        <span className="text-[10px] opacity-70 font-mono">
                          {Math.round(m.score * 100)}% match
                        </span>
                      </div>
                      <p className="text-gray-300 mb-2 leading-snug">{m.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {m.tags.map(tag => (
                          <span key={tag} className="px-1.5 py-0.5 bg-white/10 rounded-full text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            {msg.from === "user" && (
              <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4 text-gray-300" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-2 justify-start"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Quick starts (shown only on first message) */}
      {messages.length === 1 && (
        <div className="px-4 pb-2 flex gap-2 flex-wrap">
          {QUICK_STARTS.map(qs => (
            <button
              key={qs.label}
              onClick={() => send(qs.text)}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-700 bg-gray-800/60 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-colors"
            >
              {qs.icon}
              {qs.label}
              <ChevronRight className="w-3 h-3 opacity-50" />
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 border-t border-gray-800 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && send(input)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 bg-gray-800/80 text-white text-sm rounded-xl px-4 py-2.5 outline-none border border-gray-700 focus:border-blue-500 transition-colors placeholder:text-gray-500"
        />
        <button
          onClick={() => send(input)}
          disabled={!input.trim() || isTyping}
          className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  )
}
