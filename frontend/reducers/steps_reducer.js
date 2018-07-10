import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions';

import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach( step => {
        nextState[step.id] = step;
      });
      return nextState;
    case RECEIVE_STEP:
      // modify the step into an object that matches the shape we need:
      const newStep = {[action.step.id]: action.step};
      // merge the newStep with the last state
      return merge({}, state, newStep);
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
}

export default stepsReducer;
