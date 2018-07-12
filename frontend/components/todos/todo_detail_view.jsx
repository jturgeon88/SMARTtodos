import React from 'react';

import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {

  render () {
    // todo is passed down from TodoListItem, while removeTodo comes from the container
    const { todo, removeTodo } = this.props;

    return (
      <div>
        <ul>
          <p className="todo-body"><span>Details:   </span>{todo.measure}</p>
          <p className="todo-body"><span>By:   </span>{todo.deadline}</p>
          <p className="todo-body"><span>Notes:   </span>{todo.body}</p >
        </ul>
        <StepListContainer todo_id={todo.id} />
        <button className="delete-button" onClick={ () => removeTodo(todo) }>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
