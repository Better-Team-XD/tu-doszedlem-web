import React from 'react'

const Location = ({ date, lat, lon, note, rating }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <p>date: {date}</p>
      <p>latitude: {lat}</p>
      <p>longitude: {lon}</p>
      <p>note: {note}</p>
      <p>rating: {rating}</p>
    </li>
  )
}

export default Location