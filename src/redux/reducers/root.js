import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';
import onePlanetReducer from './onePlanetReducer'



const root = combineReducers({
  loading: spinnerReducer.loadingReducer, //! names export need
  // planets:
  onePlanet: onePlanetReducer.onePlanetReducer
});

export default root;