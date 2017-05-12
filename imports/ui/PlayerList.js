import React from 'react'

import Player from './Player'

export default class PlayerList extends React.Component {
  renderPlayers(){
    return this.props.players.map((player) => {
      return <Player key={player.id} player={player}/>
  })
  }
  render (){
    return (
      <div>
        {this.renderPlayers()}
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.string.isRequired
}