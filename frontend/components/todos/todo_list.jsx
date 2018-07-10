import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



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
        <TodoForm
          receiveTodo={receiveTodo}
        />
      </div>
    )
  }
}

export default TodoList;
