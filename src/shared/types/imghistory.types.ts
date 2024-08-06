export type TImgModel = {
  id: number
  name: string,
  selected: boolean;
}

export interface IImgHistory {
  imgs: TImgModel[]
  isLoading: boolean,
  error: string,
}