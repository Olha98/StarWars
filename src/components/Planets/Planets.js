import React, { useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getImagePlanet } from '../../assets/helperFunction/randomImgPlanet';
import allPlanetOperations from '../../redux/operations/allPlanetOperations'

import styled from 'styled-components';
import css from './Planets.module.css';
import './Planets.module.css';

function Planets() {

  const dispatch = useDispatch();
  const planets = useSelector((state) => state.allPlanets); 

  const getAllPlanets = useCallback(() => {
    dispatch(allPlanetOperations.getInfoAllPlanets());
  }, [dispatch]);

  useEffect(() => {
    getAllPlanets();
  }, [getAllPlanets]);

  return (
    <>
      <Wrapper>
        <List>
          {planets && planets.map(planet => 
            <ListItem key={uuidv4()}>
              <img src={getImagePlanet()} alt="planet" width="170px" height="170px" />
                <Link
                  to={{
                    pathname: `planets/${planets.indexOf(planet) + 1}`
                  }}
                  className={css.btnListPlanets}
                >
                  {planet.name}
                </Link>
             
              <Paragraph>
                Climate:<span>{planet.climate}</span>
              </Paragraph>
              <Paragraph>
                Population:<span>{planet.population}</span>
              </Paragraph>
            </ListItem>
          )}
        </List>
      </Wrapper>
    </>
  );
}

export default Planets;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const List = styled.ul`
  margin-top: 5%;
  margin-left: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 90%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2%;
  padding: 2em;
  background: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
  border-radius: 10px;

  & img {
    display: flex;
    border-radius: 52%;

    padding: 4%;
  }
`;

const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  margin: 2%;
`;

