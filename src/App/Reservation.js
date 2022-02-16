import React from 'react';
import './Reservation.css';

const Reservation = ({id, name, data, time, number, cancelReservation}) => {
  return (
    <div className='reservation'>
      <h2 className='name'>{name}</h2>
      <p className='date'>{date}</p>
      <p className='time'>{`${time} pm`}</p>
      <p className='number'>{`Number of guests : ${number}`}</p>
      <button className='cancel-button' onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  )
}

export default Reservation;

// {
// "id": 1,
// "name": "Christie",
// "date": "12/29",
// "time": "7:00",
// "number": 12
// },
