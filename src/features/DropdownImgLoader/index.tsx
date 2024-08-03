/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext } from 'react'
import DropdownUnit from '@entities/DropdownUnit'
import useClickOutside from '@shared/hooks/useClickOutside'

import styles from "./dropdownmenu.module.scss";
import { TDropUnit } from '@shared/types/dropdownmenu.types';
import { DropdownTheme } from '@shared/types/dropdownmenu.theme';

const DropdownImgLoader = ({menu}: {menu: TDropUnit[]}) => {
  //@ts-ignore
  const [openLoaderOpt, setOpenLoaderOpt] = useContext(DropdownTheme)

  const refClck = useClickOutside(() => {
    setOpenLoaderOpt(false);
  })

  const onLodaerButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(e.target);
  }

  return (
    <div className={
      openLoaderOpt?
      styles.dropdown_active:
      styles.dropdown_hide
    }
    > 
      <div ref={refClck as React.RefObject<HTMLDivElement>} className={styles.dropdown_container}>
        {menu.map((unit, indx) => (
          <DropdownUnit key={indx} fileLink={unit.img} text={unit.text} callback={onLodaerButtonClick} />
        ))}
      </div>
    </div>
  )
}

export default DropdownImgLoader