import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import axios from "axios";
import useAuth from "../components/auth/useAuth";

import "./ProjectsPage.css";

const url = "http://localhost:3100/posts/listar-mis-posts";

axios.defaults.withCredentials = true;

const ProjectsPage = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const obtenerDatos = async () => {
    const consulta = await axios
      .post(url, {
        id_usuario: user.id_usuario,
      })
      .then((respuesta) => {
        // console.log("acá está la respuesta");
        // console.log(respuesta.data.data);
        setPosts(respuesta.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        console.log("funcion que siempre se ejecuta");
      });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>
              ProjectsPage
            </h1>

            <button className="btn btn-primary" onClick={() => obtenerDatos()}>
              Agregar Post
            </button>

            {posts?.length ? (
              posts.map((item) => (
                <div className="contenedor-tarjeta-proyecto">
                  <div className="encabezado-tarjeta-proyecto">
                    <h4>{item.id_post}</h4>
                  </div>
                  <div className="cuerpo-tarjeta-proyecto">
                    <div className="texto-tarjeta">{item.texto}</div>
                    <div className="menu-tarjeta">
                      <DropdownButton
                        variant="none"
                        style={{ otuline: "none" }}
                        title="&#8226;&#8226;&#8226;"
                      >
                        <Dropdown.Item>Ver</Dropdown.Item>

                        <Dropdown.Item>Editar</Dropdown.Item>

                        <Dropdown.Item>Eliminar</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No hay post para mostrar</h1>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="contenedor-tarjeta-proyecto">
              <div className="encabezado-tarjeta-proyecto">
                <h4>Identificador de proyecto</h4>
              </div>
              <div className="cuerpo-tarjeta-proyecto">
                <div className="texto-tarjeta">Descripcion....</div>
                <div className="menu-tarjeta">
                  <DropdownButton
                    variant="none"
                    style={{ otuline: "none" }}
                    title="&#8226;&#8226;&#8226;"
                  >
                    <Dropdown.Item>Ver</Dropdown.Item>

                    <Dropdown.Item>Editar</Dropdown.Item>

                    <Dropdown.Item>Eliminar</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;
