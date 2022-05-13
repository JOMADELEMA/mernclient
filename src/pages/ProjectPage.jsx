import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import './ProjectPage.css'
import { ArrowBackUp } from 'tabler-icons-react'

const url = "http://localhost:3100/posts/post"

const ProjectPage = () => {

  const { id_post } = useParams();
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  const obtenerDatos = async () => {
    const consulta = await axios
      .post(url, {
        id_post: id_post,
      })
      .then((respuesta) => {
        // console.log("respuesta:")
        // console.log(respuesta.data.data[0]);
        setPost(respuesta.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        // console.log("funcion que siempre se ejecuta");
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
              <h1 className="text-center">ID Proyecto: {id_post}</h1>

              <div className='contenedor-campos'>
                <div className='campo-post'>Fecha Creación</div>
                <div className="contenido-campo-post">{post.fecha_creacion}</div>
              </div>
              <div className='contenedor-campos'>
                <div className='campo-post'>Descripcion:</div>
                <div className="contenido-campo-post">{post.texto}</div>
              </div>
              <div className='contenedor-campos'>
                <div className='campo-post'>Comentarios</div>
                <div className="contenido-campo-post">Recordar agregar columna comentarios en base de datos</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectPage