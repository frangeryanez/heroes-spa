import { useMemo } from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(
    () => getHeroesByPublisher(publisher), [publisher]);

  return (
    <ListGroup variant="flush">
      <Row>
        {heroes.map(hero => (
          <HeroCard 
            key={ hero.id } 
            { ...hero } 
          />
        ))}
      </Row>
    </ListGroup>
  );
};