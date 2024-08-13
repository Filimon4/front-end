import React from 'react'

import styles from "./PreviewImgEntity.module.scss";

const convertBytesToMb = (bytes: number) => (bytes / 1024 / 1024).toFixed(2)

const PreviewImgEntity = ({
  key,
  file
}: {
  key: number,
  file: File
}) => {
  return (
    <div className={styles.subject_grid_unit}>
      <img src={URL.createObjectURL(file)} className={styles.grid_unit_img}/>
      <div className={styles.grid_unit_panel}>
        <div className={styles.unit_panel_title}>
          <p>{file.name}</p>
          <span>{convertBytesToMb(file.size)} mb</span>
        </div>
        <div className={styles.unit_panel_upload}>
          <div className={styles.panel_upload_title}>
            <p>Status</p>
            <span>tip</span>
          </div>
          <button className={styles.panel_upload_button} />
        </div>
      </div>
    </div>
  )
}

export default PreviewImgEntity