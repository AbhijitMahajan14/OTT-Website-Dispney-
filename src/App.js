import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Detail from './components/Detail.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/detail" element={<Detail />} />
           
        </Routes>
      </Router>

               
               
         </div>
  );
}

export default App;
