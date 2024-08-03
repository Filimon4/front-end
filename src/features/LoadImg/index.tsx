import React, { useState } from 'react'
import DropdownOptionUnit from '@entities/DropdownOptionUnit'
import useClickOutside from '@shared/hooks/useClickOutside'

import styles from "./dropdownmenu.module.scss";

import { TDropUnit } from '@shared/types/dropdownmenu.types';

import upload_file from '@icons/upload_file.svg'
import screen_shot from "@icons/screen_shot_link.svg"

const dropDownConfig: TDropUnit[] = [
  {
    img: upload_file,
    text: 'File Upload',
  },
  {
    img: screen_shot,
    text: 'Take a Screen and Upload',
  }
]

const LoadImg = () => {
  const [openLoaderOpt, setOpenLoaderOpt] = useState<boolean>(false)

  const refClck = useClickOutside(() => {
    setOpenLoaderOpt(false);
  })

  const onLodaerButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(e.target);
  }

  return (
    <>
      <button 
        className={styles.subject_button}
        onClick={() => setOpenLoaderOpt(!openLoaderOpt)}
        />
      {/* Dropdown menu to features */}
      <div className={
        openLoaderOpt?
        styles.dropdown_active:
        styles.dropdown_hide
      }
      > 
        <div ref={refClck as React.RefObject<HTMLDivElement>} className={styles.dropdown_container}>
          {dropDownConfig.map((unit, indx) => (
            <DropdownOptionUnit key={indx} fileLink={unit.img} text={unit.text} callback={onLodaerButtonClick} />
          ))}
        </div>
      </div>
    </>
  )
}

export default LoadImg