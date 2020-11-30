import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Container className='text-center'>
        <Row>
          <Col>
            <h3>
              READY TO LEARN MORE OR SCHEDULE AN EXCLUSIVE TOUR OF MY STUDIO?
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to='/contact'>
              <h5 className='mt-3'>CONTACT ME!</h5>
            </Link>
            <h6>SHARE THIS:</h6>
            <div className='mt-3'>
              <Button className='m-3'>Twitter</Button>
              <Button>FaceBook</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
