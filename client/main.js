import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from '../imports/api/players'

const renderPlayers = (players) => {
  return players.map((player) => {
    return <p key={player._id}>{`${player.name} has ${player.score} point(s).`}</p>
})
}

const handleSubmit = (e) => {
  const playerName = e.target.playerName.value
  e.preventDefault()
  if (playerName) {
    e.target.playerName.value = ''
    Players.insert({
    name: playerName,
    score: 0
  })
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch()

    const title = 'Been there'
    const name = 'Done that'
    const jsx = (
      <div>
        <h1>{title}</h1>
        <p>And {name}!</p>
        <p>Me too!</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
      )

      ReactDOM.render(jsx, document.getElementById('app'))
  })
})
