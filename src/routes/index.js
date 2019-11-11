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
import { baseUrl } from '../services'

export default (props) => {
  return (
    <Router>
      <Header />
      <div className={styles.mainWrapper}>
        <Switch>
          <Route exact path={`${baseUrl}`}>
            <Watson />
          </Route>
          <Route exact path={`${baseUrl}speech`}>
            <SpeechToText />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
