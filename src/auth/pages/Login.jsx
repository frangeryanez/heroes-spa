import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    })
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