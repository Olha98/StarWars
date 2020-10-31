import axios from 'axios';
import actions from '../actions/onePlanetActions';
import actionsLoader from '../actions/spinnerActions';

const getInfoOnePlanet = id => async dispatch => {
  dispatch(actionsLoader.loaderOn());
  dispatch(actions.getInfoOnePlanetRequest());

  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
    console.log(response,"response")
    dispatch(actions.getInfoOnePlanetSuccess(response.data));
  } catch (error) {
    dispatch(actions.getInfoOnePlanetError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default { getInfoOnePlanet };
