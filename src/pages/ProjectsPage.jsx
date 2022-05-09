import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

const url = "http://localhost:3100/posts/listar-posts";

const ProjectsPage = () => {
  const [posts, setPosts] = useState([]);

  const obtenerDatos = async () => {
    try {
      const consulta = await axios.get(url);
      const respuesta = await consulta.data;

      setPosts(respuesta.data);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>ProjectsPage</h1>

            <button onClick={() => obtenerDatos()}> Click </button>

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
                {posts && posts.map((item) => (
                  <tr key={item.id_post}>
                    <td>{item.id_post}</td>
                    <td>{item.texto}</td>
                    <td>{item.fecha_creacion}</td>
                    <td>{item.id_usuario}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;
