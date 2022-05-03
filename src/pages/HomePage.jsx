import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
    <Container>
      <Row className='mt-5'>
        <Col className='text-center' xs={{span:12}} md={{span: 6}}>
        <h2>Bienvenido al Gestor de Treas</h2>
        <p>Aquí podrás gestionar tus proyectos!</p>

        <p>Marca tus tareas como terminadas, agrega, elimina o actualiza</p>
        <div>
          <Link to="/login"> Ingresa  </Link> o <Button as ={Link} to="/register" className='ml-1'>Crea una Cuenta</Button>
        </div>
        </Col>
        <Col >
          <img src="/img/task-manager.svg" alt="gestor de tareas" className='img-fluid'/>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default HomePage