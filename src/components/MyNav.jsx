import { Component } from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  NavItem,
  NavLink,
} from 'react-bootstrap'
import Logo from '../assets/netflix_logo.png'
import Avatar from '../assets/avatar.png'

const MyNav = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        {/* Logo and Toggler Button */}
        <Navbar.Brand href='#'>
          <img width='100px' src={Logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle className='align-self-start' aria-controls='navbarNav' />

        {/* Search and User Section */}
        <div className='d-flex flex-grow-1 order-lg-2 justify-content-end'>
          <Form className='d-none my-auto' id='searchForm'>
            <FormControl type='text' placeholder='Search' className='m-0 p-0' />
          </Form>
          <p id='searchMagnifier' className='my-auto'>
            <i className='fa-solid fa-magnifying-glass ms-3'></i>
          </p>
          <p className='ms-3 my-auto fs-7'>KIDS</p>
          <p className='my-auto'>
            <i className='fa-solid fa-bell ms-3'></i>
          </p>
          <NavDropdown
            align='end'
            title={
              <img
                width='30px'
                src={Avatar}
                alt='User'
                className='dropdown-toggle'
              />
            }
            id='profileDropDown'
          >
            <NavDropdown.Item className='fs-7' href='/profile.html'>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item className='fs-7' href='/settings.html'>
              Settings
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        {/* Navbar Items */}
        <Navbar.Collapse id='navbarNav'>
          <Nav className='me-auto'>
            <Nav.Link className='fs-7' href='#'>
              Home
            </Nav.Link>
            <Nav.Link className='fs-7' href='#'>
              TV Shows
            </Nav.Link>
            <Nav.Link className='fs-7' href='#'>
              Movies
            </Nav.Link>
            <Nav.Link className='fs-7' href='#'>
              New & Popular
            </Nav.Link>
            <Nav.Link className='fs-7' href='#'>
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
