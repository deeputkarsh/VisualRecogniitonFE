import React from 'react'

import styles from 'Styles/index.scss'
import { Button } from '@material-ui/core'

export const Header = ({ login }) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoContainer} />
      <Button color='primary' size='large' variant='outlined' onClick={login}> Login </Button>
    </header>
  )
}
