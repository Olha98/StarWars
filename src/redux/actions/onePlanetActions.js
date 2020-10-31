import onePlanetConstants from '../constants/onePlanetConstants';

const getInfoOnePlanetRequest = () => ({
  type: onePlanetConstants.GET_ONE_PLANET_REQUEST
});

const getInfoOnePlanetSuccess = planet => ({
  type: onePlanetConstants.GET_ONE_PLANET_SUCCESS,
  payload: planet
});

const getInfoOnePlanetError = error => ({
  type: onePlanetConstants.GET_ONE_PLANET_ERROR,
  payload: error
});

export default {
  getInfoOnePlanetRequest,
  getInfoOnePlanetSuccess,
  getInfoOnePlanetError
};
