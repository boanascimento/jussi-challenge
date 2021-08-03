import React from 'react'
import { Button } from './styles'

interface ITransparentButtonProps {
  text: string
  onClick?: () => void
}

export const TransparentButton: React.FC<ITransparentButtonProps> = (
  props,
): JSX.Element => {
  return <Button onClick={props.onClick}>{props.text}</Button>
}
