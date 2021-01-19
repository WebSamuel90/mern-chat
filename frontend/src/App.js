import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/login' component={LoginScreen} />
        <Route path='/' component={HomeScreen} exact />
      </main>
    </Router>
  )
}

export default App
