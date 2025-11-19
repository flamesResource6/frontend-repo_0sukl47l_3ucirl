function Footer() {
  return (
    <footer id="ethos" className="mt-24 border-t-8 border-black bg-[#ECE7E1] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-black text-xl mb-2">Wabi•Brut</h4>
            <p className="text-sm">A study in embrace and assertion. Built slowly, worn hard.</p>
          </div>
          <div>
            <p className="uppercase tracking-wider text-xs font-bold mb-2">Info</p>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="underline decoration-4 decoration-black underline-offset-4">Shipping & Returns</a></li>
              <li><a href="#" className="underline decoration-4 decoration-black underline-offset-4">Care</a></li>
              <li><a href="#" className="underline decoration-4 decoration-black underline-offset-4">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-wider text-xs font-bold mb-2">Newsletter</p>
            <form className="flex gap-2">
              <input className="flex-1 border-4 border-black px-3 py-2 bg-white placeholder-black/60" placeholder="email" />
              <button className="bg-black text-white px-4 border-4 border-black font-bold">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs uppercase tracking-widest border-t border-black pt-4">© {new Date().getFullYear()} Wabi•Brut Atelier</div>
      </div>
    </footer>
  )
}

export default Footer
