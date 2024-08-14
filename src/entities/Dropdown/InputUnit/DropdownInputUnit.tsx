import React, { HTMLInputTypeAttribute, useEffect, useRef } from 'react'

import styles from "./inputunit.module.scss";

export type TDropdornInputUnit = {
  text: string,
  inputType: HTMLInputTypeAttribute,
  fileLink?: string,
  callback: (file: FileList, id: number) => void,
  id?: number,
}

const DropdownInputUnit = ({
  text,
  inputType,
  fileLink = '',
  callback,
  id,
}: TDropdornInputUnit) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = (e: React.MouseEvent) => {
    inputRef.current?.click()
    
  }

  const onImgChange = () => {
    //@ts-ignore
    if (inputRef.current?.files.length > 0 && inputRef.current?.files) {
      callback(inputRef.current?.files, id!)
    }
  }

  return (
    <div className={styles.dropdown_unit} onClick={onClick}>
      {fileLink && <img src={fileLink} alt="" />}
      <label id='fileinput'>{text}</label>
      <input ref={inputRef} id='files' type={inputType} multiple onChange={onImgChange} accept='image/png, image/jpeg' style={{display: 'none'}}/>
    </div>
  )
}

export default DropdownInputUnit