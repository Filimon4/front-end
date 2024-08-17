import React, { useEffect, useState } from 'react';

import { authApi } from '@shared/lib/queryApi/authApi';
import useCookies from '@shared/hooks/useCookies';

import styles from './profile.module.scss'

import arrow_up from '@icons/arrow-up-solid.svg'
import { TDropUnit } from '@shared/types/dropdownmenu.types';
import useClickOutside from '@shared/hooks/useClickOutside';
import { useNavigate } from 'react-router-dom';
import DropdownLinkUnit from '@entities/Dropdown/LinkUnit/DropdownLinkUnit';

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

// TODO: Сделать номрмальную кновпу signin
const Profile = () => {
  const navigator = useNavigate()
  const {getCookies, deleteCookies, addCookies} = useCookies()
  const {data, isError, isFetching, isLoading, isSuccess, refetch} = authApi.useGetProfileQuery(getCookies('access_token') ?? '')
  const [refreshPos, {data: dataRefresh, isError: isErrorRefresh, isLoading: isLoadingRefresh, isSuccess: isSuccessRefres}] = authApi.useGetRefreshMutation()

  const [openProfOpt, setOpenProfOpt] = useState<boolean>(false)

  useEffect(() => {
    if (isError) {
      refreshPos({"refresh": localStorage.getItem('refresh_token')})
    }
  }, [isError])

  useEffect(() => {
    if (dataRefresh && isSuccessRefres) {
      addCookies('access_token', dataRefresh.access_token, { path: '/'})
      refetch()
    }
  }, [dataRefresh, isSuccessRefres, isErrorRefresh])

  const refClck = useClickOutside(() => {
    setOpenProfOpt(false);
  })

  const openProfile = (e: React.MouseEvent, id: number) => {
    setOpenProfOpt(false);
    navigator('/profile')
  }

  const setSignOut = (e: React.MouseEvent, id: number) => {
    console.log(e.target, id);
    setOpenProfOpt(false);
    deleteCookies('access_token')
    localStorage.removeItem('refresh_token')
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
                  return <DropdownLinkUnit key={indx} text={unit.text} callback={openProfile} id={indx} />
                case EProfile.signout:
                  return <DropdownLinkUnit key={indx} text={unit.text} callback={setSignOut} id={indx} />
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