import { Alert, Button, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';
import queryString from 'query-string';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = event =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText.toLowerCase().trim() }`);
  };

  return (
    <>
      <h1>Search</h1> 
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } aria-label="form">
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <div className="text-end">
              <Button 
                type="submit"
                variant="info" 
                className="text-center mt-2"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <Alert 
            variant="primary" 
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </Alert>
          <Alert 
            aria-label="alert-danger"
            variant="danger" 
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{ q }</b>
          </Alert>

          {
            heroes.map(hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }
        </div>
      </div>
    </>
  );
};