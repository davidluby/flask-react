/*
Author: David Luby
Date created: 2-10-2023

This script serves the frontend for a React application that lets users make
decks of NBA trading cards
*/

import Nav from "./nav/Nav"
import Search from "./search/Search"

function Evaluator() {
  
  return (
    <div className="border border-success border-3">
      <Nav />
      <div>
      <Search />
      </div>
    </div>
  );
}

export default Evaluator