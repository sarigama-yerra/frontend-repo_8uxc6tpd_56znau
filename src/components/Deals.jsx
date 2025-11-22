import { Shield, Zap, Clock } from 'lucide-react'

const deals = [
  { name: 'ChatGPT Plus (30 days)', price: '$6.99', badge: 'Best Seller' },
  { name: 'YouTube Premium (Family Share)', price: '$3.49', badge: 'Hot' },
  { name: 'Spotify Premium (1 month)', price: '$2.99', badge: 'Trending' },
  { name: 'Fortnite V-Bucks (5,000)', price: '$17.99', badge: 'Limited' },
  { name: 'Fortnite Crew (1 month)', price: '$7.49', badge: 'Bundle' },
  { name: 'Fortnite Starter Pack', price: '$3.99', badge: 'New' },
]

export default function Deals() {
  return (
    <section id="deals" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_0%,rgba(178,34,34,0.2),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Today’s hot deals</h2>
            <p className="mt-2 text-zinc-400">Instant delivery. Region-free whenever possible.</p>
          </div>
          <div className="flex items-center gap-3 text-zinc-300">
            <div className="inline-flex items-center gap-2 text-xs">
              <Shield size={16} className="text-[#b22222]" /> Buyer protection
            </div>
            <div className="inline-flex items-center gap-2 text-xs">
              <Zap size={16} className="text-[#b22222]" /> Instant keys
            </div>
            <div className="inline-flex items-center gap-2 text-xs">
              <Clock size={16} className="text-[#b22222]" /> 24/7 support
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {deals.map((d) => (
            <div key={d.name} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-[#b22222]/40 transition">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#b22222]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center rounded-full bg-[#b22222]/10 text-[#f3d1d1] border border-[#b22222]/30 px-2.5 py-1 text-[10px] uppercase tracking-wider">{d.badge}</div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{d.name}</h3>
                  </div>
                  <div className="text-2xl font-bold text-white">{d.price}</div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-[#b22222] text-white hover:brightness-110 shadow-[0_20px_60px_-20px_rgba(178,34,34,0.7)] transition">Buy now</button>
                  <button className="text-sm text-zinc-300 hover:text-white">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
