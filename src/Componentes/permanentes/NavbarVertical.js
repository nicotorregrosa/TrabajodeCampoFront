import React from "react";
import { Nav, Navbar } from 'react-bootstrap'

const NavbarVertical = () => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">Navbar Vertical</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-column">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#personal">Personal</Nav.Link>
          <Nav.Link href="#aulas">Aulas</Nav.Link>
          {/* Agrega más enlaces aquí según sea necesario */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
