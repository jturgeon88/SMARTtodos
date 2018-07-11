// FORM TO ALLOW USERS TO CREATE NEW TODOS
import React from 'react';
import { uniqueId } from '../../util/id_generator'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      measure: '',
      deadline: '',
      body: '',
      done: false
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId(), title: this.state.title, body: this.state.body });
    this.props.receiveTodo(todo);
    // after we receiveTodo, we need to reset the form to blank:
    this.setState({
      title: '',
      measure: '',
      deadline: '',
      body: ''
    })

  }

  render () {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}
            required
          />
        </label>
        <label>How much?:
          <input
            className="input"
            ref="measure"
            value={this.state.measure}
            placeholder="2 gallons"
            onChange={this.update('measure')}
            required
          />
        </label>
        <label>Deadline:
          <input
            className="input"
            ref="deadline"
            value={this.state.deadline}
            placeholder="by May 5th"
            onChange={this.update('deadline')}
            required
          />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            placeholder="go to Costco it's cheaper there"
            onChange={this.update('body')}
            required></textarea>
        </label><br/>
        <input type="checkbox" name="specific" value="Specific" required/>This todo is Specific<br/>
        <input type="checkbox" name="measureable" value="Measureable" required/>This todo is Measureable<br/>
        <input type="checkbox" name="achievable" value="Achievable" required/>This todo is Achievable<br/>
        <input type="checkbox" name="realistic" value="Realistic" required/>This todo is Realistic<br/>
        <input type="checkbox" name="time-bound" value="Time-bound" required/>This todo is Time-Bound<br/>
        <button className="create-button">Create Smart Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
