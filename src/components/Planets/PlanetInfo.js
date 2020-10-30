import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import onePlanetAction from '../../redux/actions/onePlanetActions';
import onePlanetOperation from '../../redux/operations/onePlanetOperations'

import img from '../../assets/images/planets/other/mars_planet_PNG23.png';
import css from './PlanetInfo.module.css'
import { useHistory } from 'react-router-dom';

const PlanetInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const planet = {
    climate: 'arid',
    created: '2014-12-09T13:50:49.641000Z',
    diameter: '10465',
    edited: '2014-12-20T20:58:18.411000Z',
    films: [
      'http://swapi.dev/api/films/1/',
      'http://swapi.dev/api/films/3/',
      'http://swapi.dev/api/films/4/',
      'http://swapi.dev/api/films/5/',
      'http://swapi.dev/api/films/6/'
    ],
    gravity: '1 standard',
    name: 'Tatooine',
    orbital_period: '304',
    population: '200000',
    residents: [
      'http://swapi.dev/api/people/1/',
      'http://swapi.dev/api/people/2/',
      'http://swapi.dev/api/people/4/',
      'http://swapi.dev/api/people/6/',
      'http://swapi.dev/api/people/7/',
      'http://swapi.dev/api/people/8/',
      'http://swapi.dev/api/people/9/',
      'http://swapi.dev/api/people/11/',
      'http://swapi.dev/api/people/43/',
      'http://swapi.dev/api/people/62/'
    ],
    rotation_period: '23',
    surface_water: '1',
    terrain: 'desert',
    url: 'http://swapi.dev/api/planets/1/'
  };
  const history = useHistory();
  const dispatch = useDispatch();
  // const currentPlanet = useSelector((state) => state.currentPlanet);

  const planetIndx = history.location.pathname.split("/planets/")[1];
  
  useEffect(() => {
    dispatch(onePlanetOperation.getInfoOnePlanet(planetIndx));
  }, [dispatch, planetIndx]);

  return (
    <section className={css.wrapper}>
      <h2 className={css.planetName}><a>{planet.name}</a></h2>
      <ul className={css.ListInfoPlanet}>
        <li>Rotation period: {planet.rotation_period}</li>
        <li>Climate: {planet.climate}</li>
        <li>Diameter:{ planet.diameter}</li>
        <li>Gravity: {planet.gravity}</li>
        <li>Terrain: {planet.terrain}</li>
        <li>Population: {planet.population}</li>
        <li>Residents: {planet.residents.length}</li>
      </ul>
      <img src={img} className={css.imgPlanet} />
      
    </section>
  );
};

export default PlanetInfo;
