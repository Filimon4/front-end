import React from 'react'

import upload_file from '@icons/upload_file.svg'
import screen_shot from "@icons/screen_shot_link.svg"

import LoadImg from '@entities/Buttons/LoadImgButton'
import { useAppDispatch, useAppSelector } from '@shared/lib/store/hooks/reduxTypesHooks'
import { TDropUnit } from '@shared/types/dropdownmenu.types'

import styles from "./ImgLoaderBar.module.scss";
import LoadImgBar from '@entities/Buttons/LoadImgBarButton'
import ToolbarDelete from '@entities/Buttons/ToolbarDeleteButton'
import ToolbarUpload from '@entities/Buttons/ToolbarUploadButton'
import { imgSelectedActions } from '@shared/lib/store/slices/ImgSelectedSlice'

export enum EOptionLoader {
  'upload',
  'screenshot'
}

const dropDownConfig: TDropUnit[] = [
  {
    img: upload_file,
    text: 'File Upload',
    type: EOptionLoader.upload
  },
  {
    img: screen_shot,
    text: 'Take a Screen and Upload',
    type: EOptionLoader.screenshot
  }
]


const ImgLoaderBar = () => {
  const {loadedImgs, selectedImgs} = useAppSelector(state => state.imgSelected)
  const {removeLoadedImg, removeSelectedImg} = imgSelectedActions
  const dispatch = useAppDispatch()

  const onDeleteImgs = () => {
    console.log('remove imgs')
    const selectedFiles: File[] = []
    selectedImgs.forEach(v => {
      selectedFiles.push(loadedImgs[v])
    })
    dispatch(removeLoadedImg(selectedFiles))
    dispatch(removeSelectedImg(selectedImgs))
  }

  const onUploadImgs = () => {

  }

  return (
    <>
      {loadedImgs.length > 0 ? <>
        <div className={styles.loader_bar}>
          <div className={styles.loader_bar_button}>
            <LoadImgBar config={dropDownConfig} />
            <p>Drag & Drop, Browse, Screenshot</p>
          </div>
          <div className={styles.load_img_toolbar}>
            <p>Selected files: {selectedImgs.length}</p>
            {selectedImgs.length > 0 && <>
              <ToolbarDelete callback={onDeleteImgs} />
              <ToolbarUpload callback={onUploadImgs} />
            </>}
          </div>
        </div>
      </> : <>
        <LoadImg config={dropDownConfig} />
      </>}
    </>
  )
}

export default ImgLoaderBar