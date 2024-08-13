import LoadImg from '@features/LoadImg'
import cn from "classnames";

import styles from './imgloader.module.scss'
import { InputFileProvider, useInputFileContext } from '@shared/context/InputFileContext'
import { useState } from 'react'
import { SelectedFilesProvider } from '@shared/context/SelectedFilesContext'
import ViewImg from '@features/ViewImg';


const ImgLoader = () => {
  const refInputFile = useInputFileContext()
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  return (
    <SelectedFilesProvider state={{files: selectedFiles, setFiles: setSelectedFiles}}>
      <InputFileProvider refInputFile={refInputFile}>
        <div className={styles.img_loader}>
          <div className={cn(styles.img_loader_subject, {[styles.img_loader_subject_active]: selectedFiles.length > 0})}>
            <LoadImg maxFileSizeInMb={50}/>
            <ViewImg />
          </div>
        </div>
      </InputFileProvider>
    </SelectedFilesProvider>
  )
}

export default ImgLoader