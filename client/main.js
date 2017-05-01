import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

Meteor.startup(function () {
  const title = 'Been there'
  const name = 'Done that'
  const jsx = (
    <div>
    <h1>{title}</h1>
    <p>And {name}!</p>
    <p>Me too!</p>
    </div>)
  ReactDOM.render(jsx, document.getElementById('app'))
})