import { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";

const Tramites = () => {
  const [show, setShow] = useState(false);

  //Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr>
        <td>15676</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Pendiente</td>
        <td>29/05/2022 10:00</td>
        <td>
            <button className="primary-color text-white btn btn-blocl" onClick={handleShow}>Tramitar</button>
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
                <label className="text-color"> Nombre del estudiante</label>
                <p>Juan daniel</p>
              </Col>
              <Col xs={6} md={6}>
                <label className="text-color"> Asignatura</label>
                <p>Calculo diferencial</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="text-color"> Codigo Estudiantil</label>
                <p>2017264132</p>
              </Col>
              <Col xs={6} md={6}>
                <label className="text-color"> Grupo/Docente</label>
                <p>G3-Pedro Gutierrez</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
              <label className="text-color mb-1"> Descripcion</label>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae fugiat aliquam mollitia ullam inventore sapiente
                  vel dicta quisquam, pariatur odio eveniet id soluta quo neque
                  est excepturi quos reiciendis saepe.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <label className="text-color"> Peticion</label>
                <p>fecha 1</p>
              </Col>
              <Col xs={6} md={4}>
                <label className="text-color"> Fecha Aprovacion</label>
                <p>fecha 2</p>
              </Col>
              <Col xs={6} md={4}>
                <label className="text-color"> Validez Hasta</label>
                <input
                    type="date"
                    className="form-control"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="btn-danger mx-5 " onClick={handleClose}>
            Rechazar
          </Button>
          <Button className="primary-color mx-5" onClick={handleClose}>
            Aprobar
          </Button>
          <Button className="btn-success mx-5" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tramites;