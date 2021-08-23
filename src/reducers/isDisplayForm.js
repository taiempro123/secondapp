import * as types from "../constants/actionTypes";

var initialState = false;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;
    case types.CLOSE_FORM:
      // state = false;
      return false;
    case types.OPEN_FORM:
      // state = true;
      return true;
    default:
      return state;
  }
};

export default myReducer;
