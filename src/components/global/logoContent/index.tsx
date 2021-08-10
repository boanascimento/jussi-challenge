import React from 'react'
import { Image } from './styles'

interface ILogoContentProps {
  img: string
}

export const LogoContent: React.FC<ILogoContentProps> = (
  props,
): JSX.Element => {
  return <Image src={props.img} />
}
