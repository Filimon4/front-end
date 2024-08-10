import React, { useEffect } from 'react'
import { authApi } from "@shared/lib/queryApi/authApi";

import styles from './authregistrationform.module.scss'
import { useNavigate } from 'react-router-dom';

export interface RegitrTarget extends EventTarget {
  username: HTMLInputElement;
  password: HTMLInputElement;
  rep_password: HTMLInputElement;
}

const AuthRegistrForm = () => {
  // const [update, result] = api.useSetRegistrationMutation()\
  const navigator = useNavigate()
  const [registerPost, {data, isError, isLoading, isSuccess, isUninitialized, reset}] = authApi.useSetRegistrationMutation({})

  useEffect(() => {
    console.log(data)
    if (!isUninitialized && isSuccess && data) {
      navigator('/auth/login')
    }
  }, [isUninitialized, isSuccess, data])

  const onSubmitReg = (e: React.FormEvent) => {
    e.preventDefault()
    const {username, password, rep_password} = e.target as RegitrTarget
    console.log(username.value, password.value, rep_password.value)
    if (password.value == rep_password.value) {
      if (isUninitialized) {
        registerPost({username: username.value, password: password.value})
      }
    }
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