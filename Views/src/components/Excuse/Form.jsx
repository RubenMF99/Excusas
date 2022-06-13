import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import useAuth from "../../hooks/useAuth";
const Forms = () => {
  const { authUser } = useAuth();
  const { codigo } = authUser;
  const fecha =  Date.now();
  const hoy = new Date(fecha);
  const [excusa, setExcusa] = useState({
    idexcusa: Math.floor(Math.random() * (9999999 - 1000000)) + 1000000,
    user_codigo: codigo,
    asignatura: "",
    grupo_doc: "",
    descripcion: "",
    soporte_ex: "Por ahora nada",
    fechacreacion:hoy.toDateString(),
    fecharespuesta:null,
    fechaexpiracion:null,
    estado: "Pendiente",
  });
  const { idexcusa,user_codigo, asignatura, grupo_doc, descripcion,soporte_ex} = excusa;
  const handleChange = (e) => {
    setExcusa({
      ...excusa,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if([user_codigo,asignatura, grupo_doc, descripcion,soporte_ex].includes('')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son Obligatorios',
      });
      return;
    }
    inserExcuse();
    setExcusa({
      idexcusa: Math.floor(Math.random() * (9999999 - 1000000)) + 1000000,
      user_codigo: codigo,
      asignatura: "",
      grupo_doc: "",
      descripcion: "",
      soporte_ex: "Por ahora nada",
      fechacreacion:hoy.toDateString(),
      fecharespuesta:null,
      fechaexpiracion:null,
      estado: "Pendiente",})
  };

  const inserExcuse = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const url = `${import.meta.env.VITE_APP_RUTA}/excusa`;
      const result = await axios.post(url, excusa, config);
      Swal.fire({
        icon: 'success',
        title: 'Exitoso',
        text: 'La excusa ha sido creada y notificaca',
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h4 className="mt-4 mb-5 text-color fw-bold">
        Completar el formulario para crear una nueva Excusa
      </h4>
      <form className=" mb-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <label className="text-color mb-1">Idexcusa</label>
            <input
              type="text"
              className="form-control secundary-color mb-3"
              name="idexcusa"
              value={idexcusa}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="col-5">
            <label className="text-color mb-1">Código Estudiantil</label>
            <input
              type="number"
              className="form-control secundary-color mb-3"
              value={user_codigo}
              name="user_codigo"
              disabled
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <label className="text-color mb-1 mt-2 ">
              Seleccionar asignatura{" "}
            </label>
            <select
              className="form-select secundary-color"
              as="select"
              name="asignatura"
              value={asignatura}
              onChange={handleChange}
            >
              <option selected>-------- Seleccionar ----------</option>
              <option value="Calculo Diferencial">Calculo Diferencial</option>
              <option value="Algebra Lineal">Algebra Lineal</option>
              <option value="Programación">Programación</option>
              <option value="Arquitectura del Software">
                Arquitectura del Software
              </option>
            </select>
          </div>

          <div className="col-5">
            <label className="text-color mb-1 mt-2">
              Grupo/Docente Asignatura
            </label>
            <select
              className="form-select secundary-color"
              as="select"
              name="grupo_doc"
              value={grupo_doc}
              onChange={handleChange}
            >
              <option selected>-------- Seleccionar ----------</option>
              <option value="G-5 Carlos Segura">G-5 Carlos Segura</option>
              <option value="G-1 Pedro Gutierrez">G-1 Pedro Gutierrez</option>
              <option value="G-3 Juan de la torre">G-3 Juan de la torre</option>
            </select>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-10">
            <label className="text-color mb-1 mt-2">
              Informacion Adicional
            </label>
            <textarea
              type="textarea"
              className="form-control secundary-color"
              rows="3"
              name="descripcion"
              value={descripcion}
              onChange={handleChange}
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-5">
            <label className="text-color mb-1 mt-3">Anexar Documento</label>
            <input
              className="form-control mt-2 "
              type="text"
              disabled
              name="soporte_ex"
              value={soporte_ex}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 mt-5">
            <button
              className="btn primary-color text-white btn-lg btn-block btn-tam"
              type="submit"
            >
              Enviar Excusa
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Forms;
