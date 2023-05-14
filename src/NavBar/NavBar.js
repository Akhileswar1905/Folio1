import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const paths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact Me",
    path: "/contact",
  },
];

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Container className="nav">
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="list">
            {paths.map((path) => (
              <Nav.Link eventKey={2}>
                <NavLink className={"link"} to={path.path}>
                  {path.name}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
