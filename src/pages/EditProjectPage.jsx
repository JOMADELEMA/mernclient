import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const url = "http://localhost:3100/proyectos/proyecto";

const EditProjectPage = () => {
  const { id_proyecto } = useParams();
  const [proyecto, setProyecto] = useState([]);
  var fecha;

  const obtenerDatos = async () => {
    const consulta = await axios
      .post(url, { id_proyecto: id_proyecto })
      .then((respuesta) => {
        setProyecto(respuesta.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    obtenerDatos();
  }, []);

  return (
    <>
      <Container className="contenedor" fluid>
        <Row>
          <Col className="columna">
            <div className="contenedor-carta-registro">
              <h1 className="titulo">Editar {proyecto.id_proyecto}</h1>

              <Form className="contenedor-formulario-registro">
                <div className="contenedor-inputs-registro">
                  <Form.Group className="mb-4">
                    <Form.Label className="texto-carta">Descripción</Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="text"
                      value={proyecto.descripcion}
                      placeholder="Ingrese la Descripcion"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="texto-carta">
                      Fecha creación
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="date"
                      value={new Date(proyecto.fecha_creacion)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="w-75">
                    <Form.Label className="texto-carta">Comentarios</Form.Label>
                    <Form.Control
                      className="input-formulario w-100"
                      as="textarea"
                      value={proyecto.comentarios}
                    ></Form.Control>
                  </Form.Group>
                </div>
                <button className="boton-carta" type="submit">
                  <span className="texto-boton-carta">Editar Proyecto</span>
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditProjectPage;
