import ListExcusa from "./ListExcusa";
import { useState,useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
const History = () => {
  const { authUser,idControl } = useAuth();
  const { codigo } = authUser;
  const [List,setList] = useState([]);

  useEffect(()=>{
    const listExcuse = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const url = `${import.meta.env.VITE_APP_RUTA}/excusa/${codigo}`;
        const result = await axios.get(url, config);
        setList(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    listExcuse();
  },[idControl]);
  return (
    <>
      <div className="row ">
        <div className="col-12 ">
          <h5 className="text-color mt-2 mb-3">Listado de excusas enviadas</h5>
        </div>
      </div>
      <table className="table ">
        <thead>
          <tr className="text-color">
            <th scope="col">Codigo</th>
            <th scope="col">Asignatura</th>
            <th scope="col">Grupo/Docente</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha de peticion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {List.map( excuse =>(
          <ListExcusa excuse={excuse} key={excuse.idexcusa} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default History;
