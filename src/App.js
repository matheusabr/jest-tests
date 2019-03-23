import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Link from './components/Link'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <Link page='https://jestjs.io/docs/en/tutorial-react'>
            jest tests
          </Link>
        </header>
      </div>
    )
  }
}

export default App
