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
    <NavBarItemStyled
      primaryIconSource={props.primaryIconSource}
      accentIconSource={props.accentIconSource}
      whiteIconSource={props.whiteIconSource}
    >
      <NavBarItemIconStyled
        primaryIconSource={props.primaryIconSource}
        accentIconSource={props.accentIconSource}
        whiteIconSource={props.whiteIconSource}
      ></NavBarItemIconStyled>
      <NavBarItemTitleStyled>
        <Text type="caption">{props.title}</Text>
      </NavBarItemTitleStyled>
    </NavBarItemStyled>
  )
}

export default NavBarItem
