import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/' component={LoginScreen} />
      </main>
    </Router>
  )
}

export default App
