import React from 'react'
import cn from "classnames";

import Applogo from '@features/AppLogo';

import styles from "./navbar.module.scss";
import Profile from '@features/Profile';

const NavBar = ({block = true}: {block?: boolean}) => {
  
  return (
    <nav className={cn(styles.navbar, {[styles.navbar_absolute]: block == false})}>
      <Applogo />
      <section className={styles.navbar_pages}>
        <a href="/app">App</a> 
      </section>
      <Profile />
    </nav>
  )
}



export default NavBar