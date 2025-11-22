import { Sparkles, Youtube, Music, Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'

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

const cardVariants = {
  off: { y: 24, opacity: 0 },
  on: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(178,34,34,0.18),transparent_60%)] pointer-events-none" 
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: 12, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            What we offer
          </motion.h2>
          <motion.p 
            initial={{ y: 12, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-zinc-400"
          >
            Everything you need, priced to win.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="off"
              whileInView="on"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-[#b22222]/40 transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#b22222]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <motion.div 
                  whileHover={{ rotate: 3, scale: 1.03 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white mb-4"
                >
                  <Icon size={22} />
                </motion.div>
                <div className="text-xs uppercase tracking-wide text-zinc-400">{tag}</div>
                <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-zinc-400 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
