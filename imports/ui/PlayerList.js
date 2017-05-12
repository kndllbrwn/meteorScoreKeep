import React from 'react'

import Player from './Player'

export default class PlayerList extends React.Component {
  renderPlayers(){
    if(this.props.players.length === 0) {
      return <p>There are no players yet. Add one to get started!</p>
    } else {    
      return this.props.players.map((player) => {
        return <Player key={player.id} player={player}/>
     })
    }
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