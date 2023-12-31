import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/' >ChickenFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            <NavDropdown title="productos" id="basic-nav-dropdown">
              <NavDropdown.Item as= {NavLink} to='/category/pepitos'>pepitos</NavDropdown.Item>
              <NavDropdown.Item as= {NavLink} to='/category/milka'>
                milka
              </NavDropdown.Item>
              <NavDropdown.Item as= {NavLink} to='/category/girasol'>girasol</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink style= {{textDecoration:'none'}} to='/cart'><CartWidget/></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;