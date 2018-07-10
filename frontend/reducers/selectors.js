
// This selector takes the todos OBJECT from the state and returns a todos ARRAY
export const allTodos = (state) => (
  Object.keys(state.todos).map(id => state.todos[id])
);

// Allows components to get the steps as an array
export const stepsByTodoId = ({ steps }, todo_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
  })
  return stepsByTodoId;
};
