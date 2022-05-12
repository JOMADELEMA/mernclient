import React, { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import "./RegisterPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3100/auth/registrar-usuario";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [correcto, setCorrecto] = useState(true);
  // const [exito, setExito] = useState(false);

  const obtenerFormulario = (e) => {
    e.preventDefault();

    const formData = {
      id_usuario: e.target[0].value,
      nombre: e.target[1].value,
      apellido: e.target[2].value,
      id_rol: e.target[3].value,
      contrasena: e.target[4].value,
      confirmContrasena: e.target[5].value,
    };

    if (
      confirmarContraseña(formData.contrasena, formData.confirmContrasena) ===
      false
    ) {
      setCorrecto(false);
      handleShowError();
    }

    if (
      confirmarContraseña(formData.contrasena, formData.confirmContrasena) ===
      true
    ) {
      setCorrecto(true);
      registrarUsuario(
        formData.id_usuario,
        formData.nombre,
        formData.apellido,
        formData.id_rol,
        formData.contrasena
      );
    }

    console.log(
      confirmarContraseña(formData.contrasena, formData.confirmContrasena)
    );
  };

  const confirmarContraseña = (pass, passConfirm) => {
    return pass === passConfirm;
  };

  const registrarUsuario = async (
    id_usuario,
    nombre,
    apellido,
    id_rol,
    contrasena
  ) => {
    const registro = await axios
      .post(url, {
        id_usuario: id_usuario,
        nombre: nombre,
        apellido: apellido,
        id_rol: id_rol,
        contrasena: contrasena,
      })
      .then((respuesta) => {
        // setExito(true);
        handleShowExito();
      })
      .catch((error) => {
        console.log(error);
        handleShowError();
      });
  };

  function redirigir() {
    navigate("/login");
  }

  const [showError, setShowError] = useState(false);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const [showExito, setShowExito] = useState(false);

  const handleCloseExito = () => {
    setShowError(false);
    redirigir();
  };

  const handleShowExito = () => setShowExito(true);

  return (
    <>
      <Container className="contenedor" fluid>
        <Row>
          <Col className="columna">
            <div className="contenedor-carta-registro">
              <h1 className="text-center titulo">Registrar Usuario</h1>
              <Form
                onSubmit={obtenerFormulario}
                className="contenedor-formulario-registro"
              >
                <div className="contenedor-inputs-registro">
                  <Form.Group className="mb-3" controlId="formIDusuario">
                    <Form.Label className="texto-carta">
                      Ingrese el ID de Usuario:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="text"
                      placeholder="ID de Usuario"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label className="texto-carta">
                      Ingrese el Nombre del Usuario:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="text"
                      placeholder="Nombre"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formApellido">
                    <Form.Label className="texto-carta">
                      Ingrese el Apellido del Usuario:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="text"
                      placeholder="Apellido"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formRol">
                    <Form.Label className="texto-carta">
                      Seleccione el Rol:
                    </Form.Label>
                    <Form.Select
                      className="input-formulario"
                      type="text"
                      placeholder="Seleccionar rol"
                    >
                      <option value="op">Operaciones</option>
                      <option value="su">Super Usuario</option>
                      <option value="ve">Ventas</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="texto-carta">
                      Ingrese su Contraseña:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPasswordConfirm">
                    <Form.Label className="texto-carta">
                      Vuelva a introducir la Contraseña:
                    </Form.Label>
                    <Form.Control
                      className="input-formulario"
                      type="password"
                      placeholder="Password confirm"
                    />
                  </Form.Group>
                </div>

                <button className="boton-carta" type="submit">
                  <span className="texto-boton-carta">Iniciar Sesión </span>
                </button>
              </Form>

              {correcto ? (
                <></>
              ) : (
                <>
                  <div className="mensaje-contrasena">
                    Las contraseñas no coinciden, intente de nuevo
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Error con la conexión a la base de datos */}
      <Modal show={showError} onHide={handleCloseError} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Error con la base de datos</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseError}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Pais agregado correctamente */}
      <Modal show={showExito} onHide={handleCloseExito} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Exito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El Usuario se registró exitosamente, Redirigiendo....
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseExito}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterPage;
