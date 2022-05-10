import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function LoginPage() {
  const { login } = useAuth();
  const location = useLocation();

  const getCredentials = (e) => {
    e.preventDefault();

    const userCredentials = {
      id_usuario: e.target[0].value,
      contrasena: e.target[1].value,
    };

        login(userCredentials, location.state?.from);
  };

  return (
    <>
      <h1 className="text-center mt-5">Inicio de Sesión</h1>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card className="p-5 shadow mt-5 w-75">
              <Form onSubmit={getCredentials}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Id Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su ID de usuario"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
