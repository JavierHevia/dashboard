import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact'

class BootstrapNavbar extends React.Component {
  render () {
    return (
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Tablero-GT</Navbar.Brand>
        <Nav className='mr-auto'>
          <NavDropdown title='Ministerios' id='basic-nav-dropdown'>
            <NavDropdown.Item href='ministerio/maga'>MAGA</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className='ml-auto'>
          <Navbar.Brand href='/who'>Quienes somos</Navbar.Brand>
        </Form>
      </Navbar>
    )
  }
}

export default BootstrapNavbar
