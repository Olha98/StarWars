import residentsConstants from '../constants/residentsConstants';

const getResidentsRequest = () => ({
  type: residentsConstants.GET_RESIDENTS_REQUEST
});

const getResidentsSuccess = planet => ({
   type: residentsConstants.GET_RESIDENTS_SUCCESS,
  payload: planet
});

const getResidentsError = error => ({
  type: residentsConstants.GET_RESIDENTS_ERROR,
  payload: error
});

export default { 
  getResidentsRequest, 
  getResidentsSuccess, 
  getResidentsError };