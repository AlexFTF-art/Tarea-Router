import { Link, Outlet } from "react-router-dom";

const users = [
  {id: 1, name: 'alex'},
  {id: 2, name: 'dan'},
  {id: 3, name: 'uriel'}
]

const Users = () => {
  return (
    <div>

      <h2>Usuarios</h2>

      <ul>
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