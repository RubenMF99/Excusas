import { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ListExcusa = ({ excuse }) => {
  const [show, setShow] = useState(false);
  const {setidControl} = useAuth();
  //Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteExcuse = async idexcusa =>{
    const token = localStorage.getItem("token");
      if (!token) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${import.meta.env.VITE_APP_RUTA}/excusa/${idexcusa}`;
    try{
        await axios.delete(url,config);
        setidControl(idexcusa);
    }catch(error){
        console.log(error);
    }
}
  return (
    <>
      <tr>
        <td>{excuse.user_codigo}</td>
        <td>{excuse.asignatura}</td>
        <td>{excuse.grupo_doc}</td>
        <td>{excuse.estado}</td>
        <td>{excuse.fechacreacion}</td>
        <td>
          <i
            className="bi bi-x-circle-fill"
            style={{ color: "red" }}
            onClick={() => {
             deleteExcuse(excuse.idexcusa);
            }}
          ></i>
          <i className="bi bi-eye mx-3" style={{}} onClick={handleShow}></i>
        </td>
      </tr>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header className="primary-color" closeButton>
          <Modal.Title className="text-white">
            Informacion de la Excusa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <label className="text-color"> Id Excusa</label>
                <p>{excuse.idexcusa}</p>
              </Col>
              <Col xs={6} md={6}>
                <label className="text-color"> Asignatura</label>
                <p>{excuse.asignatura}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="text-color"> Codigo Estudiantil</label>
                <p>{excuse.user_codigo}</p>
              </Col>
              <Col xs={6} md={6}>
                <label className="text-color"> Grupo/Docente</label>
                <p>{excuse.grupo_doc}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="text-color mb-1"> Descripcion</label>
                <p>{excuse.descripcion}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <label className="text-color"> Fecha Peticion</label>
                <p>{excuse.fechacreacion}</p>
              </Col>
              <Col xs={6} md={4}>
                <label className="text-color"> Fecha Respuesta</label>
                <p>{excuse.fecharespuesta}</p>
              </Col>
              <Col xs={6} md={4}>
                <label className="text-color"> Validez Hasta</label>
                <p>{excuse.fechaexpiracion}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="primary-color" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListExcusa;
