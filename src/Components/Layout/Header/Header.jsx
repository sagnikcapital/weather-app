import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <Navbar bg="dark" expand="lg"> {/* Use React Bootstrap Navbar component */}
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#" disabled>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
  );
}

export default Header;