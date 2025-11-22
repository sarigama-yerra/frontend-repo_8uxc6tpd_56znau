import { Sparkles, Youtube, Music, Gamepad2 } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'ChatGPT Plus monthly',
    desc: 'Affordable access to advanced AI with priority speeds.',
    tag: 'Digital Service'
  },
  {
    icon: Youtube,
    title: 'YouTube Premium',
    desc: 'Ad-free videos, background play, and YouTube Music.',
    tag: 'Subscription'
  },
  {
    icon: Music,
    title: 'Spotify Premium',
    desc: 'Unlimited skips, downloads, and high-quality audio.',
    tag: 'Subscription'
  },
  {
    icon: Gamepad2,
    title: 'Fortnite V-Bucks & Packs',
    desc: 'V-Bucks, Crew, and Starter Packs delivered instantly.',
    tag: 'Gaming'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(178,34,34,0.18),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we offer</h2>
          <p className="mt-2 text-zinc-400">Everything you need, priced to win.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-[#b22222]/40 transition">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#b22222]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white mb-4">
                  <Icon size={22} />
                </div>
                <div className="text-xs uppercase tracking-wide text-zinc-400">{tag}</div>
                <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-zinc-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
