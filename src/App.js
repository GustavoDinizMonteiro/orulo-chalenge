import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Feed from './screens/Feed'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Feed}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
