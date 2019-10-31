import React from 'react'
import { Header } from '../components'
import styles from 'Styles/index.scss'
import Watson from './watson'

export default (props) => {
  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        <Watson />
      </div>
    </>
  )
}
