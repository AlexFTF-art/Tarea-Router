import { Outlet, NavLink } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dash-container">
      <h1 className="dash-title">Dashboard</h1>

      <nav className="dash-nav">
        <NavLink to='' end> Home </NavLink>

        <NavLink to='profile'>  Profile </NavLink>

        <NavLink to='settings'> Settings </NavLink>

        <NavLink to='users'> Users </NavLink>
        
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard;