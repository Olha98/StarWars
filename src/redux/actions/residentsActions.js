import residentsConstants from '../constants/residentsConstants';

const getResidentsRequest = () => ({
  type: residentsConstants.GET_RESIDENTS_REQUEST
});

 const getResidentsSuccess = (residents) => {
  console.log(residents,"residents")
  return {
    type: residentsConstants.GET_RESIDENTS_SUCCESS,
    payload: residents
  }

};

const getResidentsError = error => ({
  type: residentsConstants.GET_RESIDENTS_ERROR,
  payload: error
});

export default { 
  getResidentsRequest, 
  getResidentsSuccess, 
  getResidentsError };