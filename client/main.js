import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from '../imports/api/players'

const renderPlayers = function(players) {
  return players.map((player) => {
    return <p key={player._id}>{`${player.name} has ${player.score} point(s).`}</p>
})
}

Meteor.startup(function () {
  Tracker.autorun(function () {
    const players = Players.find().fetch()

  const title = 'Been there'
  const name = 'Done that'
  const jsx = (
    <div>
      <h1>{title}</h1>
      <p>And {name}!</p>
      <p>Me too!</p>
      {renderPlayers(players)}
    </div>)

    ReactDOM.render(jsx, document.getElementById('app'))
})
  
  
})
