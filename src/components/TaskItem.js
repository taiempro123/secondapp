import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  };

  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  };

  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "badge badge-success" : "badge badge-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button type="submit" className="btn btn-warning text-light">
            <i
              className="fa fa-pencil"
              aria-hidden="true"
              onClick={this.onEditTask}
            >
              &nbsp;Sửa
            </i>
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger text-light">
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={this.onDelete}
            >
              &nbsp;Xóa
            </i>
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDelete: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
