import action from '../actions/allPlanetActions';

const onePlanetReducer = (state = [], { type, payload }) => {
  console.log(payload, 'payload');
  switch (type) {
    case action.GET_PLANETS_SUCCESS:
      return [...payload];

    default:
      return state;
  }
};

export default { onePlanetReducer };
