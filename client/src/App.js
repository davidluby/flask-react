/*
Author: David Luby
Date created: 2-10-2023

This script serves a frontend for a contract evaluation web application
facilitated by a Flask API
*/

import './App.css'
import Nav from "./nav/Nav"
import Search2 from "./search2/Search2"


function Evaluator() {
  
  return (
    <div className="border border-success border-3 d-flex flex-column">
      <Nav />
      <div>
      <Search2 />
      </div>
    </div>
  );
}

export default Evaluator