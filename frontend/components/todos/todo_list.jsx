import React from 'react';
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo } = this.props;
    const ListOfTodos = todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        receiveTodo={receiveTodo}
      />
      )
    );
    return (
      <div>
        <ul>
          {ListOfTodos}
        </ul>
      </div>
    )
  }
}

export default TodoList;
