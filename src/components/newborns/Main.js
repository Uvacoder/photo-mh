import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Photos from './Photos'

const Main = () => {
  return (
    <div className='main-content'>
      <Container>
        <Row>
          <Col className='mx-auto' lg={6}>
            <h1>BIRTH TO 3 MONTHS</h1>
            <p>
              Newborn photo shoots from birth up to 3 months. Posed studio
              sessions are with babies within 5-21 days new. Parents, siblings
              and fur babies are an option to be included also.
            </p>
            <p>
              Soft colors, organic props, and timeless edits are my specialty.
              Every session has their own tailored setups depending on color of
              choice or size of baby. All textiles are purchased from
              cruelty-free handmade vendors only.{' '}
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Photos />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
