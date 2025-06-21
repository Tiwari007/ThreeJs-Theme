import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header flex justify-around pt-5">
      <NavLink to="/" className="w-20 h-10 rounded-lg 
      bg-white flex items-center justify-center font-bold shadow-md">
        <p className="text-blue-500">🐲</p> Home
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Contact</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>
      </nav>
    </header>
  )
}

export default Navbar