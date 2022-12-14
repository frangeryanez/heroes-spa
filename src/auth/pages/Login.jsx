import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    
    login('Matt Matts');
    navigate(lastPath, {
      replace: true
    });
  };

  return (
    <Container>
      <h1>Login</h1>
      <hr />
      <Button 
        variant="success"
        onClick={ onLogin }
      >
        Login
      </Button>
    </Container>
  );
};