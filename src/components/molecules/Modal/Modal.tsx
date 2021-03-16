import React from 'react'
import {
  ModalBackgroundStyled,
  ModalStyled,
  ModalWrapperStyled,
} from './ModalStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import ModalHeader from './ModalHeader/ModalHeader'
import ModalContent from './ModalContent/ModalContent'

interface IProps {
  title: string
  children?: React.ReactNode
  onClose?: () => void
}

const Modal = (props: IProps) => {
  const handleClose = () => (props.onClose ? props.onClose() : null)

  return (
    <ModalStyled>
      <ModalBackgroundStyled
        onClick={() => handleClose()}
      ></ModalBackgroundStyled>
      <Wrapper paddingX={false}>
        <ModalWrapperStyled>
          <Row>
            <Column size={12}>
              <ModalHeader
                title={props.title}
                onClose={() => handleClose()}
              ></ModalHeader>
            </Column>
          </Row>
          <Row>
            <Column size={12}>
              <ModalContent>{props.children}</ModalContent>
            </Column>
          </Row>
        </ModalWrapperStyled>
      </Wrapper>
    </ModalStyled>
  )
}

export default Modal
