import React, { useState } from 'react'
import styles from "./historyrowunit.module.scss";

import { TDropUnit } from '@shared/types/dropdownmenu.types';
import useClickOutside from '@shared/hooks/useClickOutside';

import DropdownOptionUnit from '@entities/DropdownOptionUnit/LinkUnit/DropdownLinkUnit';
import ThreeDotsButton from '@entities/ThreeDotsButton';
import ImgEntitySelectButton from '@entities/ImgEntitySelectButton';
import { TImgModel } from '@shared/types/imghistory.types';
import { imgHistoryActions } from '@shared/lib/store/slices/imgHistorySlice';
import { useAppDispatch, useAppSelector } from '@shared/lib/store/hooks/reduxTypesHooks';
import DropdownLinkUnit from '@entities/DropdownOptionUnit/LinkUnit/DropdownLinkUnit';

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

// TODO: При нажатии на 3 точки менять на крестик и обратно
const HistoryImgEntities = ({id, obj}: {id: number, obj: TImgModel}) => {
  const {imgs} = useAppSelector(state => state.imgHistory)
  const { selectRow, removeImg } = imgHistoryActions
  const disptach = useAppDispatch()

  const [openIdRow, setOpenIdRow] = useState<number | null>(null);

  const refRowOptions = useClickOutside(() => {
    setOpenIdRow(null)
  })

  const onDotsRowClick = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    setOpenIdRow(indx)
  }

  const openImgInNewTab = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    setOpenIdRow(null);
  }

  const deleteImg = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    setOpenIdRow(null);
    console.log(indx)
    disptach(removeImg(indx))
  }

  const setSelectRowClick = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    if (imgs.find(row => row.id == indx)?.selected) {
      disptach(selectRow({id: indx, selectState: false}))
    } else {
      disptach(selectRow({id: indx, selectState: true}))
    }
  }

  return (
    <>
      <ImgEntitySelectButton indx={id} active={imgs.find(row => row.id == id)?.selected ?? false} callback={setSelectRowClick} />
      
      <p className={styles.menu_title} >{obj.name}</p>
      <p className={styles.menu_title} >{'some time ago '}</p>

      <div className={styles.menu_dropdown_container}>
        <ThreeDotsButton indx={id} callback={onDotsRowClick} />
        <div className={
          openIdRow==id ?
          styles.dropdown_active :
          styles.dropdown_hide
        } >
          <div ref={refRowOptions as React.RefObject<HTMLDivElement>}>
            {dropDownConfig.map((obj, indx) => {
              switch (obj.type) {
                case EOptionImg.delete:
                  return <DropdownLinkUnit text={obj.text} key={indx} callback={deleteImg} id={id} />
                case EOptionImg.openInNewTab:
                  return <DropdownLinkUnit text={obj.text} key={indx} callback={openImgInNewTab} id={id} />
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryImgEntities