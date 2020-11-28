import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = ({ apiKey }) => {
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  
  const mapStyles = {        
    height: "80vh",
    width: "100%",
    borderStyle: "outset",
    borderWidth: "2px",
    borderColor: "#585858"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
    <div className="map">
      <LoadScript
       googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}>
         {
          locations.map(item => {
            return (
            <Marker key={item.name} 
              position={item.location}
              onClick={() => onSelect(item)}
            />
            )
          })
         }
        {
          selected.location && 
          (
            <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
          )
         }
        </GoogleMap>
     </LoadScript>
    </div>
  )
}

export default MapContainer;