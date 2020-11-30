import React from 'react'
import { Navbar, Image, Container, Row, Col, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <div className='center'>
        <Navbar className='header' expand='lg'>
          <Container>
            <Row>
              <Col className='justify-content-center'>
                <Image src='img/mh-logo.png' />
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
      <Container className='text-center'>
        <Row>
          <Col>
            <Nav className='header-links justify-content-center'>
              <Nav.Link href='/'>HOME</Nav.Link>
              <Nav.Link href='/contact'>CONTACT ME</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Header
