import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarEB() {
  return (
    <Navbar sticky="top" expand="md" bg="EpicodeTemaColore2" data-bs-theme="dark" id="ebNavbar">
      <Container >
        <Navbar.Brand className='d-flex align-items-center gap-3' href="#home"><img src='../icon.png' className='p-0 m-0' height={"36px"} alt="headerlogo"></img>EpiBook v2</Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Cerca" id="">
              <NavDropdown.Item href="#">Genere</NavDropdown.Item>
              <NavDropdown.Item href="">Prezzo</NavDropdown.Item>
              <NavDropdown.Item href="#">Titolo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Carrello" id="">
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarEB