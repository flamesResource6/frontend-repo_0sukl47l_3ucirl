function ServiceCard({ title, desc, status }) {
  const badge = {
    success: { text: 'Available', color: 'bg-[var(--success-sage)]/15 text-[var(--success-sage)]' },
    warn: { text: 'High demand', color: 'bg-[var(--warning-amber)]/15 text-[var(--warning-amber)]' },
  }[status || 'success']

  return (
    <div className="rounded-2xl bg-surface ring-subtle p-5 pressable elev-1 hover:elev-2 transition-shadow">
      <div className={`inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-md ${badge.color}`}>{badge.text}</div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-secondary">{desc}</p>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 rounded-md bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-dark)] text-white text-sm font-medium pressable">Book via Chat</button>
        <a href="tel:+35600000000" className="px-3 py-2 rounded-md ring-subtle bg-white text-sm font-medium pressable" style={{color:'var(--text-charcoal)'}}>Call</a>
      </div>
    </div>
  )
}

function ServiceCards({ lang }) {
  const copy = {
    en: {
      title: 'Popular services',
      items: [
        { t: 'Emergency Fix', d: 'Rapid dispatch for urgent issues — anytime.', s: 'success' },
        { t: 'Scheduled Visit', d: 'Pick a time that suits you best.', s: 'success' },
        { t: 'Consultation', d: 'Get advice before you commit to a booking.', s: 'warn' },
      ],
    },
    mt: {
      title: 'Servizzi popolari',
      items: [
        { t: 'Tiswija ta\' Emerġenza', d: 'Ħruġ rapidu għal każijiet urġenti — f\'kull ħin.', s: 'success' },
        { t: 'Żjara Skedata', d: 'Agħżel il-ħin li jaqbel l-aktar miegħek.', s: 'success' },
        { t: 'Konsultazzjoni', d: 'Parir qabel ma tibbukkja.', s: 'warn' },
      ],
    },
  }
  const t = copy[lang]

  return (
    <section id="services" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">{t.title}</h2>
          <a href="#book" className="text-sm accent">See all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((it, i) => (
            <ServiceCard key={i} title={it.t} desc={it.d} status={it.s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
