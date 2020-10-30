import residentsActions from '../actions/residentsActions';


const residentsReducer = (state = [], { type, payload }) => {

  switch (type) {
    case residentsActions.getResidentsSuccess:
      return [...payload];

    default:
      return state;
  }
};

export default {residentsReducer};