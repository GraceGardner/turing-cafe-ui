import React, { Component } from 'react';
import Reservation from './Reservation.js';
import Form from './Form.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({reservations: data}))
  }

  postReservation = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'post',
      body: JSON.stringify({
        name: `${reservation.name}`,
        date: `${reservation.date}`,
        time: `${reservation.time}`,
        number: `${reservation.number}`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  }

  // http://localhost:3001/api/v1/reservations


  cancelReservation = (id) => {
    const updatedReservations =
    this.state.reservations.filter(reservation => {
      if(id !== reservation.id){
        return reservation
      }
    })
    this.setState({reservations: updatedReservations})
  }

  makeReservation = (reservation) => {
    this.setState({reservations: [...this.state.reservations, reservation]})
    this.postReservation(reservation)
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form makeReservation={this.makeReservation}/>
        <Reservation reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
      </div>
    )
  }
}

export default App;
