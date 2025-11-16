import { useEffect, useState } from 'react'

export default function Admin() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [engineers, setEngineers] = useState([])

  useEffect(() => {
    const load = async () => {
      if (!token) return
      const res = await fetch(`${baseUrl}/categories`)
      await res.json()
      // Simple list of engineers profiles
      const e = await fetch(`${baseUrl}/test`)
      await e.json()
    }
    load()
  }, [token])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <p className="text-gray-600">Basic admin placeholder. In a full build this shows approvals, disputes, analytics and call logs.</p>
    </div>
  )
}
