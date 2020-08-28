import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Planner from './components/Planner';

function App() {
  return (
    <BrowserRouter>

        <Route path="/" 
            component={Login} exact></Route>

        <Route path="/signup" render={()=><div>Workin</div>}/>

        <Route path="/planer" 
            component={Planner} exact></Route>

        <Route path="/logout" render={()=>{
          localStorage.clear();
          return <Redirect to="/"></Redirect>;
        }} exact />
    </BrowserRouter>
  );
}

export default App;
