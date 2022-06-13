import Layout from "../layout/Layout"
import Tramites from "./Tramites"

const AdminDasboard = () => {
  return (
     <Layout>
      <div className="row ">
      </div>
      <table className="table ">
        <thead>
          <tr className="text-color">
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Asignatura</th>
            <th scope="col">Grupo/Docente</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha de peticion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
            <Tramites/>
        </tbody>
      </table>
    </Layout>
  )
}

export default AdminDasboard