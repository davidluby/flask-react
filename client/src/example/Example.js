import React, { useState, useEffect } from 'react'


// rfce create component shortcut
function Example() {


  const [data, setData] = useState([{}]) // create state variable


  useEffect(() => {
    fetch("/dummy").then( // fetch API endpoint
      res => res.json()
    ).then(
      data => {
        setData(data) // set state variable to backend response
        console.log(data)
      }
    )
  }, [])

  return (

    // use state variable to render data onto frontend
    <div class="border border-3">
    
      {(typeof data.dummy == 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.dummy.map((dummy, i) => (
          <p key = {i} > {dummy}</p>
        
        
        ))
      )}
    
    
    
    </div>
  )
}

export default Example