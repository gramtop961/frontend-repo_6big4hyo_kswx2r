import { useEffect, useState } from 'react'

export default function CategoryGrid() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/categories`)
        const data = await res.json()
        setCategories(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-gray-500">Loading categories...</div>
  if (error) return <div className="text-red-600">Failed to load: {error}</div>

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map(cat => (
        <button key={cat.id} className="p-4 bg-white rounded-lg border hover:shadow transition text-left">
          <div className="text-sm text-gray-500">{cat.key}</div>
          <div className="text-lg font-semibold">{cat.name}</div>
        </button>
      ))}
    </div>
  )
}
