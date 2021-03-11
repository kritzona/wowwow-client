import React from 'react'
import { ModalCloseStyled } from './ModalCloseStyled'

interface IProps {
  onClick?: () => void
}

const ModalClose = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return <ModalCloseStyled onClick={() => handleClick()}></ModalCloseStyled>
}

export default ModalClose
