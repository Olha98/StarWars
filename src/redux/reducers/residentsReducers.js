import residentsConstants from '../constants/residentsConstants';


const residentsReducer = (state = {}, { type, payload }) => {
  // console.log(payload,"payload")
  switch (type) {
    case residentsConstants.GET_RESIDENTS_SUCCESS:
      return {...payload};

    default:
      return state;
  }
};

export default {residentsReducer};