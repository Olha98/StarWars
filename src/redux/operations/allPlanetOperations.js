import axios from 'axios';
import action from '../actions/allPlanetActions';
import actionsLoader from '../actions/spinnerActions';

const getInfoAllPlanets = () => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(action.getPlanetsRequest());

  try {
    const response = await axios.get(`https://swapi.dev/api/planets/`);
    dispatch(action.getPlanetsSuccess(response.data.results));
  } catch (error) {
    dispatch(action.getPlanetsError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { getInfoAllPlanets };
