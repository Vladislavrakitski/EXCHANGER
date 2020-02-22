import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Admin from './components/Admin'
import Main from './components/Main'

const App = () => {

  return(
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/main">Main Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/main' render={Main} />
          <Route path='/admin' render={Admin} />
          <Redirect to='/main' />
        </Switch>

      </div>
    </Router>
  )
}

export default App