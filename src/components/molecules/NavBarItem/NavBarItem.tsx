import React from 'react'
import Text from '../../atoms/Text/Text'
import {
  NavBarItemIconStyled,
  NavBarItemStyled,
  NavBarItemTitleStyled,
} from './NavBarItemStyled'

interface IProps {}

const NavBarItem = (props: IProps) => {
  return (
    <NavBarItemStyled>
      <NavBarItemIconStyled></NavBarItemIconStyled>
      <NavBarItemTitleStyled>
        <Text type="caption">Home</Text>
      </NavBarItemTitleStyled>
    </NavBarItemStyled>
  )
}

export default NavBarItem
