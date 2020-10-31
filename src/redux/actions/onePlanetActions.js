import constants from '../constants/onePlanetConstants';

const getInfoOnePlanetRequest = () => ({
  type: constants.GET_ONE_PLANET_REQUEST
});

const getInfoOnePlanetSuccess = planet => ({
  type: constants.GET_ONE_PLANET_SUCCESS,
  payload: planet
});

const getInfoOnePlanetError = error => ({
  type: constants.GET_ONE_PLANET_ERROR,
  payload: error
});

export default {
  getInfoOnePlanetRequest,
  getInfoOnePlanetSuccess,
  getInfoOnePlanetError
};
