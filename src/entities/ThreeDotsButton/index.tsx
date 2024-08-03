/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import styles from "./threedotsbutton.module.scss";

const ThreeDotsButton = ({indx, callback}: {indx: number, callback: (e: React.MouseEvent, ...args: any) => void}) => {
  return (
    <div className={styles.menu_dots}>
      <a onClick={(e) => callback(e, indx)} href="" className={styles.dropdown_dots} >
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </a>
    </div>
  )
}

export default ThreeDotsButton