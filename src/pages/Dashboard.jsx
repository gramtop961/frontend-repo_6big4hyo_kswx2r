import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [me, setMe] = useState(null)
  const [jobs, setJobs] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const login = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    if (res.ok) {
      const data = await res.json()
      setToken(data.token)
      localStorage.setItem('token', data.token)
    }
  }

  useEffect(() => {
    const load = async () => {
      if (!token) return
      const meRes = await fetch(`${baseUrl}/me`, { headers: { Authorization: `Bearer ${token}` } })
      if (meRes.ok) setMe(await meRes.json())
      const jobsRes = await fetch(`${baseUrl}/jobs/my`, { headers: { Authorization: `Bearer ${token}` } })
      if (jobsRes.ok) setJobs(await jobsRes.json())
    }
    load()
  }, [token])

  if (!token) {
    return (
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={login} className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full border rounded px-3 py-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full bg-blue-600 text-white rounded px-4 py-2">Sign in</button>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome {me?.name}</h1>
      <p className="text-gray-600 mb-6">Role: {me?.role}</p>
      <h2 className="text-xl font-semibold mb-2">My Jobs</h2>
      <div className="grid gap-3">
        {jobs.map(j => (
          <div key={j.id} className="border rounded p-4">
            <div className="text-sm text-gray-500">{j.category_key} • {j.status}</div>
            <div className="font-medium">{j.description}</div>
          </div>
        ))}
        {jobs.length === 0 && <div className="text-gray-500">No jobs yet.</div>}
      </div>
    </div>
  )
}
