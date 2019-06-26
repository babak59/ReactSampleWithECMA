import React from 'react';
import logo from './logo.svg';
import './App.css';

import RoutingComponent from './component/routingComponent'
function App() {
 return (
    <div className="App">
      <header className="App-header">
      <RoutingComponent></RoutingComponent>
        <img src={logo} className="App-logo" alt="logo" />
            <a
          className="App-link"
        
          target="_blank"
          rel="noopener noreferrer"
        >
          Peaple Management
        </a>
       
     
      </header>
    
    
     
    </div>
  );
}
export default App;
