import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

const players = [{
  _id: '1',
  name: 'Tom',
  score: 99
},
{
  _id: '2',
  name: 'Dick',
  score: -1
},
{
  _id: '3',
  name: 'Harry',
  score: -12
}]

const renderPlayers = players.map((player) => {
  return <p key={player._id}>{`${player.name} has ${player.score} point(s).`}</p>
})

Meteor.startup(function () {
  const title = 'Been there'
  const name = 'Done that'
  const jsx = (
    <div>
    <h1>{title}</h1>
    <p>And {name}!</p>
    <p>Me too!</p>
    {renderPlayers}
    </div>)
  ReactDOM.render(jsx, document.getElementById('app'))
})