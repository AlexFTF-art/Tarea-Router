import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}> 
        Home 
      </NavLink> {'|'}

      <NavLink to="/login" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal'})}>
        Login
      </NavLink>
      {' | '}

      <NavLink to="/dashboard" style={({ isActive }) => ({fontWeight: isActive ? 'bold' : 'normal'})}>
        Dashboard
      </NavLink>

    </nav>
  )
}

export default Navbar