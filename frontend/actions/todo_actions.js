export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


// This action creator lets our reducer know to RESET the list of todos
// to the set of todos (array) provided
// NOTE: ARRAY of todos is passed to this action creator as opposed to an object of todos because that's how
// the BACKEND will send data to our frontend. It will be the job of our reducer to then turn this
// array into an object
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

// Receives a single todo object
export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});
