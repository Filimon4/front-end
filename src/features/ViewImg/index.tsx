import React from 'react'

import styles from "./ViewImg.module.scss";
import { useSelectedFilesContext } from '@shared/context/SelectedFilesContext';
import PreviewImgEntity from '@entities/PreviewImgEntity';


const ViewImg = () => {
  const {files} = useSelectedFilesContext()

  return (
    <div className={styles.loader_subject_grid}>
      {files.map((file, indx) => (
        <PreviewImgEntity file={file} key={indx} />
      ))}
    </div>
  )
}

export default ViewImg