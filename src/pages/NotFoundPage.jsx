import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={{span: 8, offset: 2}}className="text-center">
            <img
              src="/img/404-not-found.svg"
              alt="error 404"
              style={{ width: "100%", maxWidth: "500px" }}
            />
            <h2>Estas perdido?</h2>
            <p>
              Volver al <Link to="/"> Inicio </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFoundPage;
