import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand as={Link} to="/">The RickMortiest Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="about/">About Page</Nav.Link>
            <Nav.Link as={Link} to="character-search/">Character Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavBar