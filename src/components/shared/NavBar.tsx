import { NavLink } from 'react-router'
import { navLinks } from '../../consts/links'

export const NavBar = () => {
  return (
    <nav className='h-96 bg-amber-200'>
      <h1>LOGO</h1>
      <div>
        {navLinks.map(link => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) => (
              isActive ? "text-cyan-600 underline" :
                "text-gray-700 px-3 py-2 rounded-md text-sm font-medium" +
                "hover:underline hover:text-cyan-500 transition-all duration-300"
            )}
          ></NavLink>
        ))}
      </div>
    </nav>
  )
}
