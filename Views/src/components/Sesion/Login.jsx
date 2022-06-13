import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
const Login = () => {
  //State de usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  let navigate = useNavigate();

  const { email, password } = user;
  //state de autenticacion
  const {setAuthUser} = useAuth();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    userExisted()
  };
  const userExisted = async ()=>{
    try{
      const url = import.meta.env.VITE_APP_RUTA;
      const response = await axios.post(`${url}/login`,user,{header:{"Content-Type":"application/json"}});
      localStorage.setItem('token',response.data.token);
      setAuthUser(response.data.user); 
     if(response.data.user.codigo  && response.data.user.rol === "Estudiante" || response.data.user.rol === "estudiante")
     {
       navigate("/dashboard");
     }else if(response.data.user.codigo  && response.data.user.rol === "Administrador" || response.data.user.rol === "administrador" ){
       navigate("/dashboard-admin");
     }
      
    }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario o la contraseña no existen',
          });
        console.log(error);
    }
}
  return (
      <>
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <img
            src="https://investigacion.unimagdalena.edu.co/Content/Imagenes/escudo_black.png"
            className="img-fluid"
          />
        </div>
        <div className="col-1">
          <h2 className="title text-color fw-bold pt-3">Excusa+</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-4">
          <h5 className="text-center text-color fw-bold pt-2">
            Lorem ipsum dolor, sit amet
          </h5>
          <p className="text-center text-secundary fw-bold ">
            Lorem ipsum dolor, sit amet
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center ">
              <div className="col-md-6 m-3">
                <label className="text-color">Correo Institucional</label>
                <input
                  name="email"
                  className="form-control secundary-color"
                  type="text"
                  placeholder="example@unimagdalena.edu.co"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6  m-3">
                <label className="text-color">Contraseña</label>
                <input
                  name="password"
                  className="form-control secundary-color"
                  type="password"
                  placeholder="**************"
                  maxLength="10"
                  onChange={handleChange}
                  value={password}
                />
                <span className="password-icon">
                  <i className="bi bi-eye"></i>
                </span>
              </div>
              <div className=" form-group col-md-6">
                <button
                  type="submit"
                  className="btn primary-color text-white btn-lg btn-block btn-tam "
                >
                  Iniciar Sesion
                </button>
                <input type="radio" className=" mt-5 m-lg-3" />
                <label className="text-color ">Mantener sesion iniciada</label>
              </div>
            </div>
          </form>
        </div>
        </div>
        <footer className="col-auto mt-5">
          <p className="text-color text-center mt-5">
            {" "}
            &copy; 2022 Arquitectura de Computadores
          </p>
        </footer>
    </>
  );
};

export default Login;
