import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
    // this.props.onFilter(this.state.filterName,this.state.filterStatus ); không nên setState r gửi
  };

  render() {
    var { filterName, filterStatus } = this.state;

    var { tasks } = this.props; // this.props.tasks

    var emlTaskList = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng Thái</th>
                  <th className="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        name="filterName"
                        value={filterName}
                        onChange={this.onChange}
                        className="form-control"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="filterStatus"
                        value={filterStatus}
                        onChange={this.onChange}
                      >
                        <option value={-1}>Tất cả</option>
                        <option value={1}>Kích hoạt</option>
                        <option value={0}>Ẩn</option>
                      </select>
                    </div>
                  </td>
                  <td></td>
                </tr>
                {emlTaskList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, null)(TaskList);
