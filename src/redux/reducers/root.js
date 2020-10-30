import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';
import onePlanetReducer from './onePlanetReducer'
import allPlanetReducer from './onePlanetReducer'
import residentsReducer from './residentsReducers'



const root = combineReducers({
  loading: spinnerReducer.loadingReducer, //! names export need
  allPlanet: allPlanetReducer.onePlanetReducer,
  onePlanet: onePlanetReducer.onePlanetReducer,
  residents: residentsReducer.residentsReducer
});

export default root;