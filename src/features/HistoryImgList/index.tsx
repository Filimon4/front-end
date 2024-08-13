import React from 'react'
import cn from "classnames";

import { TImgModel } from '@shared/types/imghistory.types'

import styles from "./HistoryImg.module.scss";
import HistoryImgEntities from '@entities/HistoryImgEntity';

const HistoryImgList = ({
  imgs
} : {
  imgs: TImgModel[]
}) => {
  return (
    <>
      {imgs.map((obj: TImgModel, indx: number) => (
        <div key={indx} className={cn(styles.history_menu, {
          [styles.menu_select_active]: obj.selected == true
        })}>
          <HistoryImgEntities id={obj.id} obj={obj} />
        </div>
      ))}
    </>
  )
}

export default HistoryImgList