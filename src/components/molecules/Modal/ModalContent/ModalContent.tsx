import React from 'react'
import { ModalContentStyled } from './ModalContentStyled'

interface IProps {
  children?: React.ReactNode
}

const ModalContent = (props: IProps) => {
  return <ModalContentStyled>{props.children}</ModalContentStyled>
}

export default ModalContent
