import React from 'react'

import logo from '@public/img/treelogo.png'

import styles from './applogo.module.scss'

const Applogo = () => {
  return (
    <div className={styles.navbar_logo}>
      <img width={50} src={logo} alt="" />
      <h3>Gallery</h3>
    </div>
  )
}

export default Applogo