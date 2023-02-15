import { useState } from 'react'

function Search() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // important for formatting
    alert(name)
  }

  return (
    <form className={"form-group has-feedback"} onSubmit={handleSubmit}>
      <label className="control-label" for="inputSuccess2">NBA Contract Evaluator</label>
      <input className="form-control"
        id="inputSuccess2"
        type="text"
        placeholder="Enter a player's name"
        value={name}
        onChange={(e) => setName(e.target.value)}>
      </input>
  </form>
  )
}

export default Search