import React from 'react'
import cn from "classnames";
import { authApi } from '@shared/lib/queryApi/authApi';

import Applogo from '@features/AppLogo';

import styles from "./navbar.module.scss";
import useCookies from '@shared/hooks/useCookies';

const NavBar = ({block = true}: {block?: boolean}) => {
  const {getCookies} = useCookies()
  const {data, isError, isFetching, isLoading, isSuccess} = authApi.useGetProfileQuery(getCookies('access_token') ?? '')
  console.log(isLoading, isFetching)
  
  return (
    <nav className={cn(styles.navbar, {[styles.navbar_absolute]: block == false})}>
      <Applogo />
      <section>
        <a href="/app">App</a> 
      </section>
      {isFetching == true || isLoading == true && <AuthSkeletion />}
      {isSuccess && data && <>
        <a>
          {data.username}
        </a>
      </>}
      {isError && <>
        <a href='/auth/login'>
          SignIn
        </a>
      </>}
    </nav>
  )
}

const AuthSkeletion = () => {
  return (
    <div style={{backgroundColor: 'gray', borderRadius: '20px', width: '60px', height: '30px'}}>
    </div>
  )
}

export default NavBar