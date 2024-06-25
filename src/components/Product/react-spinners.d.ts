declare module 'react-spinners' {
  import { FC } from 'react'
  import {
    LoaderSizeProps,
    LoaderHeightWidthProps
  } from 'react-spinners/interfaces'

  export const PacmanLoader: FC<LoaderSizeProps>
  export const ClipLoader: FC<LoaderHeightWidthProps>
  // Adicione outros loaders conforme necessário
}
