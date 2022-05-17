import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import './ProjectPage.css'
import { ArrowBackUp } from 'tabler-icons-react'

const url = "http://localhost:3100/posts/post"
const urlEtiquetas = "http://localhost:3100/etiquetas/listar-etiquetas"

const ProjectPage = () => {

  const { id_proyecto } = useParams();
  const [proyecto, setProyecto] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);

  const navigate = useNavigate();

  const obtenerDatos = async () => {
    const consulta = await axios
      .post(url, {
        id_post: id_proyecto,
      })
      .then((respuesta) => {
        // console.log("respuesta:")
        // console.log(respuesta.data.data[0]);
        setProyecto(respuesta.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        // console.log("funcion que siempre se ejecuta");
      });
  };

  const obtenerEtiquetas = async () => {
    const query = await axios.post(urlEtiquetas, {
      id_proyecto: id_proyecto,
    })
      .then((respuesta) => {
        setEtiquetas(respuesta.data.data[0]);
      }).catch((error) => {
        console.log(error);
      }).then(function () {

      });
  };



  const redirigir = () => {
    navigate("/projects");
  }

  useEffect(() => {
    obtenerDatos();
  }, []);

  // console.log(id_post);
  return (
    <>
      <Container className="contenedor" fluid>
        <Row>
          <Col className="columna">

            <div className='titulo d-flex align-items-center'>


              <ArrowBackUp size="48px" color="white" className="boton-agregar-post" onClick={() => redirigir()} />
              <h1 className="texto-titulo">
                Project Page
              </h1>
            </div>



            <div className="contenedor-carta">
              <h1 className="text-center">ID Proyecto: {id_proyecto}</h1>

              <div className='contenedor-campos'>
                <div className='campo-post'>Fecha Creación</div>
                <div className="contenido-campo-post">{proyecto.fecha_creacion}</div>
              </div>
              <div className='contenedor-campos'>
                <div className='campo-post'>Descripcion:</div>
                <div className="contenido-campo-post">{proyecto.texto}</div>
              </div>
              <div className='contenedor-campos'>
                <div className='campo-post'>Comentarios</div>
                <div className="contenido-campo-post">Recordar agregar columna comentarios en base de datos</div>
              </div>
            </div>

            <div className="contenedor-etiquetas">
              <div className="etiqueta">etiqueta 1</div>
              <div className="etiqueta">etiqueta 2</div>
              <div className="etiqueta">etiqueta 3</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectPage