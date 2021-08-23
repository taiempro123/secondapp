import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  };

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onClear = () => {
    // this.setState({
    //   name: "",
    //   status: false,
    // });
  };

  componentDidMount() {
    if (this.props.ItemEditing) {
      this.setState({
        id: this.props.ItemEditing.id,
        name: this.props.ItemEditing.name,
        status: this.props.ItemEditing.status,
      });
    }
  }

  render() {
    var { isDisplayForm } = this.props;
    var { id } = this.state;

    if (!isDisplayForm) return null;
    return (
      <div
        className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
      >
        <div className="card">
          <div className="card-header bg-warning">
            <h3 className="card-title text-light text-left ">
              {id ? "Chỉnh sửa công việc" : "Thêm công việc"}
              <span
                className="fa fa-times-circle text-right text-danger ml-4"
                onClick={this.onCloseForm}
              ></span>
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label className="font-weight-bold">Tên:</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  className="form-control"
                  placeholder="Nhập tên"
                />
              </div>

              <div className="form-group">
                <label className="font-weight-bold">Trạng thái:</label>
                <select
                  className="custom-select"
                  name="status"
                  id="status"
                  value={this.state.status}
                  onChange={this.onChange}
                >
                  <option value="true">Kích hoạt</option>
                  <option value="false">Ẩn</option>
                </select>
              </div>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning text-light">
                  <i className="fa fa-plus" aria-hidden="true">
                    &nbsp;Lưu lại
                  </i>
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger text-light">
                  <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={this.onClear}
                  >
                    &nbsp;Hủy
                  </i>
                </button>
              </div>
            </form>
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
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
