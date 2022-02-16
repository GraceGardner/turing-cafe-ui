import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      date: undefined,
      time: undefined,
      number: undefined
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  // reserve = (event) => {
  //   event.preventDefault()
  //
  // }

  // reset = () => {
  //
  // }

  render() {
    return(
      <form>
        <input
          type='text'
          id='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
          placeholder='Name'
        >
        </input>
        <input
          type='date'
          id='date'
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
          placeholder='Date (mm/dd)'
        >
        </input>
        <input
          type='time'
          id='time'
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
          placeholder='Time'
        >
        </input>
        <input
          type='number'
          id='number'
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
          placeholder='Number of guests'
        >
        </input>
        <button></button>
      </form>
    )
  }
}

export default Form;


// POST	{name: <String>, date: <String>, time: <String>, number: <Number>}
// makeReservation
