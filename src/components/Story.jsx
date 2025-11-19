function Story() {
  return (
    <section id="story" className="py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">A quiet rebellion</h3>
            <p className="text-zinc-300 leading-relaxed">
              We work with honest materials: canvas, leather, porcelain, silk. We keep the lines blunt and the finish human. The result is a conversation between serenity and severity—warm textures against hard silhouettes.
            </p>
          </div>
          <div className="bg-[#ECE7E1] text-black p-6 border-4 border-black font-mono">
            <p className="uppercase tracking-widest text-xs mb-2">Notes</p>
            <ul className="space-y-2 text-sm">
              <li>— Patina welcomed</li>
              <li>— Seams visible</li>
              <li>— Variance embraced</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
