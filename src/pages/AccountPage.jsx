import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../components/auth/useAuth";

const AccountPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <Row className="m-5">
          <Col xs={12} className="text-center mb-4">
            {/* <img src="/img/male_avatar.svg" alt="profile avatar" style={{width: "200px", height: "200px", borderRadius: "50%"}}/> */}
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
          </Col>
          <Card className="shadow mx-auto p-5" style={{maxWidth: "360px"}}>
            <p className="text-center">
              <b>Nombre: </b>
              {user.name}
            </p>
            <p className="text-center">
              <b>e-mail: </b>
              {user.email}
            </p>
            <p className="text-center">
              <b>Rol: </b>
              {user.role}
            </p>

            <Button variant="warning">Editar Cuenta</Button>
            <Button variant="link" className="mt-1">Cambiar Contraseña</Button>
            <Button variant="link" className="text-danger">Eliminar Cuenta</Button>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default AccountPage;
