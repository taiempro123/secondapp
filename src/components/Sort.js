import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="sort"
            data-toggle="dropdown"
            aria-expanded="true"
          >
            Sắp xếp
          </button>

          <div className="dropdown-menu " aria-labelledby="sort">
            <div className="dropdown-header">Sắp xếp theo tên</div>
            <li className="text-center">
              <a className=" dropdown-item active" href="true">
                <i className="fa fa-sort-alpha-asc" aria-hidden="true">
                  &nbsp;Tên A-Z
                </i>
              </a>
            </li>
            <li className="text-center">
              <a className="dropdown-item" href="true">
                <i className="fa fa-sort-alpha-desc" aria-hidden="true">
                  &nbsp;Tên Z-A
                </i>
              </a>
            </li>
            ``
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">Sắp xếp theo trạng thái</div>
            <li className="text-center">
              <a className="dropdown-item" href="true">
                Kích hoạt
              </a>
            </li>
            <li className="text-center">
              <a className="dropdown-item" href="true">
                Ẩn
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
