import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Residents } from '../Residents/Residents';
import onePlanetOperation from '../../../redux/operations/onePlanetOperations';

import css from './PlanetInfo.module.css';
import CustomScrollbars from '../../Scroll/Scroll';
import {getStaticImagePlanet} from '../../../assets/helperFunction/randomImgPlanet'

const PlanetInfo = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentPlanet = useSelector(state => state.onePlanet);
  
  const planetIndx = history.location.pathname.split('/planets/')[1];

  useEffect(() => {
    dispatch(onePlanetOperation.getInfoOnePlanet(planetIndx));
  }, [dispatch, planetIndx]);

  return (
    <>
    <CustomScrollbars style={{ height: 620, top: 10 }}>
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
        </ul>
        <p className={css.title}>Catalog residents</p>
        <img src={getStaticImagePlanet()} className={css.imgPlanet} />
      </section>
      <Residents apiResidents={currentPlanet.residents}/>
     </CustomScrollbars>
    </>
  );
};

export default PlanetInfo;
