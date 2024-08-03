import cn from "classnames";

import styles from './imghistory.module.scss'

import UploadImgHistory from '@features/UploadImgHistory';
import { TDropUnit } from "@shared/types/dropdownmenu.types";

const dropDownConfig: TDropUnit[] = [
  {
    text: 'Open in a New Browser Tab',
  },
  {
    text: 'Delete',
  }
]

const ImgHistory = () => {

  return (
    <div className={styles.img_history}>
      <div className={cn(styles.history_menu, styles.history_menu_upper_border)}>
        <p />
        <p className={styles.history_title}>Name</p>
        <p className={styles.history_title}>Updated</p>
        <p />
      </div>
      <UploadImgHistory menu={dropDownConfig} />
    </div>
  )
}

export default ImgHistory