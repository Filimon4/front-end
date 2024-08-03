import cn from "classnames";

import styles from './imghistory.module.scss'

import { IUploadedItem } from "@shared/types/imghistory.types";
import { useState } from "react";
import HistoryImgEntities from "@features/HistoryImgEntities";
import { RowsTheme } from "@shared/themes/imghistorytheme";

const mockEntities: Array<IUploadedItem> = [
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

const ImgHistory = () => {
  const [imgHistoryEntities] = useState<Array<IUploadedItem>>(mockEntities);
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const setSelectRowClick = (e: React.MouseEvent, indx: number) => {
    e.preventDefault()
    console.log(indx)
    if (selectedRows.includes(indx)) {
      setSelectedRows(selectedRows.filter(id => id != indx))
    } else {
      setSelectedRows([...selectedRows, indx])
    }
  }

  return (
    <RowsTheme.Provider value={{selectedRows, setSelectedRows, setSelectRowClick}}>
      <div className={styles.img_history}>
        <div className={cn(styles.history_menu, styles.history_menu_upper_border)}>
          <p />
          <p className={styles.history_title}>Name</p>
          <p className={styles.history_title}>Updated</p>
          <p />
        </div>
        {imgHistoryEntities.map((obj, indx) => (
          <div key={indx} className={cn(styles.history_menu, {
            [styles.menu_select_active]: selectedRows.includes(indx+1)
          })}>
            <HistoryImgEntities indx={indx} obj={obj} />
          </div>
        ))}
      </div>
    </RowsTheme.Provider>
  )
}

export default ImgHistory