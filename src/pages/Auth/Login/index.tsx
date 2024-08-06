import React from 'react'
import AuthLoginForm from '@widgets/AuthLoginForm'

import styles from './login.module.scss'

const Login = () => {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <AuthLoginForm />
    </div>
  )
}

export default Login