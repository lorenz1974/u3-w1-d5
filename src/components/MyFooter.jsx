import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FooterNav from './FooterNav'

function MyFooter() {
  return (
    <>
      {/* Social Icons */}
      <div id='socialIcons' className='mt-5 ms-2'>
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
          <Col id='footerLinks1'>
            <FooterNav
              id='footerNav1'
              links={[
                { text: 'Audio And Subtitles', href: '#' },
                { text: 'Media Center', href: '#' },
                { text: 'Privacy', href: '#' },
                { text: 'Contact Us', href: '#' },
              ]}
            />
          </Col>
          <Col id='footerLinks2'>
            {' '}
            <FooterNav
              id='footerNav2'
              links={[
                { text: 'Audio Description', href: '#' },
                { text: 'Investor Relation', href: '#' },
                { text: 'Legal Notices', href: '#' },
              ]}
            />
          </Col>
          <Col id='footerLinks3'>
            {' '}
            <FooterNav
              id='footerNav3'
              links={[
                { text: 'Help Center', href: '#' },
                { text: 'Jobs', href: '#' },
                { text: 'Cookie Preferencies', href: '#' },
              ]}
            />
          </Col>
          <Col id='footerLinks4'>
            {' '}
            <FooterNav
              id='footerNav4'
              links={[
                { text: 'Gift Cards', href: '#' },
                { text: 'Terms of Use', href: '#' },
                { text: 'Corporate Infomation', href: '#' },
              ]}
            />
          </Col>
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
