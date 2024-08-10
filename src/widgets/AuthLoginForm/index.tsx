import React, { useEffect } from 'react'

import styles from "./auhtloginform.module.scss";
import { useNavigate } from 'react-router-dom';
import { authApi } from '@shared/lib/queryApi/authApi';
import useCookies from '@shared/hooks/useCookies';

export interface LoginTarget extends EventTarget {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

// TODO: Добавить http-only и переделать афторизацию
// TODO: Обработка ошибок, что не перезагружать страницу при неправильной отправке
const AuthLoginForm = () => {
  const navtigator = useNavigate()
  const [loginPost, {data, isError, isLoading, isSuccess, isUninitialized, reset}] = authApi.useSetLoginMutation()
  const {addCookies} = useCookies()

  useEffect(() => {
    if (!isUninitialized && isSuccess && data) {
      addCookies('access_token', data.access_token, {path: ''})
      navtigator('/app');
    }
  }, [isUninitialized, isSuccess, data])

  const onSubmitAuth = (e: React.FormEvent) => {
    e.preventDefault()
    const {username, password} = e.target as LoginTarget
    if (isUninitialized) {
      loginPost({username: username.value, password: password.value})
    }
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