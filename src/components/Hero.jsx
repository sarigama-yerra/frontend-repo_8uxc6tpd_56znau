import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Gradient flare */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(178,34,34,0.25),transparent_60%)] pointer-events-none" />

      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-24 lg:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            Futuristic deals for gamers & creators
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Premium subscriptions at brick-red prices
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-xl">
            Grab ChatGPT, YouTube Premium, Spotify and the hottest Fortnite items for a fraction of the usual cost. Fast delivery, trusted sellers, instant keys.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#deals" className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium bg-[#b22222] text-white hover:brightness-110 shadow-[0_20px_60px_-20px_rgba(178,34,34,0.7)] transition">
              Browse hot deals
            </a>
            <a href="#how" className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
