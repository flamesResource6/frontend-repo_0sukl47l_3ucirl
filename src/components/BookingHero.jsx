function BookingHero({ lang }) {
  const copy = {
    en: {
      title: '24/7 Service Booking — Calm, Instant, Human',
      subtitle: 'Book via chat or phone. We respond within minutes — day or night.',
      chat: 'Chat Now',
      call: 'Call Now',
      subnote: 'No forms. No friction. Just help.',
    },
    mt: {
      title: 'Booking tas-Servizz 24/7 — Kalm, Immedjat, Uman',
      subtitle: 'Ibbukkja permezz ta\' chat jew telefon. Nirrispondu fi ftit minuti — lejl jew nhar.',
      chat: 'Iċċettja Issa',
      call: 'Ċempel Issa',
      subnote: 'L-ebda formoli. L-ebda frizzjoni. Biss għajnuna.',
    },
  }
  const t = copy[lang]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* soft 3D radial lighting */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--surface-offwhite)] blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-white blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">{t.title}</h1>
            <p className="mt-4 text-[var(--text-warmgray)] text-lg">{t.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#chat" className="px-4 py-2 rounded-lg bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-dark)] text-white font-medium pressable elev-2">{t.chat}</a>
              <a href="tel:+35600000000" className="px-4 py-2 rounded-lg bg-surface ring-subtle hover:shadow-md pressable" style={{color:'var(--text-charcoal)'}}>{t.call}</a>
            </div>
            <p className="mt-3 text-sm text-[var(--text-lightgray)]">{t.subnote}</p>
          </div>

          <div className="relative">
            {/* Tactile 3D Card */}
            <div className="rounded-2xl card-3d elev-3 ring-subtle p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface ring-subtle p-4 pressable">
                  <div className="h-10 w-10 rounded-md bg-[var(--accent-teal)]/15 ring-subtle" />
                  <p className="mt-4 font-medium">Instant Chat</p>
                  <p className="text-sm text-secondary">Live agent in minutes</p>
                </div>
                <div className="rounded-xl bg-surface ring-subtle p-4 pressable">
                  <div className="h-10 w-10 rounded-md bg-[var(--accent-teal)]/15 ring-subtle" />
                  <p className="mt-4 font-medium">Phone Booking</p>
                  <p className="text-sm text-secondary">Direct specialist line</p>
                </div>
                <div className="col-span-2 rounded-xl bg-surface ring-subtle p-4 pressable">
                  <p className="font-medium">24/7 Availability</p>
                  <p className="text-sm text-secondary">Always on, always human</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-[var(--accent-teal)]/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingHero
