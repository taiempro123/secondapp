import * as types from "../constants/actionTypes";

var initialState = {
  id: "",
  name: "",
  status: false,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      console.log(action.task.id);
      return action.task;
    default:
      return state;
  }
};

export default myReducer;
