function TrustBar({ lang }) {
  const copy = {
    en: { fast: 'Avg. response < 3 min', secure: 'Secure payments', rating: '4.9/5 from 2k+ bookings' },
    mt: { fast: 'Risposta medja < 3 min', secure: 'Pagamenti siguri', rating: '4.9/5 minn 2k+ bookings' },
  }
  const t = copy[lang]

  return (
    <section aria-label="trust" className="border-y border-[var(--border-subtle)] bg-[var(--surface-offwhite)]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid sm:grid-cols-3 gap-3 text-sm text-secondary">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--success-sage)]" />{t.fast}</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--accent-teal)]" />{t.secure}</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--warning-amber)]" />{t.rating}</div>
      </div>
    </section>
  )
}

export default TrustBar
