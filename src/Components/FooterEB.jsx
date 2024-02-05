import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function FooterEB() {
  return (
    <Navbar fixed="bottom" expand="md" bg="EpicodeTemaColore2" data-bs-theme="dark"  className="">
      <Container>
        <Navbar.Brand href="#home">EpiBook</Navbar.Brand>
          <Navbar.Text>
            Versione W2U3
          </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default FooterEB