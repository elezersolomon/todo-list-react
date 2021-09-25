import React, { Component } from "react";
import Todoes from "./components/Todoes";
import Header from "./components/header";
import Addtodo from "./components/addtodo";
import about from "./components/pages/about"
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {v4 as uuid} from "uuid"; 
import "./App.css";

class App extends Component {
  state = {
    todo1: [
      {
        id:uuid(),
        title: "code",
        completed: false,
      },
      {
        id: uuid() ,
        title: "study",
        completed: false,
      },
    ],
  };
  makecomplete = (id) => {
    this.setState({
      todo: this.state.todo1.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deletetodo = (id) => {
    this.setState({
      todo1: [...this.state.todo1.filter((todo) => todo.id !== id)],
    });
  };
  add = (title) => {
    const newtodo={
      id: uuid(),
      title,
      completed: false,
    }
    this.setState({todo1:[...this.state.todo1,newtodo]})
  };
  render() {
    return (
      <Router>
      <div>
      <Header/>
        <Route  exact path='/'    render={props =>(
          <React.Fragment>

        <Addtodo add={this.add} />
        <Todoes
          todo={this.state.todo1}
          deletetodo={this.deletetodo}
          makecomplete={this.makecomplete}
        />
          </React.Fragment>
        )}/>
        <Route path="/about"  component={about}/>
        
      </div>
      </Router>
    );
  }
}

export default App;
