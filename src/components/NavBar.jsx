function NavBar({ lang, setLang }) {
  const copy = {
    en: { brand: 'Servizio', services: 'Services', pricing: 'Pricing', help: 'Help', book: 'Book Now', mt: 'MT' },
    mt: { brand: 'Servizz', services: 'Servizzi', pricing: 'Prezzijiet', help: 'Għajnuna', book: 'Agħżel Issa', mt: 'EN' },
  }
  const t = copy[lang]

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-cream)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-cream)]/75 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <div className="h-6 w-6 rounded-md bg-[var(--accent-teal)]" />
            <span> {t.brand} </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-warmgray)]">
            <a className="hover:text-[var(--text-charcoal)]" href="#services">{t.services}</a>
            <a className="hover:text-[var(--text-charcoal)]" href="#pricing">{t.pricing}</a>
            <a className="hover:text-[var(--text-charcoal)]" href="#help">{t.help}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'en' ? 'mt' : 'en')} className="text-sm text-[var(--text-warmgray)] hover:text-[var(--text-charcoal)] px-2 py-1 rounded-md ring-subtle pressable" aria-label="Toggle language">{t.mt}</button>
            <a href="#book" className="px-3 py-2 rounded-md bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-dark)] text-white text-sm font-semibold pressable elev-2 focus:outline-none focus-ring">{t.book}</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
