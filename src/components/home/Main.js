import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main-content'>
      <Container>
        <Row>
          <Col>
            <Link to='/newborns'>
              <Image src='img/newborns.jpg' roundedCircle />
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Link to='/weddings'>
              <Image src='img/weddings.jpg' roundedCircle />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
