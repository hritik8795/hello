import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <div className='brand'>
          <Navbar.Brand href="#home">Globe</Navbar.Brand>
          </div>
          <div className='right'>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Signup</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
          </div>

        </Container>
      </Navbar>

      <br />
      
    </div>
  );
}

export default Navbars;