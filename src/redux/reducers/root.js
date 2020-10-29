import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';



const root = combineReducers({
  loading: spinnerReducer.loadingReducer, //! names export need
  onePlanet: []
});

export default root;