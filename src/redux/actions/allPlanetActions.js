import constants from '../constants/allPlanetsConstants';

const getPlanetsRequest = () => ({
  type: constants.GET_PLANETS_REQUEST
});

const getPlanetsSuccess = planet => ({
   type: constants.GET_PLANETS_SUCCESS,
  payload: planet
});

const getPlanetsError = error => ({
  type: constants.GET_PLANETS_ERROR,
  payload: error
});

export default { 
  getPlanetsRequest, 
  getPlanetsSuccess, 
  getPlanetsError };