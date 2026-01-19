import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to='/'> Home </NavLink> {'|'}

      <NavLink to="/login"> Login </NavLink> {' | '}

      <NavLink to="/dashboard"> Dashboard </NavLink>

    </nav>
  )
}

export default Navbar