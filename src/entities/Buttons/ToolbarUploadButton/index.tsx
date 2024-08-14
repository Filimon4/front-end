import React from 'react'

import uploadicon from '@icons/cloud-upload.svg'

import styles from "./ToolbarUpload.module.scss";

const ToolbarUpload = ({
  callback
}: {
  callback: () => void
}) => {
  return (
    <button className={styles.upload_button} onClick={callback}>
      <img src={uploadicon} alt="uploadicon" className={styles.upload_button_img} />
    </button>
  )
}

export default ToolbarUpload