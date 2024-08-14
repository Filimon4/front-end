import React from 'react'

import styles from "./ViewImg.module.scss";
import PreviewImgEntity from '@entities/PreviewImgEntity';
import { useAppSelector } from '@shared/lib/store/hooks/reduxTypesHooks';


const ViewImg = () => {
  const {loadedImgs} = useAppSelector(state => state.imgSelected)

  return (
    <div className={styles.loader_subject_grid}>
      {loadedImgs.map((file, indx) => (
        <PreviewImgEntity file={file} key={indx} />
      ))}
    </div>
  )
}

export default ViewImg