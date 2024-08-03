import React, { useState } from 'react'
import styles from "./historyrowunit.module.scss";

import { IUploadedItem } from '@shared/types/imghistory.types';
import { TDropUnit } from '@shared/types/dropdownmenu.types';
import useClickOutside from '@shared/hooks/useClickOutside';

import DropdownOptionUnit from '@entities/DropdownOptionUnit';
import ThreeDotsButton from '@entities/ThreeDotsButton';
import ImgEntitySelectButton from '@entities/ImgEntitySelectButton';
import { useRowsTheme } from '@shared/themes/imghistorytheme';

const dropDownConfig: TDropUnit[] = [
  {
    text: 'Open in a New Browser Tab',
  },
  {
    text: 'Delete',
  }
]

const HistoryImgEntities = ({indx, obj}: {indx: number, obj: IUploadedItem}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {selectedRows, setSelectRowClick} = useRowsTheme()
  const [openIdRow, setOpenIdRow] = useState<number | null>(null);

  const refRowOptions = useClickOutside(() => {
    setOpenIdRow(null)
  })

  const onDotsRowClick = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    setOpenIdRow(indx)
  }

  const onOptionRowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenIdRow(null);
  }

  return (
    <>
      <ImgEntitySelectButton indx={indx+1} active={selectedRows.includes(indx+1)} callback={setSelectRowClick} />
      
      <p className={styles.menu_title} >{obj.name}</p>
      <p className={styles.menu_title} >{obj.timeAdded.getFullYear()}</p>

      <div className={styles.menu_dropdown_container}>
        <ThreeDotsButton indx={indx+1} callback={onDotsRowClick} />
        <div className={
          openIdRow==indx+1 ?
          styles.dropdown_active :
          styles.dropdown_hide
        } >
          <div ref={refRowOptions as React.RefObject<HTMLDivElement>}>
            {dropDownConfig.map((obj, indx) => (
              <DropdownOptionUnit text={obj.text} key={indx} callback={onOptionRowClick} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryImgEntities