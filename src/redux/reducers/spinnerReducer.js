import spinnerConstants from "../constants/spinnerConstants";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case spinnerConstants.LOADER_ON:
      return true;
    case spinnerConstants.LOADER_OFF:
      return false;

    default:
      return state;
  }
};

export default { loadingReducer };