import { Link, Outlet } from "react-router-dom";
import './User.css'

const users = [
  {id: 1, name: 'alex'},
  {id: 2, name: 'dan'},
  {id: 3, name: 'uriel'}
]

const Users = () => {
  return (
    <div className="user-container">

      <h2 className="user-title">Usuarios</h2>

      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>
            <Link to={`${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  )
}

export default Users;