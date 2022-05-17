import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import axios from "axios";
import useAuth from "../components/auth/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Plus } from "tabler-icons-react";

import "./ProjectsPage.css";

const url = "http://localhost:3100/proyectos/listar-mis-proyectos";

axios.defaults.withCredentials = true;


const ProjectsPage = () => {
  const { user } = useAuth();
  const [proyectos, setProyectos] = useState([]);

  const navigate = useNavigate();
  const obtenerDatos = async () => {
    const consulta = await axios
      .post(url, {
        id_usuario: user.id_usuario,
      })
      .then((respuesta) => {
        setProyectos(respuesta.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        console.log("funcion que siempre se ejecuta");
      });
  };

  function acortarTexto (texto) {
    if(texto.length>10){
      return (texto.substring(0, 20)+"...");
    }
    else {
      return texto;
    }
  }

  const redirigir = () => {
    navigate("/project/new-project");
  }



  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="contenedor-ui-proyectos">
            <div className="titulo w-100">
              <h1 className="texto-titulo">
                ProjectsPage
              </h1>

              <Plus size="48px" color="white" className="boton-agregar-post" onClick={() => redirigir()} />

            </div>

            <div className="contenedor-tarjetas">

              {proyectos?.length ? (
                proyectos.map((item) => (
                  <div key={item.id_proyecto} className="contenedor-tarjeta-proyecto">
                    <div className="encabezado-tarjeta-proyecto">
                      <h4>{item.id_proyecto}</h4>
                    </div>
                    <div className="cuerpo-tarjeta-proyecto">
                      <div className="texto-tarjeta">{acortarTexto(item.descripcion)}</div>
                      <div className="menu-tarjeta">
                        <div className="dropdown"
                        >
                          <div className="boton-dropdown" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                            &#8226;&#8226;&#8226;
                          </div>
                          <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                            <li className="dropdown-item"> <Link className="dropdown-item" to={`${item.id_proyecto}`}>Ver</Link></li>
                            <li className="separador-dropdown-menu"></li>
                            <li className="dropdown-item"><Link className="dropdown-item" to="#">Editar</Link></li>
                            <li className="separador-dropdown-menu"></li>
                            <li className="dropdown-item"><Link className="dropdown-item" to="#">Eliminar</Link></li>
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
      </Container>
    </>
  );
};

export default ProjectsPage;
