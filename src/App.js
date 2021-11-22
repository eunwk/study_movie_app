import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from './routes/Navigation';

function App() {
  return (
    
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />  
  </HashRouter>
  ///:id는 변수
  )
}


// document.getElementsByTagName


export default App;