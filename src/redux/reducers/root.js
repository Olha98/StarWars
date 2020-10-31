import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';
import onePlanetReducer from './onePlanetReducer';
import allPlanetsReducer from './allPlanetsReducer';

const root = combineReducers({
  loading: spinnerReducer.loadingReducer, 
  allPlanets: allPlanetsReducer.allPlanetsReducer,
  onePlanet: onePlanetReducer.onePlanetReducer
});

export default root;
