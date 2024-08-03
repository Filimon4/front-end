import React, { useState } from 'react'

import cn from "classnames";

import styles from "./historyrowunit.module.scss";

import { IUploadedItem } from '@shared/types/imghistory.types';
import { TDropUnit } from '@shared/types/dropdownmenu.types';
import useClickOutside from '@shared/hooks/useClickOutside';

import DropdownUnit from '@entities/DropdownUnit';

const mockHistory: Array<IUploadedItem> = [
  {
    name: 'SomeImg',
    timeAdded: new Date()
  },
  {
    name: 'SomeImg',
    timeAdded: new Date()
  },
  {
    name: 'SomeImg',
    timeAdded: new Date()
  },
]

const UploadImgHistory = ({menu}: {menu: TDropUnit[]}) => {
  const [imgHistoryList] = useState<Array<IUploadedItem>>(mockHistory);
  const [openIdRow, setOpenIdRow] = useState<number | null>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const refRowOptions = useClickOutside(() => {
    setOpenIdRow(null)
  })

  const onDotsRowClick = (e: React.MouseEvent, indx: number) => {
    e.stopPropagation()
    e.preventDefault()
    setOpenIdRow(indx)
  }

  
  const onSelectRow = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    if (selectedRows.includes(indx)) {
      setSelectedRows(selectedRows.filter(id => id != indx))
    } else {
      setSelectedRows([...selectedRows, indx])
    }
  }
  
  const onOptionRowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenIdRow(null);
  }

  return (
    <>
      {imgHistoryList.map((obj, indx) => (
        <div key={indx} className={cn(styles.history_menu, {
          [styles.menu_select_active]: selectedRows.includes(indx+1)
        })}>
          <div className={styles.menu_select} >
            <a onClick={e => onSelectRow(e, indx+1)} className={cn(styles.select_button, {
              [styles.select_button_active]: selectedRows.includes(indx+1)
            })} href=""></a>
          </div>
          <p className={styles.menu_title} >{obj.name}</p>
          <p className={styles.menu_title} >{obj.timeAdded.getFullYear()}</p>
          <div className={styles.menu_dropdown_container}>
            <div className={styles.menu_dots}>
              <a onClick={(e) => onDotsRowClick(e, indx+1)} href="" className={styles.dropdown_dots} >
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </a>
            </div>
            <div className={
              openIdRow==indx+1 ?
              styles.dropdown_active :
              styles.dropdown_hide
            } >
              <div ref={refRowOptions as React.RefObject<HTMLDivElement>}>
                {menu.map((obj, indx) => (
                  <DropdownUnit text={obj.text} key={indx} callback={onOptionRowClick} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default UploadImgHistory