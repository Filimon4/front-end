import React, { HTMLInputTypeAttribute, useEffect, useRef } from 'react'

import styles from "./inputunit.module.scss";

export type TDropdornInputUnit = {
  text: string,
  inputType: HTMLInputTypeAttribute,
  fileLink?: string,
  callback: (file: File, id: number) => void,
  id?: number,
  inputRef: React.RefObject<HTMLInputElement>
}

const DropdownInputUnit = ({
  text,
  inputType,
  fileLink = '',
  callback,
  id,
  inputRef
}: TDropdornInputUnit) => {


  const onClick = (e: React.MouseEvent) => {
    inputRef.current?.click()
    
  }

  const onImgChange = () => {
    //@ts-ignore
    if (inputRef.current?.files.length > 0 && inputRef.current?.files[0]) {
      callback(inputRef.current?.files[0], id!)
    }
  }

  return (
    <div className={styles.dropdown_unit} onClick={onClick}>
      {fileLink && <img src={fileLink} alt="" />}
      <label id='fileinput'>{text}</label>
      <input ref={inputRef} id='files' type={inputType} onChange={onImgChange} style={{display: 'none'}}/>
    </div>
  )
}

export default DropdownInputUnit