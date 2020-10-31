import constants from '../constants/allPlanetsConstants';

export const allPlanetsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case constants.GET_PLANETS_SUCCESS:
      return [...payload];

    default:
      return state;
  }
};
