function Footer({ lang }) {
  const copy = {
    en: { brand: 'Servizio', info: 'Info', policy: 'Privacy Policy', terms: 'Terms', contact: 'Contact', cta: 'Join updates', placeholder: 'Your email' },
    mt: { brand: 'Servizz', info: 'Info', policy: 'Politika tal-Privatezza', terms: 'Termini', contact: 'Kuntatt', cta: 'Ingħaqad għall-aġġornamenti', placeholder: 'L-email tiegħek' },
  }
  const t = copy[lang]

  return (
    <footer className="mt-24 border-t border-[var(--border-subtle)] bg-[var(--surface-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg">{t.brand}</h4>
            <p className="text-sm text-secondary mt-2">24/7 service booking. Professional, human, immediate.</p>
          </div>
          <div>
            <p className="uppercase tracking-wider text-xs font-semibold mb-2 text-secondary">{t.info}</p>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">{t.policy}</a></li>
              <li><a href="#" className="hover:underline">{t.terms}</a></li>
              <li><a href="#help" className="hover:underline">{t.contact}</a></li>
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-wider text-xs font-semibold mb-2 text-secondary">Newsletter</p>
            <form className="flex gap-2">
              <input className="flex-1 ring-subtle rounded-md px-3 py-2 bg-white placeholder:text-tertiary text-sm" placeholder={t.placeholder} />
              <button className="px-4 rounded-md bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-dark)] text-white text-sm font-medium pressable">{t.cta}</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-tertiary border-t border-[var(--border-subtle)] pt-4">© {new Date().getFullYear()} {t.brand}</div>
      </div>
    </footer>
  )
}

export default Footer
