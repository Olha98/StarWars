import onePlanetConstants from '../constants/onePlanetConstants';

const onePlanetReducer = (state = {}, { type, payload }) => {

  switch (type) {
    case onePlanetConstants.GET_ONE_PLANET_SUCCESS:
      return { ...payload };

    default:
      return state;
  }
};

export default { onePlanetReducer };
