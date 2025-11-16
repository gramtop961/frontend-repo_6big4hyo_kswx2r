import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section id="categories" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Popular categories</h2>
        <CategoryGrid />
      </section>

      <footer className="border-t py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} MagicFix Pro. All rights reserved.
      </footer>
    </div>
  )
}

export default App
