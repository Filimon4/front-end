import React, { useState } from 'react'

import styles from './imgloader.module.scss'

import { TDropUnit } from '@shared/types/dropdownmenu.types'

import upload_file from '@icons/upload_file.svg'
import screen_shot from "@icons/screen_shot_link.svg"
import { DropdownTheme } from '@shared/types/dropdownmenu.theme'
import DropdownImgLoader from '@features/DropdownImgLoader'

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

const ImgLoader = () => {
  const [openLoaderOpt, setOpenLoaderOpt] = useState<boolean>(false)

  return (
    <div className={styles.img_loader}>
        <div className={styles.img_loader_subject}>
          <button 
            className={styles.subject_button}
            onClick={() => setOpenLoaderOpt(!openLoaderOpt)}
          />
          <DropdownTheme.Provider value={[openLoaderOpt, setOpenLoaderOpt]} >
            <DropdownImgLoader menu={dropDownConfig}/>
          </DropdownTheme.Provider>
        </div>
      </div>
  )
}

export default ImgLoader