import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to="/">
        MERN
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
          {/* se puede utilizar "as={componente}" para que un componente se renderice como otro y pueda usar props como el mismo*/}
          <Nav.Link as={NavLink} to="/projects">
            Proyectos
            {/* <NavLink to="/projects">Proyectos</NavLink> */}
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to="/admin/users">
              Usuarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/login">
            Iniciar Sesión
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Registrarse
          </Nav.Link>
          <Nav.Link as={NavLink} to="/account">
            Mi Cuenta
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
