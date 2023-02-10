import React, { useState, useEffect } from 'react'

function App() {


  const [data, setData] = useState([{}]) // create state variable


  useEffect(() => {
    fetch("/test").then( // fetch API
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
    <div>
    
      {(typeof data.members == 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key = {i} > {member}</p>
        
        
        ))
      )}
    
    
    
    </div>
  )
}

export default App