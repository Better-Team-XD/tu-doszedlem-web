import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MapContainer from './components/MapContainer';
import Locations from './components/Locations';
import axios from 'axios'

function App() {
  const [locations, setLocations] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY
  const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrcmFsZXBwYSIsImV4cCI6MTYwNjU3MzQ5NiwiaWF0IjoxNjA2NTM3NDk2fQ.MH2HhfWWXcQKU0CISDgZ-CWlPWBg2YURYQxdTaQ-BgM'


  useEffect(() => {
    axios
      .get('http://142.93.110.208/api/v1/locations',{
      headers: {
          Authorization: `Bearer ${jwt}`
      }})
      .then(response => {
        console.log(response.data.data)
        setLocations(response.data.data.locations);
        console.log(locations);
      })
    }, [])


  return (
    <div id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <h1>Tu doszedłem</h1>
        <MapContainer apiKey={api_key} />
        <br/>
        <Locations locations={locations} />
      </div>
    </div>
  );
}

export default App;
