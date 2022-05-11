import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Container fluid className="contenedor">
        <Row className=''>
          <Col className='columna'>
            <div className='contenedor-carta'>
              <p className='texto-carta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod autem sed a at recusandae,
                assumenda reprehenderit velit reiciendis voluptates expedita, repellat
                esse eos maiores optio quidem corporis et obcaecati praesentium?</p>

              <Link to="/login" className='boton-carta'> <span className='texto-boton-carta'> Iniciar Sesión</span> </Link>
            </div>
          </Col>
          
        </Row>
      </Container>

    </>
  )
}

export default HomePage