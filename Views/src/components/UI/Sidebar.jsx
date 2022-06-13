import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Sidebar = () => {
  const { setStatusComponent } = useAuth();
  const location = useLocation();
  return (
    <>
      <div className="row">
        <div className="col-3 mt-3 mr">
          <img
            src="https://investigacion.unimagdalena.edu.co/Content/Imagenes/escudo_black.png"
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h2 className="title fw-bold text-color mt-3 pt-3">Excusa+</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <input
            type="search"
            placeholder="Buscar"
            className="m-4 border_input "
          />
          <span>
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 m-4">
          {location.pathname === "/dashboard"?
          <>
              <button 
              className="btn btn-block btn-tam2 fw-bold  primary-color text-white mb-4"
                onClick={()=>{setStatusComponent(true)}}
              >
                <span className="ml">
                  <i className="bi bi-file-earmark-text m-1 text-white"></i>
                </span>
                Crear Excusa
              </button>
              <button 
              className="btn btn-block primary-color text-white btn-tam2 fw-bold "
                onClick={()=>{setStatusComponent(false)}}
              >
                <span className="ml">
                  <i className="bi bi-file-earmark-text m-1 text-white"></i>
                </span>
                Historial
              </button>
              </>
          :null}
      
        </div>
      </div>
    </>
  );
};

export default Sidebar;
