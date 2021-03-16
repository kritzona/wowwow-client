import React from 'react'
import ButtonStyled from './ButtonStyled'
import Text from '../Text/Text'

interface IProps {
  color?: 'primary' | 'accent'
  type?: 'button' | 'reset' | 'submit'
  children?: React.ReactNode
  onClick?: () => void
}

const Button = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return (
    <ButtonStyled
      color={props.color}
      type={props.type}
      onClick={() => handleClick()}
    >
      <Text type="button-text">{props.children}</Text>
    </ButtonStyled>
  )
}

export default Button
