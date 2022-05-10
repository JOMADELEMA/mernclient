import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import useAuth from "../components/auth/useAuth";
import { Navigate } from "react-router-dom";

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
        console.log("acá está la respuesta");
        console.log(respuesta.data.data);
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
              {user.nombre} + {user.id_usuario} - ProjectsPage
            </h1>

            <button className="btn btn-primary" onClick={() => obtenerDatos()}> Agregar Post </button>

            <Table striped bordered hover variant="dark" className="mt-5">
              <thead>
                <tr>
                  <th>Id Post</th>
                  <th>Texto</th>
                  <th>Fecha</th>
                  <th>Id Usuario</th>
                </tr>
              </thead>
              <tbody>
                {posts?.length ? (
                  posts.map((item) => (
                    <tr key={item.id_post}>
                      <td>{item.id_post}</td>
                      <td>{item.texto}</td>
                      <td>{item.fecha_creacion}</td>
                      <td>{item.id_usuario}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={0}>
                    <td colSpan={4}>No hay posts para mostrar</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;
