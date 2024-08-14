import React from 'react'

import styles from "./RegistrationForm.module.scss";
import { IRegistrationForm } from '@widgets/AuthRegistrForm';

const RegistrationForm = ({
  onSubmit,
  config
}: {
  onSubmit: (e: React.FormEvent) => void,
  config: IRegistrationForm[]
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.login_form}>
      {config.map((field, indx) => (
        <div className={styles.form_unit} key={indx}>
          <label>{field.label}</label>
          <input type={field.input.type} name={field.input.name}/>
        </div>
      ))}
      <button type='submit'>Registration</button>
    </form>
  )
}

export default RegistrationForm