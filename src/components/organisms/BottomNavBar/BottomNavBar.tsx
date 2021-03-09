import React from 'react'
import Column from '../../atoms/Column/Column'
import Row from '../../atoms/Row/Row'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import { BottomNavBarStyled } from './BottomNavBarStyled'
import NavBarItem from '../../molecules/NavBarItem/NavBarItem'

interface IProps {}

const BottomNavBar = (props: IProps) => {
  return (
    <BottomNavBarStyled>
      <Wrapper>
        <Row>
          <Column desktopSize={3}>
            <NavBarItem></NavBarItem>
          </Column>
          <Column desktopSize={3}>
            <NavBarItem></NavBarItem>
          </Column>
          <Column desktopSize={3}>
            <NavBarItem></NavBarItem>
          </Column>
          <Column desktopSize={3}>
            <NavBarItem></NavBarItem>
          </Column>
        </Row>
      </Wrapper>
    </BottomNavBarStyled>
  )
}

export default BottomNavBar
