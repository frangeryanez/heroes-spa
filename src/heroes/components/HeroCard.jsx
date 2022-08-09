import { Button, Card, Col } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
  return ( alter_ego === characters )
   ? <></>
   : <p>{ characters }</p>;
};

export const HeroCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/hero/${id}`, {
      replace: true
    });
  };

  return (
    <Col md={4} xs={12} className="p-2">
      <Card>
        <Card.Img variant="top" src={ heroImageUrl } alt={ superhero } />
        <Card.Body>
          <Card.Title>{ superhero }</Card.Title>
          <Card.Text>{ alter_ego }</Card.Text>
          <Card.Text>
            <CharactersByHero characters={ characters } alter_ego={ alter_ego } />
          </Card.Text>
          <footer className="blockquote-footer mt-2">
            { first_appearance }
          </footer>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button 
            variant="success" 
            className="text-center"
            onClick={ onClick }
          >
            More Info
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};