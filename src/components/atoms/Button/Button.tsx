import React from 'react'
import ButtonStyled from './ButtonStyled'
import Text from '../Text/Text'

interface IProps {
  children?: React.ReactNode
  onClick?: () => void
}

const Button = (props: IProps) => {
  return (
    <ButtonStyled>
      <Text type="button-text">{props.children}</Text>
    </ButtonStyled>
  )
}

export default Button
