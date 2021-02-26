import React from 'react'
import ButtonStyled from './ButtonStyled'
import Text from '../Text/Text'

interface IProps {
  color?: 'primary' | 'accent'
  children?: React.ReactNode
  onClick?: () => void
}

const Button = (props: IProps) => {
  return (
    <ButtonStyled color={props.color}>
      <Text type="button-text">{props.children}</Text>
    </ButtonStyled>
  )
}

export default Button
