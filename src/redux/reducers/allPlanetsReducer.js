import allPlanetsConstants from '../constants/allPlanetsConstants';

const allPlanetsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case allPlanetsConstants.GET_PLANETS_SUCCESS:
      return [...payload];

    default:
      return state;
  }
};

export default { allPlanetsReducer };
