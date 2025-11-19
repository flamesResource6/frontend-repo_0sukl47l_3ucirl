function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#ECE7E1] blur-2xl opacity-10"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#A6A6A6] blur-2xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-[0.95]">
              Imperfect forms.
              <span className="block text-[#ECE7E1]">Unapologetic edges.</span>
            </h1>
            <p className="mt-6 text-zinc-300 max-w-prose">
              Accessories and garments built on quiet restraint and stark honesty. Wabi-sabi warmth meets brutalist clarity.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#catalog" className="px-5 py-3 bg-white text-black font-bold border-4 border-black hover:-translate-y-0.5 active:translate-y-0 transition-transform">Shop the Edit</a>
              <a href="#story" className="px-5 py-3 text-white font-bold border-4 border-white hover:bg-white hover:text-black transition">Our Story</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#1A1A1A] border-8 border-black shadow-[16px_16px_0_0_#000]">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop" alt="Editorial" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#ECE7E1] text-black px-4 py-2 border-4 border-black font-bold uppercase tracking-wider">
              Season 01 / Capsule
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
