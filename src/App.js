import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  // const [user, setUser] = useState('Krzychu')

  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <h1>TU DOSZEDŁEM</h1>
      </div>
    </div>
  );
}

export default App;
