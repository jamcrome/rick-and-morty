import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <Navbar 
      sticky="top" 
      expand="sm" 
      className="bg-body-tertiary ">
      <Container className="m-0">
        <Navbar.Brand as={Link} to="/" className="text-xl font-semibold">The RickMortiest Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="">
            <Nav.Link as={Link} to="/" className="hover:text-blue-500">Home</Nav.Link>
            <Nav.Link as={Link} to="about/" className="hover:text-blue-500">About</Nav.Link>
            <Nav.Link as={Link} to="character-search/" className="hover:text-blue-500">Characters</Nav.Link>
            <Nav.Link as={Link} to="favorite-characters/" className="hover:text-blue-500">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavBar