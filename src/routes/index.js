import React from 'react'
import { Header } from '../components'
import styles from 'Styles/index.scss'
// import Watson from './watson'
import SpeechToText from './speechtotext'

export default (props) => {
  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        {/* <Watson /> */}
        <SpeechToText />
      </div>
    </>
  )
}
