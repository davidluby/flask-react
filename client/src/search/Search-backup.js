import React, { useState } from 'react'

import style from "./Search.module.css"

function Search() {

  const [playerName, setPlayerName] = useState("");
  const [playerData, setPlayerData] = useState([{}]);
  const apiKey = "/get_stats"


  const getData = (event) => {
    if (event.key == "Enter") {
      fetch(apiKey, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(playerName)
      }).then(
        response => response.json()
      ).then(
        data => {
          setPlayerData(data)
          setPlayerName("")
        }
      )
    }
  }


  return (
    <div className={`${style.container}`}>
      <input
      className={style.input}
      placeholder="Search for a player"
      onChange={e => setPlayerName(e.target.value)}
      value={playerName}
      onKeyPress={getData}>
      </input>


      <div className="mt-4 d-flex align-items-center border border-3 border-primary">
        {(typeof playerData.stats == 'undefined') ? (
          <div>
            <p className="m-0">
              Welcome to your deck! Enter your favorite player's name above to
              get your first card.
            </p>
          </div>
        ) : (
          playerData.stats.map((stats, i) => (
            <p className="m-0 border border-1 p-2" key={i}> {stats}</p>
          ))
        )}
      </div>
    </div>
    
  )
}

export default Search