import React, { useEffect, useRef, useState } from 'react'
import useClickOutside from '@shared/hooks/useClickOutside'

import styles from "./dropdownmenu.module.scss";

import { TDropUnit } from '@shared/types/dropdownmenu.types';

import upload_file from '@icons/upload_file.svg'
import screen_shot from "@icons/screen_shot_link.svg"
import { useAppDispatch } from '@shared/lib/store/hooks/reduxTypesHooks';
import { imgHistoryActions } from '@shared/lib/store/slices/imgHistorySlice';
import { TImgModel } from '@shared/types/imghistory.types';
import DropdownInputUnit from '@entities/DropdownOptionUnit/InputUnit/DropdownInputUnit';
import DropdownLinkUnit from '@entities/DropdownOptionUnit/LinkUnit/DropdownLinkUnit';

enum EOptionLoader {
  'upload',
  'screenshot'
}

const dropDownConfig: TDropUnit[] = [
  {
    img: upload_file,
    text: 'File Upload',
    type: EOptionLoader.upload
  },
  {
    img: screen_shot,
    text: 'Take a Screen and Upload',
    type: EOptionLoader.screenshot
  }
]

// TODO при нажатии на квадрат меня на крестик и отбратно

const LoadImg = () => {
  const refInputFile = useRef<HTMLInputElement>(null)
  const [openLoaderOpt, setOpenLoaderOpt] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const {addImg} = imgHistoryActions

  const refClck = useClickOutside(() => {
    setOpenLoaderOpt(false);
  })

  const uploadImg = (file: File, id: number) => {
    console.log(file)
    setOpenLoaderOpt(false)
    console.log('click input file');
    const img: Omit<TImgModel, 'id'> = {
      name: 'TestUpload',
      selected: false,
    }
    dispatch(addImg(img))
  }

  const takeScrenshot = (e: React.MouseEvent) => {
    setOpenLoaderOpt(false);
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
          {dropDownConfig.map((unit, indx) => {

            switch (unit.type) {
              case EOptionLoader.upload:
                return <DropdownInputUnit key={indx} fileLink={unit.img} text={unit.text} callback={uploadImg} inputType='file' inputRef={refInputFile} />
              case EOptionLoader.screenshot:
                return <DropdownLinkUnit key={indx} fileLink={unit.img} text={unit.text} callback={takeScrenshot}/>
            }
          })}
        </div>
      </div>
    </>
  )
}

export default LoadImg