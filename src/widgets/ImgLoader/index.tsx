import LoadImg from '@features/LoadImg'

import styles from './imgloader.module.scss'

const ImgLoader = () => {
  return (
    <div className={styles.img_loader}>
      <div className={styles.img_loader_subject}>
        
        <LoadImg/>    
      </div>
    </div>
  )
}

export default ImgLoader