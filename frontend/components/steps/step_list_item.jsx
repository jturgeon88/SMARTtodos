import React from 'react';
import merge from 'lodash/merge';
// The presentational component should render:
// The step's title
// The step's body
// Buttons to toggle and remove the step

class StepListItem extends React.Component {
  constructor (props) {
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();
    // Merge the current step with a toggled "done" property:
    const toggledStep = merge(
      {},
      this.props.step,
      { done: !this.props.step.done }
    );

    // Now that we have a toggledStep, receive that step:
    this.props.receiveStep(toggledStep);
  }


  render () {
    // step gets passed down from the StepList component
    const { step, receiveStep, removeStep } = this.props;
    const { title, done } = step;
    return(
      <li>
        <h3>{title}</h3>
        <button
          onClick={this.toggleStep}
          className={ done ? "done" : "undone" } >{ done ? "Undo" : "Done" }</button>
        <button onClick={() => removeStep(step)}>Delete Step</button>
      </li>
    );
  }
}

export default StepListItem;
