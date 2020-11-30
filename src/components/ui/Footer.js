import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Nav className='footer bg-light justify-content-center' activeKey='/home'>
        <Container>
          <Row className='text-center'>
            <Col>
              <h5 className=''>CALL OR TEXT</h5>
              <h6>936-662-0862</h6>
            </Col>
            <Col className='justify-content-end text-center'>
              <h5>STAY CONNECTED</h5>
              <Nav.Item>
                <a
                  className='p-2'
                  href='https://www.facebook.com/melissahawkinsphotography'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-facebook'></i>
                </a>

                <a
                  href='https://www.instagram.com/melissahawkinsphotography/'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-instagram'></i>
                </a>
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  )
}

export default Footer
