import { createContext, useContext } from "react";
import { IRowsTheme } from "./types";

export const RowsTheme = createContext<IRowsTheme | null>(null)

export const useRowsTheme = (): IRowsTheme => {
  const {selectedRows, setSelectedRows, setSelectRowClick} = useContext(RowsTheme) as IRowsTheme
  return {selectedRows, setSelectedRows, setSelectRowClick}
}
