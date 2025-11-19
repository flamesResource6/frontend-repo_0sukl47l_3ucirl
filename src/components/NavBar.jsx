import { useState } from 'react'

function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-[#0f0f0f]/80 backdrop-blur border-b border-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="px-2 py-1 bg-white text-black text-xs tracking-widest font-black uppercase border-2 border-black">Wabi•Brut</span>
            <span className="text-sm text-zinc-300">atelier</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#catalog" className="text-zinc-300 hover:text-white">Catalog</a>
            <a href="#story" className="text-zinc-300 hover:text-white">Story</a>
            <a href="#ethos" className="text-zinc-300 hover:text-white">Ethos</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-200 border-2 border-zinc-600 px-3 py-1 hover:bg-zinc-100 hover:text-black transition">Menu</button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              <a href="#catalog" onClick={() => setOpen(false)} className="text-zinc-200 border-2 border-zinc-600 px-3 py-2">Catalog</a>
              <a href="#story" onClick={() => setOpen(false)} className="text-zinc-200 border-2 border-zinc-600 px-3 py-2">Story</a>
              <a href="#ethos" onClick={() => setOpen(false)} className="text-zinc-200 border-2 border-zinc-600 px-3 py-2">Ethos</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
