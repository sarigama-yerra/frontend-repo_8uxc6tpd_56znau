import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#b22222] to-[#7a1414] shadow-[0_0_40px_rgba(178,34,34,0.45)]" />
          <span className="text-xl font-semibold tracking-tight text-[#b22222]">CheapKeys</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-zinc-300 hover:text-white transition">Services</a>
          <a href="#pricing" className="text-sm text-zinc-300 hover:text-white transition">Pricing</a>
          <a href="#faqs" className="text-sm text-zinc-300 hover:text-white transition">FAQs</a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition">Contact</a>
          <a href="#deals" className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-[#b22222] text-white hover:brightness-110 shadow-[0_10px_30px_-10px_rgba(178,34,34,0.6)] transition">Get deals</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-zinc-200" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
