import { useState } from 'react'
import ReactDom from 'react-dom/client'

function Search() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // important for formatting
    alert(name)
  }

  return (
    <form class="form-group has-feedback" onSubmit={handleSubmit}>
      <label class="control-label" for="inputSuccess2">NBA Contract Evaluator</label>
      <input class="form-control"
        id="inputSuccess2"
        type="text"
        placeholder="Enter a player's name"
        value={name}
        onChange={(e) => setName(e.target.value)}>
      </input>
  </form>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Search />)

export default Search