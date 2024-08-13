import React, { useEffect } from 'react'

import styles from "./auhtloginform.module.scss";
import { useNavigate } from 'react-router-dom';
import { authApi } from '@shared/lib/queryApi/authApi';
import useCookies from '@shared/hooks/useCookies';
import LoginForm from '@features/LoginForm';

export interface LoginTarget extends EventTarget {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

export interface ILoginForm {
  label: string,
  input: {
    type: string,
    name: string
  }
}

const configLoginForm: ILoginForm[] = [
  {
    label: "Username",
    input: {
      type: "text",
      name: "username"
    }
  },
  {
    label: "Password",
    input: {
      type: "text",
      name: "password"
    }
  }
]

// TODO: Добавить http-only и переделать афторизацию
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
    if (!isLoading && !isSuccess) {
      loginPost({username: username.value, password: password.value})
    }
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmitAuth} config={configLoginForm} />
    </>
  )
}

export default AuthLoginForm