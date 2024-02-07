import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from'react-router-dom';

function NavbarEB() {
  return (
    <Navbar sticky="top" expand="md" bg="EpicodeTemaColore2" data-bs-theme="dark" id="ebNavbar">
      <Container >
        <Navbar.Brand className='d-flex align-items-center gap-3' href="#home"><img src='../icon.png' className='p-0 m-0' height={"36px"} alt="headerlogo"></img>EpiBook v2</Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className=' text-decoration-none temaLink' to="/">
            <div className='d-flex flex-column justify-content-center h-100'>Home</div>
            </Link>
            <NavDropdown title="Cerca" id="">
              <NavDropdown.Item href="#">Genere</NavDropdown.Item>
              <NavDropdown.Item href="">Prezzo</NavDropdown.Item>
              <NavDropdown.Item href="#">Titolo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Carrello" id="">
            </NavDropdown>
            <Link className=' text-decoration-none temaLink' to="/impostazioni">
            <div className='d-flex flex-column justify-content-center h-100'>Impostazioni</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarEB