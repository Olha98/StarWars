import React, { useEffect } from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import onePlanetOperation from '../../../redux/operations/onePlanetOperations';
import residentsOperations from '../../../redux/operations/residentsOperations';
import img from '../../../assets/images/planets/other/mars_planet_PNG23.png';
import { Residents } from '../Residents/Residents';
import css from './PlanetInfo.module.css';


const PlanetInfo = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentPlanet = useSelector(state => state.onePlanet);

  const planetIndx = history.location.pathname.split('/planets/')[1];


  useEffect(() => {
    dispatch(onePlanetOperation.getInfoOnePlanet(planetIndx));
  }, [dispatch, planetIndx]);

  useEffect(() => {
   
    dispatch(residentsOperations.getResidents(currentPlanet.residents));

  }, [dispatch]);


  
//   let requests = currentPlanet.residents?.map(resident => fetch(`${resident}`));
// console.log(requests,"requests")
//   Promise.all(requests)
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(data => data.forEach(person => console.log(person)));

  console.log(useRouteMatch().url); //!

  return (
    <>
      <section className={css.wrapper}>
        <h2 className={css.planetName}>
          <a>{currentPlanet?.name}</a>
        </h2>
        <ul className={css.ListInfoPlanet}>
          <li>Rotation period: {currentPlanet?.rotation_period}</li>
          <li>Climate: {currentPlanet?.climate}</li>
          <li>Diameter:{currentPlanet?.diameter}</li>
          <li>Gravity: {currentPlanet?.gravity}</li>
          <li>Terrain: {currentPlanet?.terrain}</li>
          <li>Population: {currentPlanet?.population}</li>
          <li>
            <Link
              to={{
                pathname: `${useRouteMatch().url}/residents` //!CONTINIUe
              }}
            >
              Show catalog residents
            </Link>
          </li>
        </ul>
        <img src={img} className={css.imgPlanet} />

        <Route
          path={`${useRouteMatch().url}/residents`}
          exact
          render={() => <Residents info={currentPlanet.residents} />}
        />
      </section>
      <Residents />
    </>
  );
};

export default PlanetInfo;
