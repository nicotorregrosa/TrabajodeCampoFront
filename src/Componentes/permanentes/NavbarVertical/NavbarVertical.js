import React from "react";
import { Nav, Navbar } from 'react-bootstrap'
import './NavbarVertical.css'

const NavbarVertical = () => {
  return (
    <Navbar expand="lg">
        <Nav className="navbar">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/Personal">Personal</Nav.Link>
          <Nav.Link href="/Aulas">Aulas</Nav.Link>
          <Nav.Link href="/Carreras">Carreras</Nav.Link>
          <Nav.Link href="/Elementos">Elementos</Nav.Link>
          <Nav.Link href="/Espacios">Espacios</Nav.Link>
          <Nav.Link href="/Materias">Materias</Nav.Link>
          <Nav.Link href="/PlanDeEstudio">Plan de estudio</Nav.Link>
          <Nav.Link href="/TipoDeEspacio">Tipo de espacio</Nav.Link>
        </Nav>
    </Navbar>
  );
};

export default NavbarVertical;
