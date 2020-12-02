import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Mytable extends Component {
  render() {
    return (
      <div className="container">
        <ReactTable
        data = {}
        columns =  {}
        defaultPageSize = {}
        pageSizeOptions = {[2,4,6,8,10]}
         />
      </div>
    );
  }
}

export default Mytable;
