import { combineReducers } from 'redux';
import { loadingReducer } from './spinnerReducer';
import { onePlanetReducer } from './onePlanetReducer';
import { allPlanetsReducer } from './allPlanetsReducer';

const root = combineReducers({
  loading: loadingReducer,
  allPlanets: allPlanetsReducer,
  onePlanet: onePlanetReducer
});

export default root;
