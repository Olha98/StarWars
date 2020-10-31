import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';
import onePlanetReducer from './onePlanetReducer';
import allPlanetsReducer from './allPlanetsReducer';
import residentsReducer from './residentsReducers';

const root = combineReducers({
  loading: spinnerReducer.loadingReducer, //! names export need
  allPlanets: allPlanetsReducer.allPlanetsReducer,
  onePlanet: onePlanetReducer.onePlanetReducer,
  residents: residentsReducer.residentsReducer
});

export default root;
