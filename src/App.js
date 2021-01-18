import logo from './logo.svg'
import './App.css'
import React from 'react'
import IndividualView from './IndividualView/IndividualView'
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <IndividualView/>
    </div>
  );
}

export default App;
