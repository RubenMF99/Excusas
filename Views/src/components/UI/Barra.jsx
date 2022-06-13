import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
const Barra = () => {
  const { authUser } = useAuth();
  const { nombres } = authUser;
  const location = useLocation();
  return (
    <>
      <div className="row secundary-color mb-3">
        {location.pathname === "/dashboard" ? (
          <div className="col-12 d-flex flex-row-reverse mb-3 mt-3">
            <button className="btn btn-block ">
              <span>
                {nombres} <i className="bi bi-person-circle"></i>
              </span>
            </button>
          </div>
        ) : (
          <div className="row">
              <div className="col-6 mt-3 mb-3">
              <h4 className=" mt-2 mb-2 mx-3 text-color fw-bold">
                Tramita tus Excusas
              </h4>
          </div>
          <div className="col-6 mt-3 mb-3">
          <div className=" d-flex flex-row-reverse">
                <button className="btn btn-block ">
                  <span>

                  <i className="mx-2 bi bi-person-workspace"></i>{nombres} 
                  </span>
                </button>
              </div>
          </div>
          </div>
          
        )}
      </div>
    </>
  );
};

export default Barra;
