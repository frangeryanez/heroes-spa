import { useMemo } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  // const { id, ...rest } = useParams();
  const onNavigateBack = () => navigate(-1);

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${ id }.jpg` } 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h1>{ hero.superhero }</h1>
        <ListGroup variant="flush">
          <ListGroup.Item><b>Alter Ego:</b> { hero.alter_ego }</ListGroup.Item>
          <ListGroup.Item><b>Publisher:</b> { hero.publisher }</ListGroup.Item>
          <ListGroup.Item><b>First Appearance:</b> { hero.first_appearance }</ListGroup.Item>
        </ListGroup>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>
        <div className="col-12 text-end">
          <Button 
            className="text-center"
            variant="danger"
            onClick={ onNavigateBack }
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};