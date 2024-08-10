import React from 'react'

import logo from '@public/img/treelogo.png'

import styles from './applogo.module.scss'

const Applogo = () => {
  return (
    <a className={styles.navbar_logo} href='/landing'>
      <img width={50} src={logo} alt="" />
      <h3>Gallery</h3>
    </a>
  )
}

export default Applogo