import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <NavLink to='' end style={({ isActive }) => ({fontWeight: isActive ? 'bold' : 'normal'})}>
          Home
        </NavLink>

        <NavLink to='profile' end style={({ isActive }) => ({fontWeight: isActive ? 'bold' : 'normal'})}> 
          Profile
        </NavLink>

        <NavLink to='settings' end style={({ isActive }) => ({fontWeight: isActive ? 'bold' : 'normal'})}>
          Settings
        </NavLink>

        <NavLink to='users' style={({ isActive }) => ({fontWeight: isActive ? 'bold' : 'normal'})}>
          Users
        </NavLink>
        
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard;