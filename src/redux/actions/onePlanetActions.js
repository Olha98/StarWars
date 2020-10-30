import onePlanetConstants from '../constants/onePlanetConstants';

const getInfoOnePlanetRequest = () => ({
  type: onePlanetConstants.GET_ONE_PLANET_REQUEST
});

const getInfoOnePlanetSuccess = id => {
console.log(id,"Action id")
  return{
    type: onePlanetConstants.GET_ONE_PLANET_SUCCESS,
    payload: id
  }
}

const getInfoOnePlanetError = error => ({
  type: onePlanetConstants.GET_ONE_PLANET_ERROR,
  payload: error
});

export default { 
  getInfoOnePlanetRequest, 
  getInfoOnePlanetSuccess, 
  getInfoOnePlanetError };
