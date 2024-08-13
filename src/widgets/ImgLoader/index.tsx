import LoadImg from '@features/LoadImg'
import cn from "classnames";

import styles from './imgloader.module.scss'
import { InputFileProvider, useInputFileContext } from '@shared/context/InputFileContext'
import { useState } from 'react'
import { SelectedFilesProvider } from '@shared/context/SelectedFilesContext'

const convertBytesToMb = (bytes: number) => (bytes / 1024 / 1024).toFixed(2)

const ImgLoader = () => {
  const refInputFile = useInputFileContext()
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  return (
    <SelectedFilesProvider state={{files: selectedFiles, setFiles: setSelectedFiles}}>
      <InputFileProvider refInputFile={refInputFile}>
        <div className={styles.img_loader}>
          <div className={cn(styles.img_loader_subject, {[styles.img_loader_subject_active]: selectedFiles.length > 0})}>
            <LoadImg maxFileSizeInMb={50}/>
            <div className={styles.loader_subject_grid}>
              {selectedFiles.map((file, indx) => (
                <div className={styles.subject_grid_unit}>
                  <img key={indx} src={URL.createObjectURL(file)} className={styles.grid_unit_img}/>
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
              ))}
            </div>
          </div>
        </div>
      </InputFileProvider>
    </SelectedFilesProvider>
  )
}

export default ImgLoader