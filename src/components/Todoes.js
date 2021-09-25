import React, {
  Component
} from 'react';
import Todoitem from './todoitem';
import {
  render
} from 'react-dom';
import propTypes from 'prop-types';

class Todoes extends Component {

  render() {
    return this.props.todo.map((todo) => (

      <
      Todoitem key = {
        todo.id
      }
      todo = {
        todo
      }
      deletetodo = {
        this.props.deletetodo
      }
      makecomplete = {
        this.props.makecomplete
      }
      />
    ))


  }

}    
Todoes.propTypes = {
  todo: propTypes.array.isRequired
}
export default Todoes;