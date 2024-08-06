import cn from "classnames";

import styles from './imghistory.module.scss'

import HistoryImgEntities from "@features/HistoryImgEntities";
import { TImgModel } from "@shared/types/imghistory.types";
import { useAppSelector } from "@shared/lib/store/hooks/reduxTypesHooks";


const ImgHistory = () => {
  const {imgs} = useAppSelector(state => state.imgHistory)
  
  return (
    <div className={styles.img_history}>
      <div className={cn(styles.history_menu, styles.history_menu_upper_border)}>
        <p />
        <p className={styles.history_title}>Name</p>
        <p className={styles.history_title}>Updated</p>
        <p />
      </div>
      {imgs.map((obj: TImgModel, indx: number) => (
        <div key={indx} className={cn(styles.history_menu, {
          [styles.menu_select_active]: obj.selected == true
        })}>
          <HistoryImgEntities id={obj.id} obj={obj} />
        </div>
      ))}
    </div>
  )
}

export default ImgHistory