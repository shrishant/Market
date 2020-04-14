import React, { createFactory } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {  Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/hats" component={Hats}/>
      <Route exact path="/" component={Homepage} />
    </div>
  );
}


const Hats = () => {
  return ( 
    <div>
      <h1>Hats page</h1>
    </div>
   );
}
 
export default  App;
