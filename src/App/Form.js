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

  reserve = (event) => {
    event.preventDefault()
    const reservation = this.state
    this.props.makeReservation(reservation);
    this.reset()
  }

  reset = () => {
    this.setState({
      name: '',
      date: undefined,
      time: undefined,
      number: undefined
    })
  }

  render() {
    return(
      <form>
        <input
          className='name-input'
          type='text'
          id='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
          placeholder='Name'
        >
        </input>
        <input
          className='date-input'
          type='date'
          id='date'
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
          placeholder='Date (mm/dd)'
        >
        </input>
        <input
          className='time-input'
          type='time'
          id='time'
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
          placeholder='Time'
        >
        </input>
        <input
          className='number-input'
          type='number'
          id='number'
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
          placeholder='Number of guests'
        >
        </input>
        <button
          className='reservation-button'
          onClick={(event) => this.reserve(event)}
        >
          Make Reservation
        </button>
      </form>
    )
  }
}

export default Form;


// POST	{name: <String>, date: <String>, time: <String>, number: <Number>}
// makeReservation
