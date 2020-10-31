import constants from '../constants/spinnerConstants';

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case constants.LOADER_ON:
      return true;
    case constants.LOADER_OFF:
      return false;

    default:
      return state;
  }
};
