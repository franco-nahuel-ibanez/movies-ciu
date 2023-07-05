import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BNavbar expand="lg" className="bg-body-tertiary px-5">
      <Container fluid>
        <BNavbar.Brand href="#">BNavbar scroll</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="navbarScroll" />
        <BNavbar.Collapse id="navbarScroll">
          <Form className="d-flex flex-grow-1 my-2 my-lg-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="vr mx-2"></div>
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;