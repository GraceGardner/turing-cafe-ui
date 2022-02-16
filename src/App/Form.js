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

  
}

export default Form;


// POST	{name: <String>, date: <String>, time: <String>, number: <Number>}
// makeReservation
