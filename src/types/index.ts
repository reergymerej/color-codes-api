export type Color = {
  id: number;
  value: string;
}

export type AddColorReqDTO = {
  value: string;
}

export type GetColorsResDTO = Color[]
