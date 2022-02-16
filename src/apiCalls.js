
const getData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
}

const deleteReservation = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

const postReservation = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
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

export {getData, deleteReservation, postReservation}
