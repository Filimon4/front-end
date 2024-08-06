import React from 'react'

import styles from './authregistrationform.module.scss'

export interface RegitrTarget extends EventTarget {
  username: HTMLInputElement;
  password: HTMLInputElement;
  rep_password: HTMLInputElement;
}

const AuthRegistrForm = () => {

  const onSubmitReg = (e: React.FormEvent) => {
    e.preventDefault()
    const {username, password, rep_password} = e.target as RegitrTarget
    console.log(username.value, password.value, rep_password.value)
  }

  return (
    <form onSubmit={onSubmitReg} className={styles.login_form}>
      <label>Username</label>
      <input type="text" name='username' />
      <label>Password</label>
      <input type="text" name='password' />
      <label>Repeat password</label>
      <input type="text" name='rep_password' />
      <button type='submit'>Registration</button>
    </form>
  )
}

export default AuthRegistrForm