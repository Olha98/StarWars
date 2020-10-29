import spinnerConstants from "../constants/spinnerConstants";

const loaderOn = () => ({
  type: spinnerConstants.LOADER_ON
});

const loaderOff = () => ({
  type: spinnerConstants.LOADER_OFF
});

export default {
  loaderOn,
  loaderOff
};