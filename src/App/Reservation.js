import React from 'react';
import Card from './Card.js'
import './Reservation.css';

const Reservation = ({reservations, cancelReservation}) => {

  const allReservations = reservations.map(reservation => {
    return (
      <Card
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      cancelReservation={cancelReservation}
      />
    )
  })

  return (
    <div className='res-container'>
      {allReservations}
    </div>
  )

}

export default Reservation;
