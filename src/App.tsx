import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Homecomponent/Home';
import {MovieProvider} from './MovieContext';
import Theater from './components/TheatrComponent/Theater';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import {MovieProvider} from './MovieContext';
 import Seatselection from './components/SeatSelection/SeatSelection';
import Ticket from './components/SeatSelection/Ticket'
function App() {
 var item:number;
 item=0;
 var index;

  if(localStorage.length<=0){
    localStorage.setItem(index,JSON.stringify(item));
    console.log("initialindex");
    }
  return (
    <MovieProvider>
    <div className="App">
       <Router>
     
     <Switch>
     
     <Route path="/" exact component={Home} />
     <Route path="/theater/:movie" component={Theater} />
     <Route path="/:moviename/:cinema/:id" component={Seatselection} />
     <Route path="/Ticket" component={Ticket} />
     </Switch>
      </Router>
    </div>
    </MovieProvider>
  );
}

export default App;
