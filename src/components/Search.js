

import React, { Component } from "react";

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }


  render() {
    var {keyword} = this.state;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="keyword"
            id="search"
            value ={keyword}
            onChange={this.onChange}
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-append">
            <button
              type="button"
              className="btn btn-primary text-light"
              onClick= {this.onSearch}
            >
              <i className="fa fa-search" aria-hidden="true">
                &nbsp; Tìm kiếm
              </i>
            </button>
          </span>
        </div>
      </div>

    );
  }
}

export default Search;
