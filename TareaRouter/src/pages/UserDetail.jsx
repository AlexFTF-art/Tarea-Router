import { useParams, useNavigate } from "react-router-dom";

const UserDetail = () => {
  const {id} = useParams();
  const {navigate} = useNavigate();

  return (
    <div>
      <h3>Detalles de Usuario</h3>
      <p>Id del Usuario: {id} </p>

      <button onClick={() => navigate('/dashboard/users')}>Volver</button>

    </div>
  )

}

export default UserDetail;