import React from 'react'
import { Button } from './styles'

interface IIconButtonProps {
  imgUrl: string
  onClick?: () => void
}

export const IconButton: React.FC<IIconButtonProps> = (props): JSX.Element => {
  return <Button img={props.imgUrl} type='submit' onClick={props.onClick} />
}
