import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import css from './Planets.module.css';
import './Planets.module.css';
import services from '../../services/services';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { getImagePlanet } from '../../assets/helperFunction/randomImgPlanet';

function Planets() {
  // const dispatch = useDispatch();
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    resultApiPlanets();
    // resultApiOnePlanets();
  }, []);


  const getPlanets = async data => {
    //Правильно ли так вынимать данные //!
    try {
      let res = await data;
      setPlanets(res);
    } catch (error) {
      console.log(error);
    }
  };



  const resultApiPlanets = () => {
    services.getAllPlanets().then(({ data }) => getPlanets(data.results));
  };



  // const dispatch = useDispatch();
  // const planets = useSelector((state) => state.planets);

  // const getAllPlanets = useCallback(() => {
  //   dispatch(getPlanets());
  // }, [dispatch]);

  // useEffect(() => {
  //   getAllPlanets();
  // }, [getAllPlanets]);


  return (
    <>
      <Wrapper>
        <List>
          {planets.map(planet => 
            <ListItem key={uuidv4()}>
              <img src={getImagePlanet()} alt="planet" width="170px" height="170px" />
                <Link
                  to={{
                    pathname: `planets/planet-info-${planet.name}-${planets.indexOf(planet) + 1}`
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

