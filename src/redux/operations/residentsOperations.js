import axios from 'axios';
import residentsActions from '../actions/residentsActions';
import actionsLoader from '../actions/spinnerActions';

const getResidents = (residents) => async dispatch => {
  
  dispatch(actionsLoader.loaderOn());
  dispatch(residentsActions.getResidentsRequest());
  try {
    
    const requests = await residents.map(resident => axios.get(`${resident}`));
    await Promise.all(requests)
    .then(responses => Promise.all(responses.map(res => dispatch(residentsActions.getResidentsSuccess(res.data)))))
   
    // 

  } catch (error) {
    dispatch(residentsActions.getResidentsError(error));
  } finally {
    dispatch(actionsLoader.loaderOff());
  }
};

export default {getResidents};