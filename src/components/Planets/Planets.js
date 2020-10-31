import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { getImagePlanet } from '../../assets/helperFunction/randomImgPlanet';
import operations from '../../redux/operations/allPlanetOperations';
import CustomScrollbars from '../Scroll/Scroll';
import Spinner from '../Spinner/Spinner';
import styled from './Planets.module.css';

function Planets() {
  const dispatch = useDispatch();
  const planets = useSelector(state => state.allPlanets);
  const isLoading = useSelector(state => state.loading);

  const getAllPlanets = useCallback(() => {
    dispatch(operations.getInfoAllPlanets());
  }, [dispatch]);

  useEffect(() => {
    getAllPlanets();
  }, [getAllPlanets]);

  return (
    <CustomScrollbars style={{ height: 620, top: 10 }}>
      {isLoading && <Spinner />}
      <div className={styled.wrapper}>
        <ul className={styled.list}>
          {planets &&
            planets.map(planet => 
              <li key={uuidv4()} className={styled.listItem}>
                <img src={getImagePlanet()} alt="planet" width="170px" height="170px" />
                <Link
                  to={{
                    pathname: `planets/${planets.indexOf(planet) + 1}`
                  }}
                  className={styled.btnListPlanets}
                >
                  {planet.name}
                </Link>
                <p>
                  Climate:<span>{planet.climate}</span>
                </p>
                <p>
                  Population:<span>{planet.population}</span>
                </p>
              </li>
            )}
        </ul>
      </div>
    </CustomScrollbars>
  );
}

export default Planets;
