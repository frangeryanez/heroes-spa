import { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Collapsible = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    
    navigate('/login', {
      replace: true
    });
  };

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
          <NavLink 
            to="/search"
            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
          >
            Search
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link>{ user?.name }</Nav.Link>
          <Button 
            variant="outline-light"
            onClick={ onLogout }
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};