import logo from './logo.svg'
import './App.css'
import React from 'react'
import IndividualView from './IndividualView/IndividualView'
import Header from './IndividualView/Header'

function App() {
  return (
    <div>
      <Header/>
      <IndividualView/>
    </div>
  );
}

export default App;
