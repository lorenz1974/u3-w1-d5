import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button } from 'react-bootstrap'

function MyFooter() {
  return (
    <>
      {/* Social Icons */}
      <div id='socialIcons' className='mt-5 text-center'>
        <FontAwesomeIcon
          icon='fa-brands fa-square-facebook'
          className='mx-3 fs-4'
        />
        <FontAwesomeIcon icon='fa-brands fa-instagram' className='mx-3 fs-4' />
        <FontAwesomeIcon icon='fa-brands fa-twitter' className='mx-3 fs-4' />
        <FontAwesomeIcon icon='fa-brands fa-youtube' className='mx-3 fs-4' />
      </div>

      {/* Bottom Navigation Bars */}
      <Container id='bottomNavBars' className='mt-3'>
        <Row>
          <Col id='footerLinks1'></Col>
          <Col id='footerLinks2'></Col>
          <Col id='footerLinks3'></Col>
          <Col id='footerLinks4'></Col>
        </Row>
      </Container>

      {/* Service Code Button */}
      <div id='sourceCode' className='m-3 text-center'>
        <Button variant='outline-dark' className='border-2 rounded-0 p-1 fs-7'>
          Service Code
        </Button>
      </div>

      {/* Copyright */}
      <div id='copyRight' className='m-3 text-center'>
        <p className='fs-7 p-0 m-0'>1997-2024 Netflix, inc.</p>
      </div>
    </>
  )
}

export default MyFooter
