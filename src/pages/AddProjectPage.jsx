import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col, Row, Modal, Form, Button } from "react-bootstrap";
import useAuth from "../components/auth/useAuth";
import { useNavigate } from "react-router-dom";
import "./AddProjectPage.css";

const url = "http://localhost:3100/proyectos/agregar-proyecto";
const urlEtiquetas = "http://localhost:3100/etiquetas/listar-etiquetas";
const urlProyectoXEtiqueta = "http://localhost:3100/etiquetas/agregar-etiquetas-proyecto";

const AddProjectPage = () => {
  const navigate = useNavigate();

  const [etiquetas, setEtiquetas] = useState([]);
  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

  const { user } = useAuth();

  const obtenerFormulario = (e) => {
    e.preventDefault();

    const formData = {
      descripcion: e.target[0].value,
      comentarios: e.target[1].value,
      fecha_creacion: e.target[2].value,
    };

    agregarProyecto(formData.descripcion, formData.comentarios, formData.fecha_creacion, user.id_usuario);
  };

  const listarEtiquetas = async () => {
    axios
      .get(urlEtiquetas)
      .then((respuesta) => {
        // console.log(respuesta.data.data);
        setEtiquetas(respuesta.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listarEtiquetas();
  }, []);

  const quitarEtiqueta = (pEtiqueta) => {
    const nuevoArray = etiquetas.filter((etiqueta) => etiqueta != pEtiqueta);
    console.log("este array reemplaza el estado etiquetas");
    console.log(nuevoArray);
    setEtiquetas(nuevoArray);
  };
  const quitarEtiquetaSeleccionada = (pEtiqueta) => {
    const nuevoArray = etiquetasSeleccionadas.filter(
      (etiqueta) => etiqueta != pEtiqueta
    );
    console.log("este array reemplaza el estado etiquetas");
    console.log(nuevoArray);
    setEtiquetasSeleccionadas(nuevoArray);
  };

  const asignarEtiqueta = (etiqueta) => {
    console.log(etiqueta);
    if (etiquetasSeleccionadas.length === 0) {
      quitarEtiqueta(etiqueta);
      setEtiquetasSeleccionadas([etiqueta]);
      return;
    }

    const repetido = etiquetasSeleccionadas.includes(etiqueta);

    if (!repetido) {
      console.log("no está en el estado");
      quitarEtiqueta(etiqueta);
      setEtiquetasSeleccionadas([...etiquetasSeleccionadas, etiqueta]);
    }
  };

  const desAsignarEtiqueta = (etiqueta) => {
    console.log(etiqueta);
    if (etiquetas.length === 0) {
      quitarEtiquetaSeleccionada(etiqueta);
      setEtiquetas([etiqueta]);
      return;
    }

    const repetido = etiquetas.includes(etiqueta);

    if (!repetido) {
      console.log("no está en el estado");
      quitarEtiquetaSeleccionada(etiqueta);
      setEtiquetas([...etiquetas, etiqueta]);
    }
  };

  const agregarProyecto = async (
    descripcion,
    comentarios,
    fecha_creacion,
    id_usuario
  ) => {
    const registro = await axios
      .post(url, {
        descripcion: descripcion,
        comentarios: comentarios,
        fecha_creacion: fecha_creacion,
        id_usuario: id_usuario,
      })
      .then((respuesta) => {
        // setExito(true);
        agregarEtiquetas(respuesta.data.data);
        handleShowExito();
      })
      .catch((error) => {
        console.log(error);
        handleShowError();
      });
  };




  const agregarEtiquetas = (pId) => {
    const repetir = etiquetasSeleccionadas.length;
    console.log(pId);

    for (let i = 0; i < repetir; i++){

      axios.post(urlProyectoXEtiqueta, {
        id_etiqueta: etiquetasSeleccionadas[i].id_etiqueta,
        id_proyecto: pId,
      })
      .then((respuesta)=>{
        console.log("exito");
      })
      .catch((error)=> {
        console.log(error);
      })
      // console.log(i);
    }
    // console.log(repetir);

  }




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

                <h5>Seleccione las etiquetas correspondientes:</h5>
                <div className="contenedor-etiquetas">
                  <br />
                  {etiquetas.map((item) => (
                    <h6
                      className="etiqueta"
                      key={item.id_etiqueta}
                      onClick={() => {
                        asignarEtiqueta(item);
                      }}
                    >
                      {item.nombre}
                    </h6>
                  ))}
                </div>

                <h5>Etiquetas Seleccionadas:</h5>
                <div className="contenedor-etiquetas-proyecto">
                  <br />
                  {etiquetasSeleccionadas.map((item) => (
                    <h6
                      className="etiqueta"
                      key={item.id_etiqueta}
                      onClick={() => {
                        desAsignarEtiqueta(item);
                      }}
                    >
                      {item.nombre}
                    </h6>
                  ))}
                </div>

                <button className="boton-carta" type="submit">
                  <span className="texto-boton-carta">Agregar Proyecto</span>
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
