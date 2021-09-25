import React, { Component } from "react";

export class addtodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };
   
  onSubmit = (e) => {
    e.preventDefault();
    
this.props.add(this.state.title);
    this.state.title = "";
  };
  render() {
    return (
      <form
        style={{
          display: "flex",
        }}
        onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="add todo here"
          className="addtext"
          value={this.state.title}
          style={{
            flex: "10",
            height: "40px",
          }}
          onChange={this.onChange}
        />{" "}
        <input
          style={{
            flex: "1",
          }}
          type="submit"
          value="add"
          className="addbtn"
        />
      </form>
    );
  }
}

export default addtodo;
