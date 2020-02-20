import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Admin from './components/Admin'
import Main from './components/Main'

export default class App extends Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route path="/main" component={Main} exact />
          <Route path="/admin" component={Admin} />
          <Redirect to="/admin" />
        </Switch>
      </Router>
    )
  }
}