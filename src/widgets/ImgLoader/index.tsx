import LoadImg from '@features/LoadImg'
import cn from "classnames";

import styles from './imgloader.module.scss'
import { useState } from 'react'
import ViewImg from '@features/ViewImg';
import { useAppSelector } from '@shared/lib/store/hooks/reduxTypesHooks';

const ImgLoader = () => {
  const {loadedImgs} = useAppSelector(state => state.imgSelected)

  return (
    <div className={styles.img_loader}>
      <div className={cn(styles.img_loader_subject, {[styles.img_loader_subject_active]: loadedImgs.length > 0})}>
        <LoadImg />
        <ViewImg />
      </div>
    </div>
  )
}

export default ImgLoader