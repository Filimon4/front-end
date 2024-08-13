import React, { createContext, useContext, useReducer, useRef } from "react";


const InputFileContext = createContext<React.RefObject<HTMLInputElement>>(React.createRef())

export const useInputFileContext = () => {
  const ref = useContext(InputFileContext)
  return ref
}

export const InputFileProvider = ({ children, refInputFile }: { children: any, refInputFile: React.RefObject<HTMLInputElement> }) => {
  return (
    <InputFileContext.Provider value={refInputFile}>
      {children}
    </InputFileContext.Provider>
  )
}
