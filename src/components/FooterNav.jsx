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

class FooterNav extends Component {
  render() {
    const { links } = this.props // Usato destructuring
    return (
      <Nav className='flex-column'>
        {links.map((link, i) => (
          <Nav.Item as='li' key={i}>
            <Nav.Link href={link.href}>{link.text}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    )
  }
}

export default FooterNav
