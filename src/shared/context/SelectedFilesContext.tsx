import { createContext, useContext } from "react";


const SelectedFilesContext = createContext<{files: File[], setFiles: React.Dispatch<React.SetStateAction<File[]>>}>({files: [], setFiles: () => File})

export const useSelectedFilesContext = () => {
  const {files, setFiles} = useContext(SelectedFilesContext)
  return {files, setFiles}
}

export const SelectedFilesProvider = ({children, state: {files, setFiles}}: {children: any, state: {files: File[], setFiles: React.Dispatch<React.SetStateAction<File[]>>}}) => {
  return (
    <SelectedFilesContext.Provider value={{files, setFiles}}>
      {children}
    </SelectedFilesContext.Provider>
  )
}
