import React, { useState } from 'react'

import Card from "../card/Card"

import style from "./Search.module.css"

function Search() {

  const [playerName, setPlayerName] = useState("");
  const [playerData, setPlayerData] = useState([{}]);
  const apiKey = "/get_stats"


  const getData = (event) => {
    if (event.key === "Enter") {
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


      <div className="border border-3 border-primary">
        <Card data={playerData.stats}/>
      </div>
    </div>
    
  )
}

export default Search