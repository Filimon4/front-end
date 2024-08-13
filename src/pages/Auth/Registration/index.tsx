import React from 'react'

import styles from './registration.module.scss'
import AuthRegistrForm from '@widgets/AuthRegistrForm'

const Registartion = () => {
  return (
    <div className={styles.registration}>
      <AuthRegistrForm />
    </div>
  )
}

export default Registartion