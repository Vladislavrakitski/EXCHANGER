import React from 'react'
import {render} from 'react-dom'

const App = () => (
  <div className="container">
    <h1>Hello Vladislav</h1>
    <h2>Welcome to Webpack</h2>
  </div>
)

render(<App/>, document.getElementById('app'))
