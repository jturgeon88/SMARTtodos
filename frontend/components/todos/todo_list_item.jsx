import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);

    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo (e) {
    e.preventDefault();
    // Merge the current todo with a toggled "done" property:
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );

    // Now that we have a toggledTodo, receive that todo:
    this.props.receiveTodo(toggledTodo);
  }

  render () {
    const { todo, removeTodo, receiveTodo } = this.props;
    const { title, done } = todo;
    return (
      <li>
        {title}
        <button onClick={() => removeTodo(todo)}>Delete</button>
        <button
          onClick={this.toggleTodo}
          className={ done ? "done" : "undone" }>{done ? "Undo" : "Done"}</button>
      </li>
    )
  }
}


export default TodoListItem;
