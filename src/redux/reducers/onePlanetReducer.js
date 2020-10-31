import constants from '../constants/onePlanetConstants';

export const onePlanetReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case constants.GET_ONE_PLANET_SUCCESS:
      return { ...payload };

    default:
      return state;
  }
};
