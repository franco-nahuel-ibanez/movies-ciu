import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { House, Star, CameraReelsFill } from 'react-bootstrap-icons'

const Navbar = () => {
  return (
    <BNavbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <BNavbar.Brand>
          <Link to="/" className="navbar-brand">
            <CameraReelsFill className="me-2" size={30}/>
            Parcial-Movies
          </Link>  
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">
                <House className="me-2" />
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/favoritas" className="nav-link">
                <Star className="me-2" />
                Favoritas
              </Link>
            </Nav.Item>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;