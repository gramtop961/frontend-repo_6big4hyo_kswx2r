import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navItem = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`

  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">MagicFix Pro</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navItem}>Home</NavLink>
          <NavLink to="/dashboard" className={navItem}>Dashboard</NavLink>
          <NavLink to="/admin" className={navItem}>Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}
