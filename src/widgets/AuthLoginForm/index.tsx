import React from 'react'

import styles from "./auhtloginform.module.scss";

export interface LoginTarget extends EventTarget {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

const AuthLoginForm = () => {

  const onSubmitAuth = (e: React.FormEvent) => {
    e.preventDefault()
    const {username, password} = e.target as LoginTarget
    console.log(username.value, password.value)
  }

  return (
    <form onSubmit={onSubmitAuth} className={styles.login_form}>
      <label>Username</label>
      <input type="text" name='username' />
      <label>Password</label>
      <input type="text" name='password' />
      <button type='submit'>Log in</button>
    </form>
  )
}

export default AuthLoginForm