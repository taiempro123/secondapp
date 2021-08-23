import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* tim kiem */}
        <Search onSearch = {this.props.onSearch}/>
        {/* sap xep */}
        <Sort />
      </div>
    );
  }
}

export default Control;
