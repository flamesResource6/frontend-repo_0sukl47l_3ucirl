import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ item }) {
  return (
    <div className="group bg-[#111] border-4 border-black text-white relative">
      <div className="aspect-square overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4 border-t-4 border-black">
        <div className="flex items-center justify-between">
          <h3 className="font-black tracking-tight">{item.name}</h3>
          <span className="text-sm text-zinc-300">{item.currency} {item.price}</span>
        </div>
        <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
        {item.badge && (
          <span className="absolute top-3 left-3 bg-[#ECE7E1] text-black text-xs font-black px-2 py-1 border-2 border-black uppercase tracking-widest">{item.badge}</span>
        )}
      </div>
      <button className="w-full bg-white text-black font-bold border-t-4 border-black px-4 py-2 hover:bg-[#ECE7E1] active:translate-y-[2px]">Add to bag</button>
    </div>
  )
}

function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/products`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-zinc-400">Loading selection…</p>
        </div>
      </section>
    )
  }

  return (
    <section id="catalog" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white">The Edit</h2>
          <a href="#" className="text-zinc-200 underline decoration-4 decoration-white underline-offset-4">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
