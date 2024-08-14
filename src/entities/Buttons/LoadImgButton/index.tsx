import React, { useEffect, useRef, useState } from 'react'
import useClickOutside from '@shared/hooks/useClickOutside'

import styles from "./dropdownmenu.module.scss";

import plus from "@icons/plus.svg"

import { TDropUnit } from '@shared/types/dropdownmenu.types';

import { useAppDispatch } from '@shared/lib/store/hooks/reduxTypesHooks';
import DropdownInputUnit from '@entities/Dropdown/InputUnit/DropdownInputUnit';
import DropdownLinkUnit from '@entities/Dropdown/LinkUnit/DropdownLinkUnit';
import { imgSelectedActions } from '@shared/lib/store/slices/ImgSelectedSlice';
import { EOptionLoader } from '@features/ImgLoaderBar';


// TODO при нажатии разворячивать на 45
// TODO при навидении на юниты выподающего окна сбиваются border-radius когда есть изображения
const   LoadImgButton = ({
  config,
}: {
  config: TDropUnit[],
}) => {
  const [openLoaderOpt, setOpenLoaderOpt] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const {addLoadedImgs} = imgSelectedActions

  const refClck = useClickOutside(() => {
    setOpenLoaderOpt(false);
  })

  const uploadImg = (file: FileList, id: number) => {
    const filesFromList: File[] = []
    for (let i = 0; i < file.length; ++i) {
      filesFromList.push(file[i])
    }
    dispatch(addLoadedImgs(filesFromList))
    setOpenLoaderOpt(false)
  }

  const takeScrenshot = (e: React.MouseEvent) => {
    setOpenLoaderOpt(false);
  }

  const onClickLoader = () => {
    setOpenLoaderOpt(!openLoaderOpt)
  }

  return (
    <div>
      <button 
        className={styles.subject_button}
        onClick={onClickLoader}
      >
        <img className={styles.button_img} src={plus} alt="Plus" width={20} height={20} />
      </button>
    
      <div className={
        openLoaderOpt?
        styles.dropdown_active:
        styles.dropdown_hide
      }
      > 
        <div ref={refClck as React.RefObject<HTMLDivElement>} className={styles.dropdown_container}>
          {config.map((unit, indx) => {

            switch (unit.type) {
              case EOptionLoader.upload:
                return <DropdownInputUnit key={indx} fileLink={unit.img} text={unit.text} callback={uploadImg} inputType='file' />
              case EOptionLoader.screenshot:
                return <DropdownLinkUnit key={indx} fileLink={unit.img} text={unit.text} callback={takeScrenshot}/>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default LoadImgButton