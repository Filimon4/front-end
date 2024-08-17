import React, { memo } from 'react'
import cn from "classnames";

import styles from "./PreviewImgEntity.module.scss";

const convertBytesToMb = (bytes: number) => (bytes / 1024 / 1024).toFixed(2)

const PreviewImgEntity = memo(function PreviewImgEntity({ file}: {
  file: File,
}) {
  return (
    <div className={cn(styles.subject_grid_unit)}>
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
})

export default PreviewImgEntity