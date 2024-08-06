import React from 'react'

import styles from './registration.module.scss'
import AuthRegistrForm from '@widgets/AuthRegistrForm'

const Registartion = () => {
  return (
    <div className={styles.login}>
      <h1>Registration</h1>
      <AuthRegistrForm />
    </div>
  )
}

export default Registartion