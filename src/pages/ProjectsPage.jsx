import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import axios from "axios";
import useAuth from "../components/auth/useAuth";
import { Plus } from "tabler-icons-react";

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
          <Col className="contenedor-ui-proyectos">
            <div className="titulo w-100">
              <h1>
                ProjectsPage
              </h1>

              <Plus size="48px" color="white" className="boton-agregar-post" onClick={() => obtenerDatos()} />

            </div>

            <div className="contenedor-tarjetas">

              {posts?.length ? (
                posts.map((item) => (
                  <div className="contenedor-tarjeta-proyecto">
                    <div className="encabezado-tarjeta-proyecto">
                      <h4>{item.id_post}</h4>
                    </div>
                    <div className="cuerpo-tarjeta-proyecto">
                      <div className="texto-tarjeta">{item.texto}</div>
                      <div className="menu-tarjeta">
                        <div className="dropdown"
                        >
                          <a href="#" className="boton-dropdown" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                            &#8226;&#8226;&#8226;
                          </a>
                          <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                            <li className="dropdown-item">Ver</li>
                            <li className="separador-dropdown-menu"></li>
                            <li className="dropdown-item">Editar</li>
                            <li className="separador-dropdown-menu"></li>
                            <li className="dropdown-item">Eliminar</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No hay post para mostrar</h1>
              )}
            </div>
          </Col>

        </Row>

        {/* <Row>
          <Col>
            <div className="contenedor-tarjeta-proyecto">
              <div className="encabezado-tarjeta-proyecto">
                <h4>Identificador de proyecto</h4>
              </div>
              <div className="cuerpo-tarjeta-proyecto">
                <div className="texto-tarjeta">Descripcion....</div>
                <div className="menu-tarjeta">
                  <div className="dropdown"
                  >
                    <a href="#" className="boton-dropdown" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                      &#8226;&#8226;&#8226;
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li className="dropdown-item">Ver</li>
                      <li className="dropdown-item">Editar</li>
                      <li className="dropdown-item">Eliminar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ProjectsPage;
