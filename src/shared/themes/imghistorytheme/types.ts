export interface IRowsTheme {
  selectedRows: number[];
  setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectRowClick: (e: React.MouseEvent, indx: number) => void;
}