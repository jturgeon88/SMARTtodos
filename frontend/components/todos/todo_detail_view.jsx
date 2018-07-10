import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    // Where do I get todo from? I need to pass this down from TodoListItem
    const { todo, removeTodo } = this.props;

    return (
      <div>
        <ul>
          <li>{todo.body}</li>
          <li>{todo.measure}</li>
          <li>{todo.deadline}</li>
        </ul>
        <button onClick={() => removeTodo(todo)}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
