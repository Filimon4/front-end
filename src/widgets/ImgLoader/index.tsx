import LoadImg from '@entities/Buttons/LoadImgButton'
import cn from "classnames";

import styles from './imgloader.module.scss'
import { useState } from 'react'
import ViewImg from '@features/ViewImg';
import { useAppSelector } from '@shared/lib/store/hooks/reduxTypesHooks';
import ImgLoaderBar from '@features/ImgLoaderBar';

const ImgLoader = () => {
  const {loadedImgs} = useAppSelector(state => state.imgSelected)

  return (
    <div className={styles.img_loader}>
      <div className={cn(
        styles.img_loader_subject,
        {[styles.img_loader_subject_active]: loadedImgs.length > 0},
        {[styles.img_loader_subject_circle]: loadedImgs.length == 0}
      )}>
        <ImgLoaderBar />
        <ViewImg />
      </div>
    </div>
  )
}

export default ImgLoader