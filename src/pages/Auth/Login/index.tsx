import React from 'react'
import AuthLoginForm from '@widgets/AuthLoginForm'

import styles from './login.module.scss'

const Login = () => {
  return (
    <div className={styles.login}>
      <AuthLoginForm />
    </div>
  )
}

export default Login