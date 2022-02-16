import React, { Component } from 'react';
import Reservation from './Reservation.js';
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

  cancelReservation = (id) => {
    const updatedReservations =
    this.state.reservations.filter(reservation => {
      if(id !== reservation.id){
        return reservation
      }
    })
    this.setState({reservations: updatedReservations})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservation reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
      </div>
    )
  }
}

export default App;
