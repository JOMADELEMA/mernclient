import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./ProjectPage.css";
import { ArrowBackUp } from "tabler-icons-react";

const url = "http://localhost:3100/proyectos/proyecto";
const urlEtiquetas = "http://localhost:3100/etiquetas/listar-etiquetas";

const ProjectPage = () => {
  const { id_proyecto } = useParams();
  const [proyecto, setProyecto] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);

  const navigate = useNavigate();

  const obtenerDatos = async () => {
    const consulta = await axios
      .post(url, {
        id_proyecto: id_proyecto,
      })
      .then((respuesta) => {
        // console.log("respuesta:")
        // console.log(respuesta.data.data[0]);
        setProyecto(respuesta.data.data[0]);
        // console.log(respuesta.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        // console.log("funcion que siempre se ejecuta");
      });
  };

  const obtenerEtiquetas = async () => {
    const query = await axios
      .post(urlEtiquetas, {
        id_proyecto: id_proyecto,
      })
      .then((respuesta) => {
        setEtiquetas(respuesta.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {});
  };

  const redirigir = () => {
    navigate("/projects");
  };

  useEffect(() => {
    obtenerDatos();
    obtenerEtiquetas();
  }, []);

  // console.log(id_post);
  return (
    <>
      <Container className="contenedor" fluid>
        <Row>
          <Col className="columna">
            <div className="titulo d-flex align-items-center">
              <ArrowBackUp
                size="48px"
                color="white"
                className="boton-agregar-post"
                onClick={() => redirigir()}
              />
              <h1 className="texto-titulo">Project Page</h1>
            </div>

            {proyecto ? (
              <div className="contenedor-carta">
                <h1 className="text-center">
                  ID Proyecto: {proyecto.id_proyecto}
                </h1>

                <div className="contenedor-campos">
                  <div className="campo-post">Fecha Creación</div>
                  <div className="contenido-campo-post">
                    {proyecto.fecha_creacion}
                  </div>
                </div>
                <div className="contenedor-campos">
                  <div className="campo-post">Descripcion:</div>
                  <div className="contenido-campo-post">
                    {proyecto.descripcion}
                  </div>
                </div>
                <div className="contenedor-campos">
                  <div className="campo-post">Comentarios</div>
                  <div className="contenido-campo-post">
                    {proyecto.comentarios}
                  </div>
                </div>
              </div>
            ) : (
              <div className="contenedor-carta">
                <h1>No hay detalle para mostrar</h1>
              </div>
            )}
            <div className="contenedor-etiquetas">
              {etiquetas?.length ? (
                etiquetas.map((item) => (
                  <div className="etiqueta" key={item.id_etiqueta}>
                    {item.nombre}
                  </div>
                ))
              ) : (
                <div className="etiqueta">
                  No hay etiquetas
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectPage;
