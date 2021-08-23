import * as types from "./../constants/actionTypes";

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring();
};
// tạo iD cho task
var generateID = () => {
  return s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4();
};
//tìm vị trí của phần tử
var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });

  return result;
};
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var index,
  id = -1;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    //hiển thị tất cả các task
    case types.LIST_ALL:
      return state;
    ///// thêm và sửa task
    case types.SAVE_TASK:
      id = action.task.id;
      if (id) {
        index = findIndex(state, id);
        state[index] = action.task;
      } else {
        var newTask = {
          id: generateID(),
          name: action.task.name,
          status: action.task.status,
        };
        state.push(newTask);
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // clone ra trước 1 mảng và trả về tránh tình trang tham chiếu
    ///// cập nhật status
    case types.UPDATE_STATUS_FORM:
      id = action.id;
      index = findIndex(state, id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          status: !state[index].status,
        };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];
    /// xóa task
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
