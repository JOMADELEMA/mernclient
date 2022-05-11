import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../components/auth/useAuth";
import "./LoginPage.css";

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
      <Container className="contenedor" fluid>
        <Row>
          <Col className="columna">
            <div className="contenedor-carta">
              <h1 className="text-center">Inicio de Sesión</h1>
              <Form onSubmit={getCredentials} className="contenedor-formulario">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="texto-carta">Ingrese su ID de Usuario:</Form.Label>
                  <Form.Control className="input-formulario"
                    type="text"
                    placeholder="ID de Usuario"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="texto-carta">Ingrese su Contraseña:</Form.Label>
                  <Form.Control className="input-formulario" type="password" placeholder="Password" />
                </Form.Group>

                <button className="boton-carta" type="submit">
                  <span className="texto-boton-carta">Iniciar Sesión </span>
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
