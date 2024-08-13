import React from 'react'

import cn from "classnames";

import styles from "./imgentityselectbutton.module.scss";

const ImgEntitySelectButton = (
  {
    active,
    indx,
    callback
  }
  :{
    active: boolean,
    indx: number,
    callback: (e: React.MouseEvent, ...args: any) => void
  }
) => {
  return (
    <div className={styles.menu_select} >
      <a 
      onClick={e => callback(e, indx)}
      className={cn(styles.select_button, {
        [styles.select_button_active]: active == true
      })}
      href=""/>
    </div>
  )
}

export default ImgEntitySelectButton