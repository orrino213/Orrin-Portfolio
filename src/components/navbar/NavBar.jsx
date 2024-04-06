import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" fixed="top">
      <Navbar.Brand href="/">Orbel the Loan Officer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          <Nav.Link
            href="https://www.facebook.com/Orbeltheloanofficer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/orbel_the_loan_officer/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
