import cn from "classnames";

import styles from './imghistory.module.scss'

import { useAppSelector } from "@shared/lib/store/hooks/reduxTypesHooks";
import HistoryImgList from "@features/HistoryImgList";

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
      <HistoryImgList imgs={imgs} />
    </div>
  )
}

export default ImgHistory