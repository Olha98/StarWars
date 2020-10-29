import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import services from '../../services/services';
import planet2 from '../../assets/images/planets/55b8655f6eb92e0827747badf5bea873_w200.gif';
import { Link, withRouter } from 'react-router-dom';
import PlanetInfo from './PlanetInfo';

function Planets(props) {
  //  const MaineState ={
  //   indexPlanet:null
  //  }
  const [planets, setPlanets] = useState([]);
  // const [onePlanet, setOnePlanet] = useState({});


  useEffect(() => {
    resultApiPlanets();
    resultApiOnePlanets();
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
    //!What better calls this fun?
    services.getAllPlanets().then(({ data }) => getPlanets(data.results));
  };

  const hendelClick = event => {
    const chooseNamePlanet = event.target.innerText;
    const index = planets.findIndex(planet => planet.name === chooseNamePlanet);
    const correctIndex = Number(index) + 1;
    if (index !== -1) {
      resultApiOnePlanets(correctIndex);
    } else {
      console.log('Not faund yoer planet'); //! Need correct this decision and needed such condition ?
    }
  };

  

  const resultApiOnePlanets = (id) => {
      services.getinfoOnePlanet(id).then(( data ) => console.log(data)); //!two times write asyn/await(services and here...)
     //! не могу передать в

  };

  return (
    <Wrapper>
      <List>
        {planets.map(planet => 
          <ListItem key={uuidv4()}>
            <img src={planet2} alt="planet" width="150px" height="150px" />
            <button type="button" onClick={hendelClick}>
              <Link
                to={{
                  pathname: `planets/planet-info-${planet.name}`,
                  // eslint-disable-next-line react/prop-types
                  state: { from: props.location } //!
                }}
              >
                {planet.name}
              </Link>
            </button>
            <p>Climate:{planet.climate}</p>
            <p>Population:{planet.population}</p>
          </ListItem>
        )}
      </List>
      <PlanetInfo /> 
    </Wrapper>
  );
}
//! как без редакса передать ? инфу 81 string
export default withRouter(Planets);
const Wrapper = styled.div`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5%;
`;

