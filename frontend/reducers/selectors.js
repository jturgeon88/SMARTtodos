
// This selector takes the todos OBJECT from the state and returns a todos ARRAY
export const allTodos = (state) => (
  Object.keys(state.todos).map(id => state.todos[id])
);
