import React, { Component } from 'react';
import {getData, deleteReservation, postReservation} from '../apiCalls.js'
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
    getData()
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
    deleteReservation(id)
  }

  makeReservation = (reservation) => {
    this.setState({reservations: [...this.state.reservations, reservation]})
    postReservation(reservation)
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
