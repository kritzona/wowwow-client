import React from 'react'
import Text from '../../../atoms/Text/Text'
import {
  ModalHeaderEastStyled,
  ModalHeaderStyled,
  ModalHeaderWestStyled,
} from './ModalHeaderStyled'
import ModalClose from '../ModalClose/ModalClose'

interface IProps {}

const ModalHeader = (props: IProps) => {
  return (
    <ModalHeaderStyled>
      <ModalHeaderWestStyled>
        <Text type="heading-2">Модалка</Text>
      </ModalHeaderWestStyled>
      <ModalHeaderEastStyled>
        <ModalClose></ModalClose>
      </ModalHeaderEastStyled>
    </ModalHeaderStyled>
  )
}

export default ModalHeader
