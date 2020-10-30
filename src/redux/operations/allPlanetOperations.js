import axios from 'axios';
import action from '../actions/allPlanetActions';
import actionsLoader from '../actions/spinnerActions';

const getInfoAllPlanets = () => async dispatch => {
  console.log('getInfoAllPlanets')
  dispatch(actionsLoader.loaderOn());

  dispatch(action.getPlanetsRequest());
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/`);
    console.log(response, `ALLOPRERATION RES`)
    dispatch(action.getPlanetsSuccess(response));
  } catch (error) {
    dispatch(action.getPlanetsError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default {getInfoAllPlanets};