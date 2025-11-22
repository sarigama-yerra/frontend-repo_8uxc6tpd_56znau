export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(178,34,34,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#b22222] to-[#7a1414] shadow-[0_0_40px_rgba(178,34,34,0.45)]" />
            <span className="text-lg font-semibold tracking-tight text-[#b22222]">CheapKeys</span>
          </div>
          <div className="text-zinc-400 text-sm text-center md:text-right">
            <p>Secure digital goods at unbeatable prices.</p>
            <p className="mt-1">© {new Date().getFullYear()} CheapKeys. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
