import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <motion.div
            className="w-8 h-8 rounded-md bg-gradient-to-br from-[#b22222] to-[#7a1414] shadow-[0_0_40px_rgba(178,34,34,0.45)]"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-xl font-semibold tracking-tight text-[#b22222]">CheapKeys</span>
        </motion.div>
        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href="#services" className="text-sm text-zinc-300 hover:text-white transition">Services</a>
          <a href="#pricing" className="text-sm text-zinc-300 hover:text-white transition">Pricing</a>
          <a href="#faqs" className="text-sm text-zinc-300 hover:text-white transition">FAQs</a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition">Contact</a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#deals"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-[#b22222] text-white hover:brightness-110 shadow-[0_10px_30px_-10px_rgba(178,34,34,0.6)] transition"
          >
            Get deals
          </motion.a>
        </motion.nav>
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-zinc-200"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </motion.button>
      </div>
    </motion.header>
  )
}
