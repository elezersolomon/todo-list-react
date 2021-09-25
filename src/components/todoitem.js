import React, { Component } from "react";
import propTypes from "prop-types";

export class todoitem extends Component {
  getstyle = () => {
    return {
      backgroundColor: "gray",
      color: "blue",
      marginTop: "5px",

      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getstyle()}>
        <h1>
          <input
            type="checkbox"
            onChange={this.props.makecomplete.bind(this, id)}
          />{" "}
          {title}{" "}
          <button
            onClick={this.props.deletetodo.bind(this, id)}
            style={btnstyle}
          >
            {" "}
            x{" "}
          </button>{" "}
        </h1>
      </div>
    );
  }
}

const btnstyle = {
  backgroundColor: "red",
  border: "none",
  float: "right",
  fontSize: "25px",
  marginTop: "10px",
};
var styleitem = {
  backgroundColor: "gray",
};
todoitem.propTypes = {
  todo: propTypes.object.isRequired,
};
export default todoitem;
