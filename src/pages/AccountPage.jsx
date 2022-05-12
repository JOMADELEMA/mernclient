import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../components/auth/useAuth";
import './AccountPage.css'

const AccountPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <Row className="m-5 p-5">
          <div
            className="contenedor-carta-cuenta mx-auto pt-5"
          >
            <img
              src="/img/male_avatar.svg"
              // src="https://i.blogs.es/cc4462/screenshot_10/450_1000.png"
              alt="profile avatar"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p className="text-center">
              <b>Nombre: </b>
              {user.nombre}
            </p>
            <p className="text-center">
              <b>ID Usuario: </b>
              {user.id_usuario}
            </p>
            <p className="text-center">
              <b>Rol: </b>
              {user.id_rol}
            </p>

            <button className="boton-carta">
              <span className="texto-boton-carta"> Editar Cuenta</span>{" "}
            </button>
            <Button variant="link" className="mt-1">
              Cambiar Contraseña
            </Button>
            <Button variant="link" className="text-danger">
              Eliminar Cuenta
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AccountPage;
