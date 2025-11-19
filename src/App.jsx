import { useState } from 'react'
import NavBar from './components/NavBar'
import BookingHero from './components/BookingHero'
import ServiceCards from './components/ServiceCards'
import TrustBar from './components/TrustBar'
import Footer from './components/Footer'
import ContactWidget from './components/ContactWidget'

function App() {
  const [lang, setLang] = useState('en') // 'en' | 'mt'

  return (
    <div className="min-h-screen bg-[var(--bg-cream)] text-[var(--text-charcoal)] selection:bg-[var(--accent-teal)]/20 selection:text-[var(--text-charcoal)]">
      <NavBar lang={lang} setLang={setLang} />
      <main>
        <BookingHero lang={lang} />
        <TrustBar lang={lang} />
        <ServiceCards lang={lang} />
      </main>
      <Footer lang={lang} />
      <ContactWidget lang={lang} />
    </div>
  )
}

export default App
