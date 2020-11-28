import React from 'react'
import Location from './Location'

const Locations = ({ locations }) => {
  return <ul className="list-group">
    {locations.map(location => <Location key={location.id} date={location.date} note={location.note} lat={location.latitude} lon={location.longitude} rating={location.rating} />)}
  </ul>
}

export default Locations