import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Main from './components/Main'

export const useRoutes = () => {
  return(
    <React.Fragment>
      <Route path='/main' exact>
        <Main />
      </Route>
      <Redirect to='/main'/>
    </React.Fragment>
  )
}