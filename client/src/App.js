import './App.css'
import Nav from "./nav/Nav"
import Search from "./search/Search"
import Card from "./card/Card"
import Example from "./example/Example"


function Evaluator() {
  
  return (
    <div class="border border-success border-3 d-flex flex-column">
      <Nav />
      <div>
      <Search />
      <Card />
      </div>
    </div>
  );
}

export default Evaluator