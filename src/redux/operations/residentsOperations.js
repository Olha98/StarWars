import axios from 'axios';
import residentsActions from '../actions/residentsActions';
import actionsLoader from '../actions/spinnerActions';

const getResidents = (http) => async dispatch => {
  dispatch(actionsLoader.loaderOn());

  dispatch(residentsActions.getResidentsRequest());
  try {
    const response = await axios.get(`${http}`);
    console.log(response, `OPRERATION RES`)
    dispatch(residentsActions.getResidentsSuccess(response));
  } catch (error) {
    dispatch(residentsActions.getResidentsError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default {getResidents};