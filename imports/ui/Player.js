import React from 'react'

import {Players} from '../api/players'

export default class Player extends React.Component {
  render() {
    const {player} = this.props
    return (
      <div key={player._id} className="item">
        <p>
          {`${player.name} has ${player.score} point(s).`}
        </p>
        <button className="button button--round" onClick={() => {
          Players.update(player._id, {$inc: {score:1}})
        }}>+1</button>
        <button className="button button--round" onClick={() => {
          Players.update(player._id, {$inc: {score:-1}})
        }}>-1</button>
        <button className="button button--round" onClick={() => Players.remove(player._id)}>X</button>
      </div>
      )
  }
}

Player.propTypes = {
  player :React.PropTypes.object.isRequired
}