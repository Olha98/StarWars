import onePlanetActions from '../actions/onePlanetActions';

const initialState = {
  choosePlanet: []
};

const onePlanetReducer = (state = initialState, action) => {
  console.log(action.payload , 'action.payload');
  switch (action.type) {
    case onePlanetActions.getInfoOnePlanetSuccess:
      return { ...action.payload };

    default:
      return state;
  }
};

export default {onePlanetReducer};
