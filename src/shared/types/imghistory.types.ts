export type TImgModel = {
  id: number
  name: string
}

export interface IImgHistory {
  imgs: TImgModel[]
  isLoading: boolean,
  error: string
}