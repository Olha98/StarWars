import axios from 'axios';
import onePlanetActions from '../actions/onePlanetActions';
import actionsLoader from '../actions/spinnerActions';

const getInfoOnePlanet = (id) => async dispatch => {
  dispatch(actionsLoader.loaderOn());

  dispatch(onePlanetActions.getInfoOnePlanetRequest());
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
    dispatch(onePlanetActions.getInfoOnePlanetSuccess(response.data));
  } catch (error) {
    dispatch(onePlanetActions.getInfoOnePlanetError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default {getInfoOnePlanet};