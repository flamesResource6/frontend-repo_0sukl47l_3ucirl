import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.04),transparent_30%)]" />

      <NavBar />
      <main className="relative">
        <Hero />
        <ProductGrid />
        <Story />
      </main>
      <Footer />
    </div>
  )
}

export default App
