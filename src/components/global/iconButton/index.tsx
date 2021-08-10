import React from 'react'
import { Button } from './styles'

export interface IIconButtonProps {
  imgUrl: string
}

export const IconButton: React.FC<IIconButtonProps> = (props): JSX.Element => {
  return <Button img={props.imgUrl} />
}
