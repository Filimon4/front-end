import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './auth.module.scss'

const Auth = () => {
  return (
    <main className={styles.auth}>
      <Outlet />
    </main>
  )
}

export default Auth