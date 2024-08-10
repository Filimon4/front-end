import React, { useState } from 'react';
import cn from 'classnames';

import { authApi } from '@shared/lib/queryApi/authApi';
import useCookies from '@shared/hooks/useCookies';

import styles from './profile.module.scss'

import arrow_up from '@icons/arrow-up-solid.svg'
import { TDropUnit } from '@shared/types/dropdownmenu.types';
import useClickOutside from '@shared/hooks/useClickOutside';
import DropdownOptionUnit from '@entities/DropdownOptionUnit';
import { useNavigate } from 'react-router-dom';

enum EProfile {
  "profile",
  "signout"
}

const dropDownConfig: TDropUnit[] = [
  {
    text: 'Open profile',
    type: EProfile.profile
  },
  {
    text: 'Sign out',
    type: EProfile.signout
  }
]

const Profile = () => {
  const navigator = useNavigate()
  const {getCookies, deleteCookies} = useCookies()
  const {data, isError, isFetching, isLoading, isSuccess} = authApi.useGetProfileQuery(getCookies('access_token') ?? '')

  const [openProfOpt, setOpenProfOpt] = useState<boolean>(false)

  const refClck = useClickOutside(() => {
    console.log('click')
    setOpenProfOpt(false);
  })

  const openProfile = (e: React.MouseEvent, id: number) => {
    console.log(e.target, id);
    setOpenProfOpt(false);
    navigator('/profile')
  }

  const setSignOut = (e: React.MouseEvent, id: number) => {
    console.log(e.target, id);
    setOpenProfOpt(false);
    deleteCookies('access_token')
  }

  return (
    <div className={styles.profile}>
      {isFetching == true || isLoading == true && <AuthSkeletion />}
      {isSuccess && data && <>
        <a href='/profile' className={styles.profile_logo}>
          {data.username}
        </a>
        <img width={17} height={17} src={arrow_up} alt="" onClick={(e) => setOpenProfOpt(!openProfOpt)} className={openProfOpt ? styles.dropdown_arrow_down : ''}/>
        <div className={
          !openProfOpt ?
          styles.dropdown_profile_hiden :
          styles.dropdown_profile_active
        }>
          <div ref={refClck as React.RefObject<HTMLDivElement>} className={styles.prfile_units}>
            {dropDownConfig.map((unit, indx) => {
              switch (unit.type) {
                case EProfile.profile:
                  return <DropdownOptionUnit key={indx} text={unit.text} callback={openProfile} id={indx} />
                case EProfile.signout:
                  return <DropdownOptionUnit key={indx} text={unit.text} callback={setSignOut} id={indx}/>
              } 
            })}
          </div>
        </div>
      </>}
      {isError && <>
        <a href='/auth/login'>
          SignIn
        </a>
      </>}
    </div>
  )
}

const AuthSkeletion = () => {
  return (
    <div style={{backgroundColor: 'gray', borderRadius: '20px', width: '60px', height: '30px'}}>
    </div>
  )
}

export default Profile