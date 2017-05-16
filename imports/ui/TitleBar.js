import React from 'react'

export default class TitleBar extends React.Component {
  render () {
    return (
      <div className='title-bar'>
        <div className='wrapper'>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired
}

TitleBar.defaultProps = {
  title: 'Default title'
}
