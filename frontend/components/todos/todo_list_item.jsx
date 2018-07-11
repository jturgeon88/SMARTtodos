import React from 'react';
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleTodo(e) {
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
    const { todo, receiveTodo } = this.props;
    const { title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo} />
    }
    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a onClick={this.toggleDetail}>{title}</a></h3>
          <button
            onClick={this.toggleTodo}
            className={ done ? "done" : "undone" }>{ done ? "Undo" : "Done" }</button>
        </div>
        { detail }
      </li>
    );
  }
}


export default TodoListItem;
