import React from 'react'
import { Header } from '../components'
import styles from 'Styles/index.scss'
import Watson from './watson'
import SpeechToText from './speechtotext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default (props) => {
  return (
    <Router>
      <Header />
      <div className={styles.mainWrapper}>
        <Switch>
          <Route exact path='/'>
            <Watson />
          </Route>
          <Route exact path='/speech'>
            <SpeechToText />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
