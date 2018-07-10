// The purpose of this component is to allow the presentational component,
// todo_list, to be as lightweight as possible.
// Here we'll map the application state and the Store's dispatch function
// to a set of props that get passed to the presentational component.

import { connect } from 'react-redux';
import TodoList from './todo_list';
// Actions:
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
