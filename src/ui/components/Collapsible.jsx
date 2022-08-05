import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Collapsible = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-2 ps-3 pl-3">
      <Navbar.Brand href="/">Heroes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink
            to="/marvel"
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
          >
            Marvel
          </NavLink>
          <NavLink 
            to="/dc"
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
          >
            DC
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link>username</Nav.Link>
          <NavLink 
            to="/login"
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
          >
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};