import React from 'react'
import cn from "classnames";

import Applogo from '@features/AppLogo';

import styles from "./navbar.module.scss";
import Profile from '@features/Profile';
import { useNavigate } from 'react-router-dom';

const NavBar = ({block = true}: {block?: boolean}) => {
  const navigator = useNavigate()

  const navigateToApp = (e: React.MouseEvent) => {
    navigator('/app')
  }

  return (
    <nav className={cn(styles.navbar, {[styles.navbar_absolute]: block == false})}>
      <Applogo />
      <section className={styles.navbar_pages}>
        <a onClick={navigateToApp}>App</a> 
      </section>
      <Profile />
    </nav>
  )
}



export default NavBar