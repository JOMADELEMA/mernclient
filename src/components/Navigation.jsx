import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "./auth/useAuth";
import './Navigation.css';

const Navigation = () => {

  const { logout, user } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar shadow-sm">
        <Navbar.Brand as={NavLink} to="/" className="logo ms-1">
          <div className="contenedor-logo d-flex justify-content-center">
            MERN
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            {/* se puede utilizar "as={componente}" para que un componente se renderice como otro y pueda usar props como el mismo*/}
            {user ?
              <>
                <Nav.Link as={NavLink} to="/projects" className="texto-navbar">
                  Proyectos
                  {/* <NavLink to="/projects">Proyectos</NavLink> */}
                </Nav.Link>
                {/* <NavDropdown title="Admin">
                  <NavDropdown.Item as={NavLink} to="/admin/users">
                    Usuarios
                  </NavDropdown.Item>
                </NavDropdown> */}
{/* 
                <Nav.Link as={NavLink} to="/register">
                  Registrarse
                </Nav.Link> */}
                <Nav.Link as={NavLink} to="/account" className="texto-navbar">
                  Mi Cuenta
                </Nav.Link>
                <Nav.Link to="/account" onClick={() => logout()} className="texto-navbar">
                  Cerrar Sesión
                </Nav.Link>
              </>
              :

              <Nav.Link as={NavLink} to="/login" className="texto-navbar">
                <span> Iniciar Sesión</span>
              </Nav.Link>

            }


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
