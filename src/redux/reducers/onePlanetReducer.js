import onePlanetActions from '../actions/onePlanetActions';


export const onePlanetReducer = (state = [], { type, payload }) => {

  switch (type) {
    case onePlanetActions.getInfoOnePlanetSuccess:
      return [...payload];

    default:
      return state;
  }
};

export default {onePlanetReducer};


