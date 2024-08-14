import React from 'react'

import styles from './ToolbarDelete.module.scss'

import rubbishBin from '@icons/rubbish-bin.svg'

const ToolbarDelete = ({
  callback
}: {
  callback: () => void
}) => {
  return (
    <button onClick={callback} className={styles.rubbish_bin}>
      <img src={rubbishBin} alt="rubbishbin"  className={styles.bin_img}/>
    </button>
  )
}

export default ToolbarDelete