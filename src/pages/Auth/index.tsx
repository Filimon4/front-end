import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './auth.module.scss'

const Auth = () => {
  return (
    <main className={styles.auth}>
      <div className={styles.auth_container}>
        <Outlet />
      </div>
    </main>
  )
}

export default Auth