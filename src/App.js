import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        filterName: "",
        filterStatus: -1, 
      },
      keyword: "",
    };
  }

  onToggle = () => {
    if (this.props.ItemEditing && this.props.ItemEditing.id !== "") {
      console.log(this.props.ItemEditing.id);
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }

    this.props.onClearForm({
      id: "",
      name: "",
      status: false,
    });
  };

  onShowTasks = () => {};

  update = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowTasks();
  };

  filter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        filterName: filterName.toLowerCase(),
        filterStatus: filterStatus,
      },
    });
  };

  search = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };

  render() {
    var { taskEditing } = this.state; //this.state.tasks
    var { isDisplayForm } = this.props;

    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    //   });
    // }

    // if (filter) {
    //   if (filter.filterName) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.filterName) !== -1;
    //     });
    //   }
    // }

    // tasks = tasks.filter((task) =>{
    //   if(filter.filterStatus === '-1'){
    //     return task;
    //   }
    //     return task.status = (filter.filterStatus === "true" ? true :false);

    // })

    var emlShowTaskForm = isDisplayForm ? (
      <TaskForm isDisplay={isDisplayForm} />
    ) : (
      ""
    );

    return (
      <div className="container">
        <div className="text-center text-uppercase font-weight-bold">
          <h3>Quản lý công việc</h3>
        </div>
        {/* Hết Tiêu đề */}
        <hr />
        <br />
        {/* Thêm công việc */}
        <div className="row ">
          {emlShowTaskForm}
          {/* Cuối thêm cv */}
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary text-light"
              onClick={this.onToggle}
            >
              <i className="fa fa-plus" aria-hidden="true">
                &nbsp;Thêm công việc
              </i>
            </button>
            <hr />
            <Control onSearch={this.search} />
            <TaskList onUpdate={this.update} onFilter={this.filter} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    ItemEditing: state.ItemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearForm: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
