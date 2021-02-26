import React from 'react'
import HeaderStyled from './HeaderStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Button from '../../atoms/Button/Button'

interface IProps {}

const Header = (props: IProps) => {
  return (
    <HeaderStyled>
      <Wrapper paddingY={true}>
        <Row gutter={true}>
          <Column size={4} mobileSize={6}>
            <Button color="accent">Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
          <Column size={4} mobileSize={6}>
            <Button>Нажми на меня</Button>
          </Column>
        </Row>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
