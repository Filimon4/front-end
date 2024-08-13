import React, { useEffect } from 'react'
import { authApi } from "@shared/lib/queryApi/authApi";

import styles from './authregistrationform.module.scss'
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '@features/RegistrationForm';

export interface RegitrTarget extends EventTarget {
  username: HTMLInputElement;
  password: HTMLInputElement;
  rep_password: HTMLInputElement;
}

export interface IRegistrationForm {
  label: string,
  input: {
    type: string,
    name: string
  }
}

const configRegistrationForm: IRegistrationForm[] = [
  {
    label: "Username",
    input: {
      name: "username",
      type: "text"
    },
  },
  {
    label: "Password",
    input: {
      name: "password",
      type: "text"
    }
  },
  {
    label: "Repeat password",
    input: {
      name: "rep_password",
      type: "text"
    }
  }
]

const AuthRegistrForm = () => {
  // const [update, result] = api.useSetRegistrationMutation()\
  const navigator = useNavigate()
  const [registerPost, {data, isError, isLoading, isSuccess, isUninitialized, reset}] = authApi.useSetRegistrationMutation()

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
      if (!isLoading && !isSuccess) {
        registerPost({username: username.value, password: password.value})
      }
    }
  }

  return (
    <>
      <h1>Registration</h1>
      <RegistrationForm onSubmit={onSubmitReg} config={configRegistrationForm} />
    </>
  )
}

export default AuthRegistrForm