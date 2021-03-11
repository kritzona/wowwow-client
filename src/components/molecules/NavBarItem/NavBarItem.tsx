import React from 'react'
import Text from '../../atoms/Text/Text'
import {
  NavBarItemIconStyled,
  NavBarItemStyled,
  NavBarItemTitleStyled,
} from './NavBarItemStyled'

interface IProps {
  title: string
  primaryIconSource?: string
  accentIconSource?: string
  whiteIconSource?: string
}

const NavBarItem = (props: IProps) => {
  return (
    <NavBarItemStyled>
      <NavBarItemIconStyled></NavBarItemIconStyled>
      <NavBarItemTitleStyled>
        <Text type="caption">{props.title}</Text>
      </NavBarItemTitleStyled>
    </NavBarItemStyled>
  )
}

export default NavBarItem
