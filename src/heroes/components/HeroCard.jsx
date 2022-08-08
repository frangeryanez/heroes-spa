import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
  characters ,
}) => {
  const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  // const charactesByHero =  (<p>{ characters }</p>);

  return (
    <Col md={4} xs={12} className="p-2">
      <Card>
        <Card.Img variant="top" src={ heroImageUrl } alt={ superhero } />
        <Card.Body>
          <Card.Title>{ superhero }</Card.Title>
          <Card.Text>{ alter_ego }</Card.Text>
          <Card.Text>{ first_appearance }</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};