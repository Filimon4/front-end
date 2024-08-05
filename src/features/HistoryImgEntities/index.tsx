import React, { useState } from 'react'
import styles from "./historyrowunit.module.scss";

import { TDropUnit } from '@shared/types/dropdownmenu.types';
import useClickOutside from '@shared/hooks/useClickOutside';

import DropdownOptionUnit from '@entities/DropdownOptionUnit';
import ThreeDotsButton from '@entities/ThreeDotsButton';
import ImgEntitySelectButton from '@entities/ImgEntitySelectButton';
import { useRowsTheme } from '@shared/themes/imghistorytheme';
import { TImgModel } from '@shared/types/imghistory.types';
import {imgHistorySlice} from '@shared/lib/store/slices/imgHistorySlice';
import { useAppDispatch } from '@shared/lib/store/hooks/reduxTypesHooks';


enum EOptionImg {
  'delete',
  'openInNewTab'
}

const dropDownConfig: TDropUnit[] = [
  {
    text: 'Open in a New Browser Tab',
    type: EOptionImg.openInNewTab,
  },
  {
    text: 'Delete',
    type: EOptionImg.delete
  }
]

const HistoryImgEntities = ({id, obj}: {id: number, obj: TImgModel}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {selectedRows, setSelectRowClick} = useRowsTheme()
  const [openIdRow, setOpenIdRow] = useState<number | null>(null);
  const {removeImg} = imgHistorySlice.actions
  const disptach = useAppDispatch()

  const refRowOptions = useClickOutside(() => {
    setOpenIdRow(null)
  })

  const onDotsRowClick = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    setOpenIdRow(indx)
  }

  const openImgInNewTab = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenIdRow(null);
    console.log('openImgInNewTab')
  }

  const deleteImg = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenIdRow(null);
    const el = e.target as HTMLElement
    const elId = el.getAttribute('unit-id')
    console.log(elId)
    disptach(removeImg(elId))
    console.log('delete');
  }

  return (
    <>
      <ImgEntitySelectButton indx={id+1} active={selectedRows.includes(id+1)} callback={setSelectRowClick} />
      
      <p className={styles.menu_title} >{obj.name}</p>
      <p className={styles.menu_title} >{'some time ago'}</p>

      <div className={styles.menu_dropdown_container}>
        <ThreeDotsButton indx={id+1} callback={onDotsRowClick} />
        <div className={
          openIdRow==id+1 ?
          styles.dropdown_active :
          styles.dropdown_hide
        } >
          <div ref={refRowOptions as React.RefObject<HTMLDivElement>}>
            {dropDownConfig.map((obj, indx) => {
              
              switch (obj.type) {
                case EOptionImg.delete:
                  return <DropdownOptionUnit text={obj.text} key={indx} callback={deleteImg} id={id} />
                case EOptionImg.openInNewTab:
                  return <DropdownOptionUnit text={obj.text} key={indx} callback={openImgInNewTab} id={id} />
              }

            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryImgEntities