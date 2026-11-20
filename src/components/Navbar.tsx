import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">🐝 Mundo das Abelhas</span>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/comportamento">Comportamento</NavLink>
        <NavLink to="/habitat">Hábitat</NavLink>
        <NavLink to="/curiosidades">Curiosidades</NavLink>
        <NavLink to="/apicultura">Apicultura</NavLink>
        <NavLink to="/especies">Espécies</NavLink>
      </div>
    </nav>
  )
}