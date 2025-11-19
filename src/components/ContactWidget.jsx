import { useState } from 'react'

function ContactWidget({ lang }) {
  const [open, setOpen] = useState(false)
  const copy = {
    en: { chat: 'Chat', phone: 'Call', prompt: 'Need help? Book now via chat or phone.' },
    mt: { chat: 'Chat', phone: 'Ċempel', prompt: 'Għandek bżonn għajnuna? Ibbukkja issa permezz ta’ chat jew telefon.' },
  }
  const t = copy[lang]

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button onClick={() => setOpen(!open)} className="rounded-full bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-dark)] text-white px-4 py-2 shadow-lg pressable elev-3">{t.chat} / {t.phone}</button>
      {open && (
        <div className="mt-3 w-80 rounded-2xl bg-surface ring-subtle elev-3 p-4">
          <p className="text-sm text-secondary mb-3">{t.prompt}</p>
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 rounded-md bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-dark)] text-white text-sm font-medium pressable">Open Chat</button>
            <a href="tel:+35600000000" className="flex-1 px-3 py-2 rounded-md ring-subtle bg-white text-sm font-medium pressable" style={{color:'var(--text-charcoal)'}}>+356 0000 0000</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactWidget
