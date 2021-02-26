import React from 'react'
import ButtonStyled from './ButtonStyled'

interface IProps {
  onClick?: () => void
}

const Button = (props: IProps) => {
  return <ButtonStyled></ButtonStyled>
}

export default Button
