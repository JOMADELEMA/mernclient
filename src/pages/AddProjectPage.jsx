import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row, Modal, Form, Button } from "react-bootstrap";
import useAuth from "../components/auth/useAuth";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3100/proyectos/agregar-proyecto";

const AddProjectPage = () => {
  const navigate = useNavigate();

  const [etiquetas, setEtiquetas] = useState([]);
  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

  const { user } = useAuth();

  const obtenerFormulario = (e) => {
    e.preventDefault();

    console.log(e.target[3].value);

    // const formData = {
    //   descripcion: e.target[0].value,
    //   comentarios: e.target[1].value,
    //   fecha_creacion: e.target[2].value,
    // };

    // agregarPost(formData.descripcion, formData.comentarios, formData.fecha_creacion, user.id_usuario);
  };

  const asignarEtiqueta = (etiqueta) => {
    if (etiquetas.length === 0) {
      setEtiquetas([etiqueta])
      return
    }


    const repetido = etiquetas.map((item) => {
      if (item === etiqueta) {
        console.log(item);
        return true
      }
      return false
    })

    console.log(repetido);
    if (repetido) {
      console.log("repetido igual true")
      return
    }
    console.log("si entra el codigo acá")
    setEtiquetas([...etiquetas, etiqueta])
    return
  }




  const agregarPost = async (descripcion, comentarios, fecha_creacion, id_usuario) => {
    const registro = await axios
      .post(url, {
        descripcion: descripcion,
        comentarios: comentarios,
        fecha_creacion: fecha_creacion,
        id_usuario: id_usuario,
      })
      .then((respuesta) => {
        // setExito(true);
        handleShowExito();
      })
      .catch((error) => {
        console.log(error);
        handleShowError();
      });
  };

  function redirigir() {
    navigate("/projects");
  }

  const [showError, setShowError] = useState(false);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const [showExito, setShowExito] = useState(false);

  const handleCloseExito = () => {
    setShowError(false);
    redirigir();
  };


  const handleShowExito = () => setShowExito(true);

  return (
    <>
      <Container className="contenedor" fluid>
        <Row>
          <Col className="columna">
            <div className="contenedor-carta-registro">
              <h1 className="text-center titulo">Agregar nuevo Proyecto</h1>
              <Form
                onSubmit={obtenerFormulario}
                className="contenedor-formulario-registro"
              >
                <div className="contenedor-inputs-registro">
                  <Form.Group className="m-3" controlId="formDescripcion">
                    <Form.Label className="texto-carta">
                      Ingrese la descripcion:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="text"
                      placeholder="Descripcion..."
                    />
                  </Form.Group>
                  <Form.Group className="m-3" controlId="formComentarios">
                    <Form.Label className="texto-carta">
                      Ingrese comentarios:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="text"
                      placeholder="Comentarios..."
                    />
                  </Form.Group>
                  <Form.Group className="m-3" controlId="formFecha">
                    <Form.Label className="texto-carta">
                      Ingrese la fecha:
                    </Form.Label>
                    <Form.Control className="input-formulario" type="date" />
                  </Form.Group>
                </div>

                <div className="contenedor-etiquetas border ">
                  <h6 className="etiqueta" onClick={() => asignarEtiqueta("React JS")}>React JS</h6>
                </div>

                <div className="contenedor-etiquetas-proyecto border">
                  <h6 className="etiqueta" onClick={() => asignarEtiqueta("Javascript")} >Javascript</h6>
                </div>

                <button className="boton-carta" type="submit">
                  <span className="texto-boton-carta" >Agregar Proyecto</span>
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Error con la conexión a la base de datos */}
      <Modal
        show={showError}
        onHide={handleCloseError}
        animation={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Error con la base de datos</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseError}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Pais agregado correctamente */}
      <Modal
        show={showExito}
        onHide={handleCloseExito}
        animation={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Exito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El Post se agregó exitosamente, Redirigiendo....
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseExito}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProjectPage;
